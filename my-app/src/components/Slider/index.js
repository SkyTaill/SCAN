import React from 'react';
import Carousel from "react-elastic-carousel";
import css from "./index.module.css"
import Item from "./item";





function Slider() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
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
            carouselRef.current.goTo(5);
        }
    };

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
            <div >
                <Carousel breakPoints={breakPoints}
                    //  enableAutoPlay
                    ref={carouselRef}
                    onPrevStart={onPrevStart}
                    onNextStart={onNextStart}
                    disableArrowsOnEnd={false}
                >
                    <div>fsdsfgg</div>
                    <Item>Two</Item>
                    <Item>Three</Item>
                    <Item>Four</Item>
                    <Item>Five</Item>
                    <Item>Six</Item>
                    <Item>Seven</Item>
                    <Item>Eight</Item>
                </Carousel>
            </div>
        </>
    );
}

export default Slider;
