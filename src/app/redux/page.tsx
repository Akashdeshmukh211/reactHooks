'use client'
import { createStore } from 'redux';
import React from 'react';
const initialState = {
    count: 0
}

const counterReducer = (state:any = initialState, action:any)=>{
    switch (action.type){
        case "INCREMENT":
            return { ...state, count: state.count + 1};
        case "DECREMET":
            return { ...state, count: state.count - 1}
        default:
            return state
    }
}

const store = createStore(counterReducer);

import { useSelector , useDispatch } from 'react-redux';

function Couter(){
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const increment = () =>{
        dispatch({ type: "INCREMENT"});
    }
    const decrement = () =>{
        dispatch({ type: "DECREMENT"});
    }
    return (
        <div>
            <h1>Counter : {count}</h1>
            <button  onClick={increment}></button>
            <button  onClick={decrement}></button>
        </div>
    )

}

export default Couter;