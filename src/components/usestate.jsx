import React,{useState} from "react";

function Runusestate() {
    const[count,changeCount]= useState(0);

   function addCount(){
    changeCount(count=>count+1);
    changeCount(count=>count+1);
   }
   function subCount(){
    changeCount(count-1);
   }
    return (
        <>
        <h1>UseState</h1>
            <button onClick={addCount}>+</button>
            <span><h3>{count}</h3></span>
            <button onClick={subCount}>-</button>
        </>
    )

}

export default Runusestate