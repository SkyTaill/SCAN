import React from 'react';
import { Link } from 'react-router-dom'
import css from "./index.module.css"
import { useAppSelector } from 'src/hook';
import { HOST } from "../../API"

function Header() {
    const token = useAppSelector(state => state.todos)

    console.log(token)
    return (
        <header className={css.header}>
            <div className={css.header_content}>
                <div className={css.scan}></div>
                <div className={css.menu}>
                    <Link to={`/`} >
                        <button className={css.menu_item_l}>Главная</button>
                    </Link>
                    <button className={css.menu_item}>Тарифы</button>
                    <button className={css.menu_item}>FAQ</button>
                </div>
                <div className={css.loginOrRegistrate}>
                    <div className={css.registate}>Зарегистрироваться</div>
                    <div className={css.line}></div>
                    <Link to={`/login`} >
                        <button className={css.button_login}>Войти</button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
