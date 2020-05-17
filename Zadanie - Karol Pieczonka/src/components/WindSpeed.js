import React from 'react';
import '../styles/sliderItem.scss'

const WindSpeed = (props) => {
    const { title, speed } = props.windSpeed;
    return (
        <div className="sliderItem__element sliderItem__element--windSpeed" >
            <h4 className="sliderItem__WindSpeedTitle">
                {title}
            </h4>
            <h5 className="sliderItem__WindSpeedNumber">
                {speed} km/h
            </h5>
        </div>
    );
}

export default WindSpeed;