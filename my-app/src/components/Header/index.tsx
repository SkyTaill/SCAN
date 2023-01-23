import React from 'react';

import css from "./index.module.css"

function Header() {
    return (
        <header className={css.header}>
            <div className={css.header_content}>
                <div className={css.scan}></div>
                <div className={css.menu}>
                    <button className={css.menu_item}>Главная</button>
                    <button className={css.menu_item}>Тарифы</button>
                    <button className={css.menu_item}>FAQ</button>
                </div>
                <div className={css.loginOrRegistrate}>
                    <div className={css.registate}>Зарегистрироваться</div>
                    <div className={css.line}></div>
                    <button className={css.button_login}>Войти</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
