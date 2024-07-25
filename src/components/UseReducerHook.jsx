import React, { useReducer } from "react";

const UseReducerHook = () => {
  const transactionReducer = (stat, action) => {
    switch (action.type) {
      case "WITHDRAW":
        return stat - action.payload;
        break;
      case "DEPOSITE":
        return stat + action.payload;
        break;

      default:
        return state;
        break;
    }
  };

  const [state, dispatch] = useReducer(transactionReducer, 1000);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Balance : {state}</h1>
      <div className="flex gap-6 text-white">
        <button
          onClick={() => dispatch({ type: "WITHDRAW", payload: 500 })}
          className="rounded-md bg-cyan-600 px-6 py-3"
        >
          Withdraw
        </button>
        <button
          onClick={() => dispatch({ type: "DEPOSITE", payload: 500 })}
          className="rounded-md bg-cyan-600 px-6 py-3"
        >
          Deposite
        </button>
      </div>
    </div>
  );
};

export default UseReducerHook;
