import React, { useEffect, useRef, useState } from "react";

function RunUseRef() {
    const[text, changetext]= useState("");
    const [rendercount,setrendercount]= useState(0);
    const myref = useRef(0); 

    useEffect(() => {
        setrendercount(rendercount => rendercount+1)


    }, [text]);

    return (
        <>

            <form>
                <input type="text" value={text} onChange={e=>{changetext(e.target.value)}}/>
            </form>

            <p><b>My text reads: </b> {text}</p>
            <p>The puppose is to persist between states and not to cause an infinite loop.</p>
            <p>You renderd me: <b>{ rendercount }</b> Times</p>

        </>
    );

}

export default RunUseRef