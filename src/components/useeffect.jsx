import React,{useState,useEffect} from "react"

function RunUseEffect(){
  

    const[postresource, setpostresource]=useState("posts");
    const[items, setItems] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${postresource}`)
        .then(responce=>responce.json())
        .then(json=>console.log(setItems(json)))

    },[postresource]);
   

    return(
        <>
      
        <h1>UseEffect</h1>
        <button onClick={()=>setpostresource("posts")}>post</button>
        <button onClick={()=>setpostresource("users")}>users</button>
        <button onClick={()=>setpostresource("comments")}>comments</button>

        <h3>{postresource}</h3>
        <p>{items.map(item=>{
            return <pre>{JSON.stringify(item)}</pre>
        })}</p>
        </>
    )
}

export default RunUseEffect