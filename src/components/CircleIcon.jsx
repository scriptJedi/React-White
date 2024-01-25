// CircleIcon.js
import React from 'react';
import '../assets/CircleIcon.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
    faBullseye,
    faRocket,
    faLaptop,
    faQuestion,
    faBriefcase,
    faGlobe,
    faMobileScreen,
    faLightbulb,
    faGear,
    faSliders,
    faChartPie, faCloud, faThumbsUp, faMugHot
} from '@fortawesome/free-solid-svg-icons';

library.add(faBullseye, faRocket, faLaptop, faQuestion, faBriefcase, faGlobe, faMobileScreen, faLightbulb, faGear, faSliders, faChartPie, faCloud, faThumbsUp, faMugHot);

const CircleIcon = ({size = 'standard', iconName}) => {
    const getSizeClassName = () => {
        switch (size) {
            case 'big':
                return 'CircleIcon--big';
            case 'small':
                return 'CircleIcon--small';
            default:
                return '';
        }
    };

    return (
        <div className={`CircleIcon ${getSizeClassName()}`}>
            <FontAwesomeIcon icon={iconName}/>
        </div>
    );
};

export default CircleIcon;
