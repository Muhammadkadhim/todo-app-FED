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
                    <Link to="/dashboard" className={styles.Login}>
                        Log In
                    </Link>
                    <Link to="/preferences" className={styles.Register}>
                        Register
                    </Link>
                </div>
            </nav>
        </header>
    );
}
