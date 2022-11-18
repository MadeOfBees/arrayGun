import React, { useState } from 'react';
import Input from '../Input/index.js';
import Output from '../Output/index.js';
import './style.css';

const output = 12

function Display() {
    return (<main>
        <div className="container text-center">
            <div className="row">
                <div className="col-5 card">
                    <Input />
                </div>
                <div className="col card">
                    <h1>Arrow pointing right</h1>
                </div>
                <div className="col-5 card">
                    <Output io={output} />
                </div>
            </div>
        </div>
    </main>)
};

export default Display;