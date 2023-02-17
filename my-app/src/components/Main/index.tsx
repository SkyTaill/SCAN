import React from 'react';

import css from "./index.module.css"
import Home from "../HomePage"
import Login from "../Login"

import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from 'src/hook';
import PrivateRoute from '../SearchRoute';

function Main() {
    var autorize = useAppSelector((state: { autorize: any; }) => state.autorize)
    return (
        <main className={css.main}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/search" element={<PrivateRoute autorize={autorize.user} />} />

            </Routes>

        </main>
    );

}




export default Main;
