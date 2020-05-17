import React, { Component } from 'react';
import Slider from './Slider';
import '../styles/main.scss';

class Main extends Component {
    render() {
        return (
            <main className="main">
                <Slider />
            </main>
        );
    }
}

export default Main;