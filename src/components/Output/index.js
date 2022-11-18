import React, { useState } from 'react';
import './style.css';

function Output(props) {
    return (
        <div>
            <p>
                {props.io}
            </p>
        </div>
    );
};

export default Output;