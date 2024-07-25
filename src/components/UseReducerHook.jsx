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
        <div>
            <h1>Balance : {state}</h1>
            <div>
                <button onClick={() => dispatch({ type: "WITHDRAW", payload: 500 })}>
                    Withdraw
                </button>
                <button onClick={() => dispatch({ type: "DEPOSITE", payload: 500 })}>
                    Deposite
                </button>
            </div>
        </div>
    );
};

export default UseReducerHook;
