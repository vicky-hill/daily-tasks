/* eslint-disable */
import React from 'react';

const Option = ({ type, checked, onClick}) => {
    return (
        <span onClick={onClick} className={`badge bg-${type} ${checked && 'checked'}`}>
            <i className={`fas fa-${type}`}></i>
        </span>
    )
}

export default Option;
