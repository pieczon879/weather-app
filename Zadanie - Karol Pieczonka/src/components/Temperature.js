import React from 'react';
import '../styles/sliderItem.scss'
import point from '../images/temperature_point_icon.jpg';


const Temperature = (props) => {
    const tempValue = props.temperature;
    const scaleTemp = tempValue => {
        return tempValue + 35; //0*C na poziome 35% zeby pomiescic napis
    }
    const scaleTextInfo = tempValue => {
        return tempValue + 35 + 12; // napis o 12% wyzej od point
    }

    const idPoint = `temperaturePoint${props.id}`;
    return (

        <div className="sliderItem__element sliderItem__element--temperature" >
            <div className="sliderItem__temperaturePointWrap">
                <h5 style={{ bottom: `${scaleTextInfo(tempValue)}%` }} className="sliderItem__temperatureText">
                    {tempValue}&deg;
                </h5>
                <div id={idPoint} style={{ bottom: `${scaleTemp(tempValue)}%` }} className="sliderItem__temperaturePoint" >

                </div>
            </div>

        </div>
    );
}

export default Temperature;