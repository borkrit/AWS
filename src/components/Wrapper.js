'use client';

import {useState} from "react";

export default function Wrapper ({children}){
    const [count, setCount] = useState(0)
    return(
        <div>
            {count}
            <button onClick={()=>{setCount(prev=> prev+1)}} >+1</button>
            {children}
        </div>
    )
}