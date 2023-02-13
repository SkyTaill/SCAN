import React from 'react';
import { Link } from 'react-router-dom'
import css from "./index.module.css"
import { useAppSelector } from 'src/hook';
import { HOST } from "../../API"
import { useState } from 'react';

interface EventFiltersInfo {
    usedCompanyCount: number;
    companyLimit: number;
}


const Header: React.FC = () => {

    const [infoUser, setInfoUser] = useState<EventFiltersInfo>();
    // const [needUpdate, setNeedUpdate] = useState(true);
    const redux = useAppSelector(state => state.todos)

    const loginIn = async () => {
        try {
            const options = {
                // Будем использовать метод POST
                method: 'GET',
                contentType: 'application/json',
                headers: {
                    'Authorization': "Bearer " + redux.token
                }
            }
            // Делаем запрос за данными
            await fetch(HOST + '/account/info', options)
                .then(response => {
                    if (!response.ok) {
                        //  setError( response.json.)
                        // response.json()
                        throw new Error('Error occurred!')

                    }
                    return response.json()
                })
                .then(json => {
                    var infoUser1: EventFiltersInfo = json.eventFiltersInfo;
                    setInfoUser(infoUser1)
                    //  setNeedUpdate(false)
                    //  console.log("===", infoUser)
                }

                ).catch((err) => {
                    //   setError(false)
                    console.log(err, options, "error")
                })

        } catch {
            console.log("errrer")
        }
    }
    console.log(infoUser, redux.completed)
    console.log(infoUser)
    if (redux.completed) {
        loginIn()
        console.log(infoUser, "1")
    }




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
