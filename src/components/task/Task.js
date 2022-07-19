import styles from "./Task.module.css";
import { FaTimes, FaUndoAlt } from "react-icons/fa";
import { useState } from "react";
export default function Task(props) {
    const [updatedTask, setUpdatedTask] = useState(props.task.text);

    const deleteTaskHandler = () => {
        props.setTasksState(
            props.tasksState.filter((item) => item.id !== props.task.id)
        );
    };
    const completionHandler = () => {
        props.setTasksState(
            props.tasksState.map((item) => {
                if (item.id === props.task.id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    };
    const updateHandler = (e) => {
        e.preventDefault();
        props.setTasksState(
            props.tasksState.map((item) => {
                if (item.id === props.task.id) {
                    return { ...item, text: updatedTask };
                }
                return item;
            })
        );
    };

    return (
        <div className={styles.Task} id="taskHolder">
            <form onSubmit={updateHandler}>
                <input
                    type="checkbox"
                    name="completed"
                    id="completed"
                    onChange={completionHandler}
                />
                <input
                    type="text"
                    className={styles.Task_Title}
                    value={updatedTask}
                    onChange={(e) => {
                        setUpdatedTask(e.target.value);
                    }}
                    onBlur={updateHandler}
                />
                {/* <p className={styles.Task_Title}>{props.task.text}</p> */}
            </form>
            <button
                className={`${styles.Delete} ${
                    props.task.completed ? styles.Appear : ""
                }`}
                onClick={deleteTaskHandler}
            >
                <FaTimes />
            </button>
        </div>
    );
}
