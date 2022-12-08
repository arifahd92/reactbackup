import React, { useEffect } from 'react'
import { useState } from 'react'

export default function App2() {
  let [no, setno]=useState(0)
  function handlechange(e){
setno(e.target.value)
hrint()

  }
  useEffect(()=>{
    hrint()
  })
function hrint(){


  while(no>=0){
  function Print(){
    setno(no-1)
     return(
      <>
      <h1>hello world</h1>
      </>
     ) 
    }
    setno(no-1)
  }}
  return (
    <div>
<input type="number" value={no} onChange={(e)=>handlechange(e)} />
{
 no? <Print/>:""
}
    </div>
  )
}
