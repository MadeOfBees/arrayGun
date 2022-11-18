import React, { useState } from 'react';
import './style.css';
import { arMaykr } from '../../utils/helpers';


function Input(props) {
    const [input, setinput] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputValue = target.value;
        setinput(inputValue);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        return arMaykr(input)
    };

    return (
        <form className="form">
            <input
                value={input}
                name="input"
                onChange={handleInputChange}
                type="text"
                placeholder="list goes here"
            />
            <button type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
    );
};


export default Input