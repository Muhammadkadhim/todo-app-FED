import styles from "./Task.module.css";
import { FaTimes } from "react-icons/fa";
export default function Task(props) {
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

    return (
        <div className={styles.Task} id="taskHolder">
            <div>
                <input
                    type="checkbox"
                    name="completed"
                    id="completed"
                    onChange={completionHandler}
                />
                <p className={styles.Task_Title}>{props.task.text}</p>
            </div>
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
