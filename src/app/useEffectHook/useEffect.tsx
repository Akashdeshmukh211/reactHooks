'use client'

import { Rethink_Sans } from 'next/font/google';
import React, { useEffect, useState } from 'react';

const UseEffectComp = ()=>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async ()=>{
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
            const data = await response.json()
            setData(data);
            setLoading(false)
        }catch (error){
            console.error("Error fetchig data:", error)
            setLoading(false)
        }
            
        } 
        fetchData();
        return ()=>{
          console.log("component umounted. Cleaning up...")  
        };

    },[])
    
    return (<div>
        <h1>Use Of useEffect hook Component</h1>
        {loading ? (
            <p>Loading</p>
        ): (
            <div>
                <h3>
                    Fetched Date:
                </h3>
                <pre>
                    {JSON.stringify(data,null,2)}
                </pre>
            </div>
        )}
    </div>)
}


export default UseEffectComp;