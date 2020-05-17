import React from 'react';
import '../styles/sliderItem.scss'
import point from '../images/temperature_point_icon.jpg';

const Rainfall = (props) => {
    const rainfallValue = props.rainfall;

    const scaleRainfall = rainfallValue => {
        return rainfallValue * 2; //0.1 mm -> 0.2rem border-bottom
    }

    const rainfallText = rainfallValue ? `${rainfallValue} mm` : null;

    return (

        <div style={{ borderBottomWidth: `${scaleRainfall(rainfallValue)}rem` }} className="sliderItem__element sliderItem__element--rainfall" >
            <h5 className="sliderItem__rainfallValue">
                {rainfallValue ? rainfallText : null}
            </h5>
        </div>
    );
}

export default Rainfall;