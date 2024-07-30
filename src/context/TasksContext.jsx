import React, { useReducer, createContext } from "react";

export const TasksContext = createContext();

const tasksReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const id = Math.random() * 1000;
      const task = { ...action.payload, id };
      return { ...state, tasksList: [...state.tasksList, task] };

    case "REMOVE_TASK":
      const filteredList = state.tasksList.filter(
        (task) => task.id !== action.payload.id
      );
      return { ...state, tasksList: filteredList };

    case "UPDATE_TASK":
      const updatedList = state.tasksList.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      return { ...state, tasksList: updatedList };

    case "GET_TASK":
      return { ...state };

    case "SET_SELECT_TASK":
      return { ...state, selectTask: { ...action.payload } };

    case "GET_SELECT_TASK":
      return { ...state };

    default:
      return state;
  }
};

const initialState = {
  tasksList: [],
  selectTask: {},
};

const TasksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
