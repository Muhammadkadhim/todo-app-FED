import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";

import Home from "./pages/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Preferences from "./pages/preferences/Preferences";
import Login from "./components/login/Login";

export const TodoContext = createContext();

export default function App() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const [filter, setFilter] = useState("all");

    const [token, setToken] = useState();

    // if (!token) return <Login setToken={setToken} />;
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
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/dashboard" element={<Dashboard />}></Route>
                    <Route path="/dashboard" element={<Preferences />}></Route>
                </Routes>
            </TodoContext.Provider>
        </div>
    );
}
