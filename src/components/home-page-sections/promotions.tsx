import {Carousel, CarouselControl, CarouselIndicators, CarouselItem} from "reactstrap";
import {useState} from "react";
import Promotion from "@/components/home-page-sections/promotion";

const items = [
    {
        src: 'https://i.imgur.com/JZMrT60.jpg',
        altText: 'Slide 1',
    },
    {
        src: 'https://i.imgur.com/a7IpYWs.jpg',
        altText: 'Slide 2',
    },
    {
        src: 'https://i.imgur.com/B9CR8QD.jpg',
        altText: 'Slide 3',
    },
    {
        src: 'https://i.imgur.com/peMU2s8.jpg',
        altText: 'Slide 4',
    }
];

const Promotions = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const itemLength = items.length - 1

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                key={item.src}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
                <Promotion src={item.src} alt={item.altText} key={item.src}/>
            </CarouselItem>
        );
    });

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    return (
        <section id={`promotions`} className={`promotions-section`}>
            <div className={`container`}>
                <div className={`row justify-content-center`}>
                    <div className={`col-xl-7 col-lg-9`}>
                        <Carousel ride={`carousel`} previous={previous} next={next} activeIndex={activeIndex}>
                            <CarouselIndicators items={items}
                                                activeIndex={activeIndex}
                                                onClickHandler={goToIndex} />
                            {slides}
                            <CarouselControl directionText="Prev" direction="prev" onClickHandler={previous} />
                            <CarouselControl directionText="Next" direction="next" onClickHandler={next} />
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Promotions