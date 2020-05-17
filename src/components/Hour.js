import React from 'react';
import '../styles/sliderItem.scss'

const Hour = (props) => {
    return (

        <div className="sliderItem__element sliderItem__element--hour" >
            <h5 className="sliderItem__title sliderItem__title--hour"> {props.hour ? props.hour : null} </h5>
        </div >
    );
}

export default Hour;