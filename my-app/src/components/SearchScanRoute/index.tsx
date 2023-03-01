import Page404 from "../Page404";
import css from "./index.module.css"
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
    return (
        <div className={css.flex}>


            <div className={css.elemetShortStaat}>
                <p className={css.p_elemetShortStaat}>
                    10.10.2010
                </p>
                <p className={css.p_elemetShortStaat}>
                    5
                </p>
                <p className={css.p_elemetShortStaat}>
                    2
                </p>
            </div>
            <div className={css.line}></div>


        </div>
    )
}

export default SearchScanRoute;