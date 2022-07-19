import { useContext } from "react";
import { TodoContext } from "../../App";

import uuid from "react-uuid";
import styles from "./New.module.css";

export default function New() {
    const { task, tasks } = useContext(TodoContext);
    const [taskState, setTaskState] = task;
    const [tasksState, setTasksState] = tasks;

    const inputHandler = (e) => {
        setTaskState(e.target.value);
    };

    const handleTask = (e) => {
        e.preventDefault();
        setTasksState([
            ...tasksState,
            { id: uuid(), text: taskState, completed: false },
        ]);

        setTaskState("");
    };

    return (
        <div className={styles.New} onSubmit={handleTask}>
            <form className={styles.Form}>
                <input
                    type="text"
                    name="new-task"
                    id="new-task"
                    placeholder="Add new..."
                    className={styles.Form_Input}
                    onChange={inputHandler}
                    value={taskState}
                    required
                    autoComplete="off"
                />
                <button className={styles.Form_Btn}>Add</button>
            </form>
        </div>
    );
}
