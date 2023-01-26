import React from 'react';
import Carousel from "react-elastic-carousel";
import css from "./index.module.css"






const Slider = props => {
    const { sliderDate } = props
    //переписать как пропс который передаем
    //var sliderDate = sliderDate1;

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 3 },
    ];
    const carouselRef = React.useRef(null);
    const onNextStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            // we hit the last item, go to first item
            carouselRef.current.goTo(0);
        }
    };

    const onPrevStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            carouselRef.current.goTo(sliderDate.length);
        }
    };

    console.log(sliderDate)

    //в слайдере реализована система зацикливания 
    return (
        <div  >

            <Carousel breakPoints={breakPoints}
                //  enableAutoPlay
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}
            >
                {sliderDate.map(elem => {
                    return (
                        <div key={elem.id} className={css.slider_item}>

                            <div style={{
                                width: "65px",
                                height: "79px",
                                // backgroundColor: "yellow",
                                //   backgroundImage: `url(${elem.svg})`,
                                backgroundImage: `url("../../svg/skan-head.svg")`

                            }}></div>

                            <p className={css.box_text}>{elem.date}</p>
                        </div>
                    )
                })}
            </Carousel>
        </div>

    );
}

export default Slider;
