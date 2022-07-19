import Filter from "../components/filter/Filter";
import NewForm from "../components/new-task-input/New";
import TasksHolder from "../components/tasks-holder/TasksHolder";

export default function Home() {
    return (
        <main>
            <NewForm />
            {/* <Filter /> */}
            <TasksHolder />
        </main>
    );
}
