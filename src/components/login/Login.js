import { useState } from "react";
import styles from "./Login.module.css";

const logginUser = async (credentials) => {
    return fetch("http://localhost:3001/login", {
        method: "POST",
        header: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(credentials),
    }).then((data) => data.json());
};

export default function Login(props) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await logginUser({ username, password });
        props.setToken(token);
    };

    return (
        <div className={styles.Login_Wrapper}>
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input
                        type="text"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </label>
                <label>
                    <p>Password</p>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
