import React from 'react';

import css from "./index.module.css"
import Home from "../HomePage"
import Login from "../Login"
import { useAppDispatch } from 'src/hook';
import { addTodo, } from 'src/store/todoSlice';
import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from 'src/hook';
import PrivateRoute from '../SearchRoute';
import SearchScanRoute from '../SearchScanRoute';

function Main() {
    var autorize = useAppSelector((state: { autorize: any; }) => state.autorize)


    //тут проверяем наличие токена в локал сторедж
    //нужно дописать логику с протухшим токеном а то баг
    const dispatch = useAppDispatch();
    var a = localStorage.getItem('token')
    if (a !== null) {
        console.log("token-t", a)
        dispatch(addTodo(a));
    }
    return (
        <main className={css.main}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/search" element={<PrivateRoute autorize={autorize.user} />} />
                <Route path="/search/scan" element={<SearchScanRoute autorize={true} />} />

            </Routes>

        </main>
    );

}




export default Main;
