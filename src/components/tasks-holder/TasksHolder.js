import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../App";

import styles from "./TasksHolder.module.css";
import Task from "../../components/task/Task";

import { FaTasks } from "react-icons/fa";

export default function TaskHolder() {
    const { tasks, filter } = useContext(TodoContext);
    const [tasksState, setTasksState] = tasks;
    const [filterState] = filter;

    const [notification, setNotification] = useState(false);

    const notificationHandler = () => {
        tasksState.length === 0
            ? setNotification(true)
            : setNotification(false);
    };

    useEffect(() => {
        notificationHandler();
    });

    return (
        <div className={styles.TasksHolder}>
            {tasksState.map((task) => {
                return filter === "all"
                    ? "all"
                    : filter === "completed"
                    ? "completed"
                    : filter === "uncompleted"
                    ? "uncompleted"
                    : "";
            })}

            <div
                className={`${styles.Notification} ${
                    notification ? styles.Appear : ""
                }`}
            >
                <FaTasks style={{ fontSize: "5rem", opacity: ".4" }} />
                <h3>Your Tasks will appear here</h3>
            </div>
        </div>
    );
}
