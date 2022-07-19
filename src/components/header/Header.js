import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.Header}>
            <nav className={styles.Nav}>
                <h1 className={styles.Logo}>
                    <Link to="/">Todo-App</Link>
                </h1>
                <div className={styles.Auth}>
                    <button className={styles.Login}>Log In</button>
                    <button className={styles.Register}>Register</button>
                </div>
            </nav>
        </header>
    );
}
