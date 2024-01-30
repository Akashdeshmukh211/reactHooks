import React from "react";

function Greetig(props:any) {
    return <h1>Hello, {props.name}!</h1>
}

function App(){
    return(
        <div>
            <Greetig name="Akash"></Greetig>
            <Greetig name="Vishal"></Greetig>
            <Greetig name="Amit"></Greetig>
        </div>
    )
}

export default App;