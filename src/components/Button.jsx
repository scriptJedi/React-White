import PropTypes from 'prop-types';
import '../assets/styles/Button.css';
import {useMediaQuery} from '@react-hook/media-query';


export const Button = ({backgroundColor, size, label, mode, isLink, to, onClick, ...props}) => {
    const isSmallScreen = useMediaQuery('(max-width: 767px)');
    const calculateSize = isSmallScreen ? 'small' : size;
    const buttonMode = mode === 'primary' ? 'primary' : 'secondary';

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    if (isLink) {
        return (
            <a
                href={to}
                className={['button', `button--${buttonMode}`, `button--${buttonMode}--${calculateSize}`].join(' ')}
                style={backgroundColor && {backgroundColor}}
                onClick={handleClick}
                {...props}
            >
                {label}
            </a>
        );
    }

    return (
        <button
            type="submit"
            className={['button', `button--${buttonMode}`, `button--${buttonMode}--${calculateSize}`].join(' ')}
            style={backgroundColor && {backgroundColor}}
            {...props}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isLink: PropTypes.bool,
    to: PropTypes.string,
    mode: PropTypes.string,
};

Button.defaultProps = {
    backgroundColor: null,
    mode: 'primary',
    size: 'medium',
    isLink: true,
    onClick: undefined,
};
