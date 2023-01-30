import React from 'react';

import css from "./index.module.css"




function Login() {
    return (
        <div>
            <div className={css.flex_block}>
                <div className={css.marginLog}>
                    <h1 className={css.h1Text}>Для оформления подписки
                        на тариф, необходимо авторизоваться.</h1>
                    <div className={css.picCharacters}></div>
                </div>
                <div className={css.picLock}>

                </div>
                <div className={css.loginBlock}>
                    <div className={css.loginMenu}>
                        <div className={css.flex_block}>
                            <div>
                                <h4 className={css.logInText}>
                                    Войти
                                </h4>
                                <div className={css.loginLine}>

                                </div>
                            </div>
                            <div className={css.loginMenu}>
                                <h4 className={css.registrMenuText}>
                                    Зарегистрироваться
                                </h4>
                                <div className={css.registrLine}>

                                </div>
                            </div>

                        </div>
                        <p className={css.textLoginBox} style={{ marginTop: "40px" }}>Логин или номер телефона:</p>
                        <input type="text" className={css.input} />
                        <p className={css.textLoginBox} style={{ marginTop: "40px" }}>Пароль:</p>
                        <input type="text" className={css.input} />

                        <button className={css.buttonLogIn} style={{ marginTop: "40px" }}>Войти</button>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Login;
