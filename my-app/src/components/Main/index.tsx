import React from 'react';

import css from "./index.module.css"
import Home from "../HomePage"
import Login from "../Login"
import { Routes, Route } from 'react-router-dom';

function Main() {
    return (
        <main className={css.main}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />

            </Routes>

        </main>
    );
}

export default Main;
