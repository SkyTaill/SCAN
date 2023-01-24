import React from 'react';

import css from "./index.module.css"
import Slider from "../Slider"

function Home() {
    return (
        <div>
            <section className={css.flex_block}>
                <div className={css.flex_text_block}>
                    <h1 className={css.capital_h1_text}>сервис по поиску публикаций о компании по его ИНН</h1>
                    <p className={css.text_p_search_info}>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
                    <button className={css.buttom_get_date}>Запросить данные</button>
                </div>
                <div className={css.backround_img}>
                </div>
            </section>

            <section className={css.flex_block_corusel}>
                <h2 className={css.capital_h2_text} >Почему именно мы</h2>
                <div>
                    <Slider />
                </div>
            </section>


        </div>
    );
}

export default Home;
