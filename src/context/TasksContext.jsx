import React, { useReducer } from "react";
import { createContext } from "react";

export const tasksContext = createContext();

const tasksReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const id = Math.random() * 1000;
      let task = { ...action.payload, id };
      return { ...state, tasksList: [...state.tasksList, task] };

    case "REMOVE_TASK":
      let list = state.tasksList.filter(
        (task) => task.id !== action.payload.id,
      );
      return { ...state, tasksList: list };

    case "UPDATE_TASK":
      let updateList = state.tasksList.map((task) =>
        task.id === action.payload.id ? action.payload : task,
      );
      return { ...state, tasksList: [...updateList] };

    case "GET_TASK":
      return state.tasksList;

    case "SET_SELECT_TASK":
      return { ...state, selectTask: action.payload };

    case "GET_SELECT_TASK":
      return state.selectTask;

    default:
      return state;
  }
};

const initialState = {
  tasksList: [],
  selectTask: {},
};

const TasksContext = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  return (
    <tasksContext.Provider value={{ state, dispatch }}>
      {children}
    </tasksContext.Provider>
  );
};

export default TasksContext;
