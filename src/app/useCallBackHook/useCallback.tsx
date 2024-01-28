'use client'
import React,{useState,useCallback} from "react";

const CounterButton = ({onClick})=>{
    console.log('CounterButton rendered')
    return <button onClick={onClick} >Click me</button>
};

const ParentComponent = () =>{
    const [count, setCount] = useState(0)

   const incrementCount = useCallback(()=>{
    setCount(prevCount => prevCount + 1);
   }) 
   return (
    <div>
        <h2>Parent Component</h2>
        <p>Count: {count}</p>
        <CounterButton onClick={incrementCount}/>
    </div>
   )
}

export default ParentComponent;