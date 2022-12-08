import React, { useContext } from "react"
import {GlobalInfo} from "./App"//jaise export waise hi import yani curly 
// braces me export to curly braces me import
export default function Superchild(){
    const {appcolor,setappcolor,getday}=useContext(GlobalInfo)
    console.log(appcolor)
    let day="sunday"
    return (
        <>
        <h1 style={{color:appcolor}}>i m superchild.jsx{" "}<button onClick={()=>setappcolor("green")}>change color</button></h1>
        <button onClick={()=>getday(day)}>get day</button>
        </>
    )
}