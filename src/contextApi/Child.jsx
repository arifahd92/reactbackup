import React, { useContext } from "react"
import {GlobalInfo} from "./App"// curly bracket me hona jarooruri
import Superchild from "./Superchild"
// braces me export to curly braces me import
export default function Child(){
    const {color,setcolor}=useContext(GlobalInfo)//object destructring samjho
    console.log(color)
    return (
        <>
        <h1 style={{color:color}}>i m child.jsx{" "}<button onClick={()=>setcolor("blue")}>change color</button></h1>
        <Superchild/>
        </>
    )
}