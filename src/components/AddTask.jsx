// import React, { useContext } from "react";
// import { useState } from "react";
// import TasksContext from "../context/TasksContext";

// const AddTask = () => {

//     const { state, dispatch } = useContext(TasksContext)

//     const [title, setTitle] = useState("");
//     const [des, setDes] = useState("");

//     const addTask = (e) => {
//         e.preventDefault();
//         console.log({ title, des });
//     };

//     return (
//         <div className="bg-background mt-24 flex flex-col items-center justify-center">
//             <form className="mx-auto w-3/4 rounded-md bg-slate-400 p-6 shadow-lg">
//                 <div className="space-y-4">
//                     <div>
//                         <label
//                             htmlFor="name"
//                             className="text-foreground mb-1 block text-sm font-medium"
//                         >
//                             Name
//                         </label>
//                         <input
//                             id="name"
//                             type="text"
//                             placeholder="Enter your name"
//                             value={title}
//                             onChange={(e) => setTitle(e.target.value)}
//                             className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2"
//                         />
//                     </div>
//                     <div>
//                         <label
//                             htmlFor="message"
//                             className="text-foreground mb-1 block text-sm font-medium"
//                         >
//                             Message
//                         </label>
//                         <textarea
//                             id="message"
//                             placeholder="Enter your message"
//                             value={des}
//                             onChange={(e) => setDes(e.target.value)}
//                             className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2"
//                             rows={4}
//                         />
//                     </div>
//                     <div>
//                         <button
//                             type="submit"
//                             className="rounded-md bg-slate-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
//                             onClick={(e) => addTask(e)}
//                         >
//                             Add
//                         </button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default AddTask;


import React, { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";

const AddTask = () => {
    const { state, dispatch } = useContext(TasksContext);

    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");

    const addTask = (e) => {
        e.preventDefault();
        const task = { title, des };
        dispatch({ type: "ADD_TASK", payload: task });
        setTitle("");
        setDes("");
    };

    return (
        <div className="bg-background mt-24 flex flex-col items-center justify-center">
            <p className="text-center">{`Currently ${state.tasksList.length} Task(s) bending`}</p>
            <form className="mx-auto w-3/4 rounded-md bg-slate-400 p-6 shadow-lg">
                <div className="space-y-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="text-foreground mb-1 block text-sm font-medium"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="text-foreground mb-1 block text-sm font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            placeholder="Enter your message"
                            value={des}
                            onChange={(e) => setDes(e.target.value)}
                            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2"
                            rows={4}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="rounded-md bg-slate-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                            onClick={(e) => addTask(e)}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddTask;
