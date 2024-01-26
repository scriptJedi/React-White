import React from 'react';
import PropTypes from 'prop-types';
import "../assets/Styles/ScrollDown.css";

const ScrollDown = ({label, fontSize, height, width, fontWeight, color}) => {
    const svgStyles = {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: '1.5',
        height: height || '100%',
        width: width || '100%',
    };

    const pathStyles = {
        fill: 'none',
        stroke: '#fff',
        strokeWidth: '20px',
    };

    const textStyle = {
        fontSize: fontSize || '16px',
        fontWeight: fontWeight || 'normal',
        color: color || '#fff',
    };

    return (
        <div className="scrollDown">
            <svg width="40px" height="100%" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink" style={svgStyles}>
                <path id="wheel" d="M123.359,79.775l0,72.843" style={pathStyles}/>
                <path
                    id="mouse"
                    d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                    style={pathStyles}
                />
            </svg>
            <p style={textStyle}>{label || 'Scroll down'}</p>
        </div>
    );
};

ScrollDown.propTypes = {
    label: PropTypes.string,
    fontSize: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    fontWeight: PropTypes.string,
    color: PropTypes.string,
};

export default ScrollDown;
