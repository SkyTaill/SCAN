import React from 'react';

import css from "./index.module.css"


import { useAppSelector } from 'src/hook';
import { Histograms } from "../../DTO/histogram"
import { HOST } from "../../API"

function Search() {


    const redux = useAppSelector(state => state.todos)
    //const autorize = false
    //let histogram:Histograms
    // {
    //     "issueDateInterval": {
    //       "startDate": "2019-01-01T00:00:00+03:00",
    //       "endDate": "2022-08-31T23:59:59+03:00"
    //     },
    //     "searchContext": {
    //       "targetSearchEntitiesContext": {
    //         "targetSearchEntities": [
    //           {
    //             "type": "company",

    //             "inn": 7710137066,
    //             "maxFullness": true

    //           }
    //         ],
    //         "onlyMainRole": true,
    //         "tonality": "any",
    //         "onlyWithRiskFactors": false


    //       }

    //     },

    //     "attributeFilters": {
    //       "excludeTechNews": true,
    //       "excludeAnnouncements": true,
    //       "excludeDigests": true
    //     },
    //     "similarMode": "duplicates",
    //     "limit": 1000,
    //     "sortType": "sourceInfluence",
    //     "sortDirectionType": "desc",
    //     "intervalType": "month",
    //     "histogramTypes": [
    //       "totalDocuments",
    //       "riskFactors"
    //     ]
    //   }
    let histogram: Histograms = {
        issueDateInterval: {
            startDate: "2019-01-01T00:00:00+03:00",
            endDate: "2022-08-31T23:59:59+03:00"
        },
        searchContext:
        {
            targetSearchEntitiesContext: {
                targetSearchEntities: [
                    {
                        type: "company",
                        //  sparkId: null,
                        //   entityId: null,
                        inn: 7710137066,
                        maxFullness: true
                    }
                ],
                onlyMainRole: true,
                tonality: "any",
                onlyWithRiskFactors: false
            }
        },
        attributeFilters: {
            excludeTechNews: true,
            excludeAnnouncements: true,
            excludeDigests: true
        },
        similarMode: "duplicates",
        limit: 1000,
        sortType: "sourceInfluence",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramTypes: [
            "totalDocuments",
            "riskFactors"
        ]
    }
    //  getHistogram()
    console.log(histogram)
    getHistogram(histogram)

    return (
        <div className={css.block} >
            <div className={css.flex}>
                <div>
                    <h1 className={css.h1_title}>Найдите необходимые данные в пару кликов.</h1>
                    <p className={css.p_text}>Задайте параметры поиска.
                        Чем больше заполните, тем точнее поиск</p>
                </div>
                <div className={css.flex}>
                    <div className={css.dockPickter}>  </div>
                    <div className={css.DoubleDockPickter}></div>
                </div>


            </div>
            <div className={css.flex}>

                <section className={css.sectionBlock}>
                    <div className={css.sectionBlock_margin}>
                        <div className={css.sectionBlock_leftBlock}>
                            <p className={css.p_text}>ИНН компании *</p>
                            <input className={css.input}></input>
                            <p className={css.p_text}>Тональность</p>


                            <select id="selectvalue" className={`${css.input}  ${css.p_text}`}>
                                <option className={`${css.input}  ${css.p_text}`}>позитивная</option>
                                <option className={`${css.input}  ${css.p_text}`}>негативная</option>
                                <option className={`${css.input}  ${css.p_text}`}>любая</option>
                            </select>


                            <p className={css.p_text}>Количество документов в выдаче *</p>
                            <input className={css.input}></input>

                            <p className={`${css.p_text}  ${css.dateMarginTop}`}>Диапазон поиска *</p>
                            <div className={css.flexDate}>
                                <input className={`${css.input}  ${css.p_text}`} type="date" />
                                <input className={`${css.input} ${css.marginInput} ${css.p_text}`} type="date" />
                            </div>
                        </div>
                        <div>
                            <div className={css.sectionBlock_marginRightBlock}>
                                <div className={`${css.marginChekbox} ${css.whideCheckbox}`}>
                                    <label className={`${css.marginChekbox} ${css.p_text}`}>
                                        <input type="checkbox" id="scales1" name="scales" className={css.chekbox} />
                                        Признак максимальной полноты
                                    </label>
                                </div>
                                <div className={`${css.marginChekbox} ${css.whideCheckbox}`}>
                                    <label className={`${css.marginChekbox} ${css.p_text}`}>
                                        <input type="checkbox" id="scales2" name="scales" className={css.chekbox} />
                                        Упоминания в бизнес-контексте
                                    </label>
                                </div>
                                <div className={`${css.marginChekbox} ${css.whideCheckbox}`}>
                                    <label className={`${css.marginChekbox} ${css.p_text}`}>
                                        <input type="checkbox" id="scales3" name="scales" className={css.chekbox} />
                                        Публикации только с риск-факторами
                                    </label>
                                </div>
                                <div className={`${css.marginChekbox} ${css.whideCheckbox}`}>
                                    <label className={`${css.marginChekbox} ${css.p_text}`}>
                                        <input type="checkbox" id="scales4" name="scales" className={css.chekbox} />
                                        Включать технические новости рынков
                                    </label>
                                </div>
                                <div className={`${css.marginChekbox} ${css.whideCheckbox}`}>
                                    <label className={`${css.marginChekbox} ${css.p_text}`}>
                                        <input type="checkbox" id="scales5" name="scales" className={css.chekbox} />
                                        Включать анонсы и календари
                                    </label>
                                </div>
                                <div className={`${css.marginChekbox} ${css.whideCheckbox}`}>
                                    <label className={`${css.marginChekbox} ${css.p_text}`}>
                                        <input type="checkbox" id="scales6" name="scales" className={css.chekbox} />
                                        Включать сводки новостей
                                    </label>
                                </div>
                                <div className={`${css.marginChekbox} ${css.whideCheckbox}`}>
                                    <label className={`${css.marginChekbox} ${css.p_text}`}>
                                        <input type="checkbox" id="scales7" name="scales" className={css.chekbox} />
                                        Главная роль в публикации
                                    </label>
                                </div>

                                <button className={css.buttonLogIn} style={{ marginTop: "80px" }} >Поиск</button>

                            </div>
                        </div>


                    </div>
                </section>



                <div className={css.rocketPic}></div>
            </div>



        </div >
    );
    function getHistogram(histogram: Histograms) {
        try {
            const options = {
                // Будем использовать метод POST
                method: 'POST',
                contentType: 'application/json',
                headers: {
                    'Authorization': "Bearer " + redux.token
                },
                // Добавим тело запроса
                body: JSON.stringify({
                    intervalType: histogram.intervalType,
                    histogramTypes: histogram.histogramTypes,
                    issueDateInterval: histogram.issueDateInterval,
                    searchContext: histogram.searchContext,
                    similarMode: histogram.similarMode,
                    limit: histogram.limit,
                    sortType: histogram.sortType,
                    sortDirectionType: histogram.sortDirectionType,
                    attributeFilters: histogram.attributeFilters

                })

            }
            // Делаем запрос за данными
            fetch(HOST + '/objectsearch/histograms', options)
                .then(response => {
                    if (!response.ok) {
                        //  setError( response.json.)
                        // response.json()
                        throw new Error('Error occurred!')

                    }
                    return response.json()
                })
                .then(json => {
                    var a2: string = json.accessToken;
                    console.log("Token--", a2)


                }

                ).catch((err) => {
                    //   setError(false)

                    console.log(err, "error")
                })

        } catch {

            console.log("errrer")
        }
    }

}

export default Search;
