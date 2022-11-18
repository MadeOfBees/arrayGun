import React, { useState } from 'react';
import './style.css';


const Input = (props) => {
    const [input, setinput] = useState('');
    const handleInputChange = (e) => {
        const { target } = e;
        setinput(target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(input);
    };

    return (
        <form onSubmit={handleFormSubmit}>
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