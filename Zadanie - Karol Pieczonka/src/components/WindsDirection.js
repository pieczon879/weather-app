import React, { Component } from 'react';
import '../styles/sliderItem.scss'
import windsRoseIcon from '../images/windrose_icon.jpg';

class WindsDirection extends Component {

    state = {
        classWindsRose: '',
        textWindsDirection: ''
    }

    windsRosePosition = windsDirection => {
        let classWindsRose = "sliderItem__windsRose";
        let textWindsDirection = ""

        switch (windsDirection) {
            case "N":
                classWindsRose += " sliderItem__windsRose--N";
                textWindsDirection = "Południowy"
                break;

            case "NE":
                classWindsRose += " sliderItem__windsRose--NE";
                textWindsDirection = "Pd.-Zach."
                break;

            case "E":
                classWindsRose += " sliderItem__windsRose--E";
                textWindsDirection = "Zachodni"
                break;

            case "SE":
                classWindsRose += " sliderItem__windsRose--SE";
                textWindsDirection = "Pn.-Zach."
                break;

            case "S":
                classWindsRose += " sliderItem__windsRose--S";
                textWindsDirection = "Północny"
                break;

            case "SW":
                classWindsRose += " sliderItem__windsRose--SW";
                textWindsDirection = "Pn-Wsch"
                break;

            case "NW":
                classWindsRose += " sliderItem__windsRose--NW";
                textWindsDirection = "Pd-Wsch"
                break;

            default:
            // code block
        }

        this.setState(() => ({
            classWindsRose,
            textWindsDirection
        }))
    }

    componentWillMount() {
        this.windsRosePosition(this.props.windsDirection)
    }

    // const rainfallText = rainfallValue ? `${rainfallValue} mm` : null;
    render() {
        const { classWindsRose, textWindsDirection } = this.state;
        return (
            <div className="sliderItem__element sliderItem__element--windsDirection">
                <img className={classWindsRose} src={windsRoseIcon} alt="Winds Rose Icon" />
                <h5 className="sliderItem__title sliderItem__title--windsDirection">
                    {textWindsDirection}
                </h5>
            </div>
        );
    }
}

export default WindsDirection;