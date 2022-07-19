import { useContext } from "react";
import { TodoContext } from "../../App";

import styles from "./Filter.module.css";
export default function Filter() {
    const { filter } = useContext(TodoContext);
    const [setFilterState] = filter;

    return (
        <div className={styles.Filter}>
            <select
                name="filter"
                id="filter"
                className={`${styles.Filter_Selector} custom-select`}
                onChange={(e) => {
                    setFilterState(e.target.value);
                }}
            >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    );
}
