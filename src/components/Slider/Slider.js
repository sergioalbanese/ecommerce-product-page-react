import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Thumbs } from 'swiper'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';



function Slider(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    const slides = props.images.map((slide) => {
        return (
            <SwiperSlide key={slide.id}>               
                <img className={'slide__img'} src={slide.image} />                
            </SwiperSlide>
        );
    }); 
    const thumbs = props.images.map((thumb) => {
        return (
            <SwiperSlide key={thumb.id}>
                <img className={'thumb__img'} src={thumb.thumb} />                
            </SwiperSlide>
        );
    }); 

    return (
        <div className={'slider__wrapper'}>            
            <Swiper
                modules={[Navigation, Thumbs]}
                spaceBetween={50}
                slidesPerView={1}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}  
                thumbs={{ swiper: thumbsSwiper }}                      
            >
                {slides}  
                <div className={'slider__nav slider__nav--prev'}ref={navigationPrevRef}>
                    <img className={'slider__nav__icon'} src={'/assets/images/icon-previous.svg'} />
                </div>
                <div className={'slider__nav slider__nav--next'}ref={navigationNextRef}>
                    <img className={'slider__nav__icon'} src={'/assets/images/icon-next.svg'} />
                </div>
            </Swiper>
            <div className={'slider__thumb-wrapper'}>
                <Swiper
                    modules={[Thumbs]}
                    slidesPerView={4}
                    spaceBetween={20}
                    watchSlidesProgress
                    onSwiper={setThumbsSwiper}            
                    >
                        {thumbs}
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;