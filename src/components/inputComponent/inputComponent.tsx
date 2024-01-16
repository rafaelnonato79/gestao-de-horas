import React from 'react';
import PropTypes from 'prop-types';
import './inputComponent.css';

interface InputComponentProps {
    Label: string;
    Name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    type: string;
}

const ImputComponent: React.FC<InputComponentProps> = ({ Label, Name, onChange, value, type}) => {
    return (
        <div className={Name}>
            <label className={Name}>{Label}</label>
            <input
                className={Name} 
                type={type}
                onChange={onChange}
                value={value}  
                />
        </div>
    );
};

ImputComponent.propTypes = {
    Label: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default ImputComponent;
