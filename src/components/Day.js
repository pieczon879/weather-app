import React from 'react';
import '../styles/sliderItem.scss'

const Day = (props) => {
    return (
        <div className="sliderItem__element sliderItem__element--day">
            <h5 class="sliderItem__title sliderItem__title--day">{props.day ? props.day : null}</h5>
        </div>
    );
}

export default Day;