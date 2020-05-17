import React from 'react';
import '../styles/sidebar.scss'

const Sidebar = () => {
    return (
        <sidebar className="sidebar">
            <div className="sidebar__item sidebar__item--day">
                <h5 className="sidebar__title">
                    Dzień
                </h5>
            </div>
            <div className="sidebar__item sidebar__item--hour">
                <h5 className="sidebar__title">
                    Godzina
                </h5>
            </div>
            <div className="sidebar__item sidebar__item--forecast">
                <h5 className="sidebar__title">
                    Prognoza
                </h5>
            </div>
            <div className="sidebar__item sidebar__item--temperature">
                <h5 className="sidebar__title">
                    Temperatura
                </h5>
            </div>
            <div className="sidebar__item sidebar__item--rainfall">
                <h5 className="sidebar__title">
                    Opady
                </h5>
            </div>
            <div className="sidebar__item sidebar__item--windsDirection">
                <h5 className="sidebar__title">
                    Kierunek <br /> wiatru
                </h5>
            </div>
            <div className="sidebar__item sidebar__item--windSpeed">
                <h5 className="sidebar__title">
                    Prędkość <br /> wiatru
                </h5>
            </div>
            <div className="sidebar__item sidebar__item--pressure">
                <h5 className="sidebar__title">
                    Ciśnienie
                </h5>
            </div>
        </sidebar>
    );
}

export default Sidebar;