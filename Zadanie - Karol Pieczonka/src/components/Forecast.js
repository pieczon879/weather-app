import React from 'react';
import '../styles/sliderItem.scss'

const Forecast = (props) => {

    return (
        <div className="sliderItem__element sliderItem__element--forecast" >
            <img class="sliderItem__icon sliderItem__icon--forecast" src={process.env.PUBLIC_URL + "/images/" + props.forecast} alt="Forecast Icon" />
        </div >
    );
}

export default Forecast;