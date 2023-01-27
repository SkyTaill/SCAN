import React from 'react';

import css from "./index.module.css"

import Slider from "../Slider"
import sliderDate from '../../slider-mock.json'


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
                    <Slider sliderDate={sliderDate} />
                </div>
            </section>

            <section>
                <div className={css.centr_pic} >
                    <div className={css.leftPic}></div>
                    <div className={css.divCentrPic}>
                        <div className={css.centrPic}></div>
                    </div>

                    <div className={css.rightPic}></div>
                </div>
            </section>

            <section className={css.flex_block_corusel} style={{ marginBottom: "118px" }}>
                <h2 className={css.capital_h2_text}> наши тарифы</h2>
                <div className={css.centrBlock}>
                    <div className={css.centr_pic}>
                        <div className={css.tarifBlockBeginner}>
                            <div className={css.yellowBlock}>
                                <div className={css.flex}>
                                    <div>
                                        <h1>Beginner</h1>
                                        <p>Для небольшого исследования</p>
                                    </div>
                                    <div className={css.picLamp}>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className={css.tarifBlock}></div>
                        <div className={css.tarifBlock}></div>

                    </div>
                </div>




            </section>


        </div>
    );
}

export default Home;
