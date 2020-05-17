import React, { Component } from 'react';
import '../styles/sliderItem.scss';
import Day from './Day';
import Hour from './Hour';
import Forecast from './Forecast';
import Temperature from './Temperature';
import Rainfall from './Rainfall';
import WindsDirection from './WindsDirection';
import WindSpeed from './WindSpeed';
import Pressure from './Pressure';

class SliderItem extends Component {
    render() {
        const { id, day, hour, forecast, temperature, rainfall, windsDirection, windSpeed, pressure } = this.props;
        return (
            <div className="sliderItem">
                <Day id={id} day={day} />
                <Hour id={id} hour={hour} />
                <Forecast id={id} forecast={forecast} />
                <Temperature id={id} temperature={temperature} />
                <Rainfall id={id} rainfall={rainfall} />
                <WindsDirection id={id} windsDirection={windsDirection} />
                <WindSpeed id={id} windSpeed={windSpeed} />
                <Pressure id={id} pressure={pressure} />
            </div>
        );
    }
}

export default SliderItem;