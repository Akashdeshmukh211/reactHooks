'use client'
import React, { useState } from 'react';

const useStatHook = () => {
    let [count, setCount] = useState(0)
    
    const incrementCount = ()=>{
        setCount(count + 1)
    }
    return (
        <div >
            <h1>About UesState Hook</h1>
            <div>
                <p>Count Value - {count}</p>
                <br />
                <button className='btn-primary padding-10' onClick={incrementCount} >Click Me to IncresCount</button>
            </div>
        </div>
    );
};

export default useStatHook;