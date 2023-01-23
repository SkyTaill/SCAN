import React from 'react';

import css from "./index.module.css"

function Home() {
    return (
        <div className={css.flex_block}>
            <div className={css.flex_text_block}>
                <h1 className={css.capital_h1_text}>сервис по поиску публикаций о компании по его ИНН</h1>
                <p className={css.text_p_search_info}>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
                <button className={css.buttom_get_date}>Запросить данные</button>
            </div>
            <div className={css.backround_img}>

            </div>
        </div>
    );
}

export default Home;
