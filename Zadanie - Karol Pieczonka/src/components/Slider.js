import React from 'react';
import Swiper from 'react-id-swiper';
import SliderItem from './SliderItem';
import 'swiper/swiper.scss'
import '../styles/slider.scss';
import apiWeather from '../api/apiWeather';

const Slider = () => {

    const params = {
        slidesPerView: 2,
        speed: 700,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
            draggable: true,
            dragSize: '200px',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            530: {
                slidesPerView: 3,

            },
            650: {
                slidesPerView: 4,

            },
            768: {
                slidesPerView: 5,

            },
            900: {
                slidesPerView: 7,
            },
            1000: {
                slidesPerView: 8,
            },
            1150: {
                slidesPerView: 9,
            },
            1250: {
                slidesPerView: 10,
            },
            1400: {
                slidesPerView: 11,
            },
            1500: {
                slidesPerView: 12,
            },
        }
    }

    const SliderItems = apiWeather.map(item => {
        return (
            <div>
                <SliderItem
                    key={item.id}
                    id={item.id}
                    day={item.day}
                    hour={item.hour}
                    forecast={item.forecast}
                    temperature={item.temperature}
                    rainfall={item.rainfall}
                    windsDirection={item.windsDirection}
                    windSpeed={item.windSpeed}
                    pressure={item.pressure}
                />
            </div>
        )
    })

    return (
        <div className="slider">
            <Swiper {...params}>

                {SliderItems}

                {/* <div>
                        <SliderItem
                            id="13"
                            day="Jutro"
                            hour="11:00"
                            forecast="rain_icon.jpg"
                            temperature={10}
                            rainfall={0.2}
                            windsDirection="E"
                            windSpeed={{ title: "Słaby", speed: 4 }}
                            pressure={1012}
                        />
                    </div> */}

            </Swiper>
        </div>
    )
}

export default Slider;
