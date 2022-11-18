import React, { useState } from 'react';
import Input from '../Input/index.js';
import Output from '../Output/index.js';
import { arMaykr } from '../../utils/helpers';
import './style.css';
var output

function Display() {
    const data = (data) => {
        output = arMaykr(data)
        console.log(output)
    }
    return (<main>
        <div className="container text-center">
            <div className="row">
                <div className="col-5 card">
                    <Input onSubmit={data}/>
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