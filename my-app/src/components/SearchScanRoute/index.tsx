import Page404 from "../Page404";
import css from "./index.module.css"
import histogramDateInput from "../../mock/HistogramData.json"
import { data } from "../../DTO/HistogramDate"
interface SearchScanRouteProps {
    autorize: boolean
}
const SearchScanRoute: React.FC<SearchScanRouteProps> = ({ autorize }) => {
    console.log(autorize, "searchScan")
    var searchEl: number = 2203;
    if (autorize) {
        return (
            <section className={css.scan}>
                <div className={css.flex}>
                    <div>
                        <h1 className={css.capital_h1_text}>
                            Ищем. Скоро будут результаты
                        </h1>
                        <p className={css.p_text}>
                            Поиск может занять некоторое время, просим сохранять терпение.
                        </p>
                    </div>
                    <div className={css.scan_pic}>

                    </div>
                </div>
                <div>
                    <h1 className={css.capital_h1_text}>
                        Общая сводка
                    </h1>
                    <p className={css.text_search}>Найдено {searchEl} вариантов</p>
                    <div className={css.flex}>
                        <div className={css.leftArrow}></div>
                        <div className={css.elementBox}>
                            <div className={css.elementBoxLeftMenu}>
                                <h3 className={css.h3_menuText}>
                                    Период
                                </h3>
                                <h3 className={css.h3_menuText}>
                                    Всего
                                </h3>
                                <h3 className={css.h3_menuText}>
                                    Риски
                                </h3>
                            </div>
                            <ShortStatistic />
                        </div>
                        <div className={css.rightArrow}></div>
                    </div>
                </div>
                <div className={css.centr}>
                    <h1 className={css.capital_h1_text}>
                        Список документов
                    </h1>
                    <div className={`${css.documentMargin} ${css.centr}`}>
                        <GetListOfDockument
                            img={'https://storage.scan-interfax.ru/images/1%3A0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKn0KjQlsKu0K%2FSkdGXfOKAsF3QkjrRnCRmGCFFBybQoNGL0ZMhEFkC4oCYaNC9a9GO0KFYwqwOeNGO0JdUDGzihKJXTNC%2B0ZzRinE%3D'}
                            head={"Скиллфэктори - лучшая онлайн-школа для будущих айтишников"}
                            text={"Кто такой Data Scientist и чем он занимается? Data Scientist — это специалист, который работает с большими массивами данных, чтобы с их помощью решить задачи бизнеса. Простой пример использования больших данных и искусственного интеллекта — умные ленты в социальных сетях. На основе ваших просмотров и лайков алгоритм выдает рекомендации с контентом, который может быть вам интересен. Эту модель создал и обучил дата-сайентист, и скорее всего, не один.В небольших компаниях и стартапах дата-сайентист делает все: собирает и очищает данные, создает математическую модель для их анализа, тестирует ее и презентует готовое решение бизнесу"}
                            tag={"Технические новости"}
                            words={123}
                        />
                        <GetListOfDockument
                            img={'https://storage.scan-interfax.ru/images/1%3A0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKn0KjQlsKu0K%2FSkdGXfOKAsF3QkjrRnCRmGCFFBybQoNGL0ZMhEFkC4oCYaNC9a9GO0KFYwqwOeNGO0JdUDGzihKJXTNC%2B0ZzRinE%3D'}
                            head={"fdsaadasdasd"}
                            text={"Кто такой Data Scientist и чем он занимается? Data Scientist — это специалист, который работает с большими массивами данных, чтобы с их помощью решить задачи бизнеса. Простой пример использования больших данных и искусственного интеллекта — умные ленты в социальных сетях. На основе ваших просмотров и лайков алгоритм выдает рекомендации с контентом, который может быть вам интересен. Эту модель создал и обучил дата-сайентист, и скорее всего, не один.В небольших компаниях и стартапах дата-сайентист делает все: собирает и очищает данные, создает математическую модель для их анализа, тестирует ее и презентует готовое решение бизнесу"}
                            tag={"Технические новости"}
                            words={123}
                        />

                    </div>

                </div>
                <button className={css.section_button}>Показать больше</button>
            </section>
        )
    }
    return (
        <Page404 />
    )
};

const ShortStatistic = () => {
    var statistic: data[] = histogramDateInput.data

    return (
        <div className={css.flex}>
            {
                statistic.map((element, id) => {
                    console.log(element.data[0])
                    if (id < 7) {
                        return (
                            <ShortStatisticElement
                                dateStart={element.data[0].date}
                                all={element.data[0].value}
                                risk={element.data[1].value}
                            />
                        )
                    }

                })
            }
        </div>

    )
}

interface ShortStatisticElementProps {
    dateStart: string,
    all: number,
    risk: number
}
const ShortStatisticElement: React.FC<ShortStatisticElementProps> = ({ dateStart, all, risk }) => {
    return (
        <div>
            <div className={css.flex}>
                <div className={css.elemetShortStaat}>
                    <p className={css.p_elemetShortStaat}>
                        {dateStart.substr(0, 10)}
                    </p>
                    <p className={css.p_elemetShortStaat}>
                        {all}
                    </p>
                    <p className={css.p_elemetShortStaat}>
                        {risk}
                    </p>
                </div>
                <div className={css.line}></div>

            </div>

        </div>


    )
}

interface GetListOfDockumentProps {
    img: string,
    head: string,
    text: string,
    tag: string,
    words: number

}
const GetListOfDockument: React.FC<GetListOfDockumentProps> = ({ img, head, text, tag, words }) => {
    return (

        <div className={css.element}>
            <div className={css.element_box}>
                <h1 className={css.h1_element}>{head}</h1>
                <div className={css.element_yellowBlock}>
                    <p className={`${css.element_yellowBlock_p_text} `}>{tag}</p>
                </div>
                <img className={css.element_img} src={img} />

                <p className={css.element_p_boodytext}>{text}</p>

                <div className={css.flex}>
                    <button className={css.element_button}>Читать в источнике</button>
                    <h6 className={css.element_h6_text}>{words} слов</h6>
                </div>



            </div>



        </div>


    )
}


export default SearchScanRoute;