// import React, { useState } from "react";
// import { createContext } from "react";
import Child from "./Child";
//  export const GlobalInfo = createContext()

//  function App(){
//      let [color, setcolor]=useState("red")
//      let  getday=(item)=>
//         console.log(item)

    
//     return(
        
//         <GlobalInfo.Provider value={{appcolor:color,setappcolor:setcolor,getday:getday}}>
//          <h1>i m app .jsx</h1>
//         <Child />

//         </GlobalInfo.Provider>
        
//     )
// }
// export default App
// export {GlobalInfo}//default k alawa sab curly braces me
import React from 'react'
import { createContext } from 'react'
import { useState } from "react";
export const GlobalInfo=createContext()
export default function App() {
    const[color,setcolor]=useState("red")
    const[t ,sett]=useState(false)

    let getday=(d)=>{
        console.log(d)
        sett(true)
      
    }
    function Jsx(){
  return <h1>i m jsx</h1>
    }
  return (
   
       <GlobalInfo.Provider value={{color:color,setcolor:setcolor, getday:getday}}>
        <Child/>
        {
            t?<Jsx/>:""
        }
       </GlobalInfo.Provider>

  )
}
