'use client'

import React, { useRef, useState } from "react";



const UesRef = ()=>{
    const inputRef = useRef(null)

    const [inputValue, setInputValue] = useState('')

    const focusInput = ()=>{
        inputRef.current.focus();
    }
    return( <div>
    <input 
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)}
        placeholder="Type someThing"
    />
    <button onClick={focusInput} >Focus Input</button>
    </div> )
}

export default UesRef;