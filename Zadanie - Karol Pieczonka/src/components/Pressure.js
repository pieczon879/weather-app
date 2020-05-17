import React from 'react';
import '../styles/sliderItem.scss'
import point from '../images/temperature_point_icon.jpg';

const Pressure = (props) => {

    const pressureValue = props.pressure;
    const scalePressure = pressureValue => {
        return (pressureValue - 930) / 10
    }
    const scaleTextInfo = pressureValue => {
        return (pressureValue - 930) / 10 + 3
    }
    return (

        <div className="sliderItem__element sliderItem__element--pressure" >
            <div className="sliderItem__pressurePointWrap">
                <h5 style={{ bottom: `${scaleTextInfo(pressureValue)}rem` }} className="sliderItem__pressureText">
                    {pressureValue} hPa
                </h5>
                <div style={{ bottom: `${scalePressure(pressureValue)}rem` }} className="sliderItem__pressurePoint" >

                </div>
            </div>
        </div>
    );
}

export default Pressure;