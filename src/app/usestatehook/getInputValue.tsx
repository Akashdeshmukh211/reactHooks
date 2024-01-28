'use client'
import React, { useState } from 'react';

const GetInputValue = () => {
    let [inputValue, setinputValue] = useState("type...")

    const inputChange = (event:any)=>{
        const newValue = event.target.value;
        setinputValue(newValue)
    };
    return (
        <div >
            <input className='input' type="text" placeholder='enter something...' onChange={inputChange} />
            <br />
            {inputValue}
        </div>
    );
};

export default GetInputValue;