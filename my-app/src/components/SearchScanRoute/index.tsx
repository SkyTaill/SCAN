import Page404 from "../Page404";
import css from "./index.module.css"
import histogramDateInput from "../../mock/HistogramData.json"
import { Analytics, data } from "../../DTO/histogramDate"
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


export default SearchScanRoute;