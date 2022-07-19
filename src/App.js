import { useState, createContext } from "react";
import Filter from "./components/filter/Filter";
import Header from "./components/header/Header";
import NewForm from "./components/new-task-input/New";
import TasksHolder from "./components/tasks-holder/TasksHolder";

export const TodoContext = createContext();

export default function App() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");

    return (
        <div className="App">
            <TodoContext.Provider
                value={{
                    task: [task, setTask],
                    tasks: [tasks, setTasks],
                    filter: [filter, setFilter],
                }}
            >
                <Header />
                <main>
                    <NewForm />
                    <Filter />
                    <TasksHolder />
                </main>
            </TodoContext.Provider>
        </div>
    );
}
