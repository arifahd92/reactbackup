// import React, { useRef } from "react";

import { useRef } from "react"

// function Ref() {
//   let inptref = useRef(null);
//   function hndleinpt() {
//     inptref.current.value = 100;
//     inptref.current.style.color = "red";
//     inptref.current.style.display = "none";
//   }
//   return (
//     <>
//       <h1>hey i m ref</h1>
//       <input type="text" ref={inptref} />
//       <button onClick={hndleinpt}>click me</button>
//     </>
//   );
// }
// export default Ref;
export default function Ref(){
  let inptref=useRef()
  function abcd(){
    inptref.current.value=100
    inptref.current.style.color="red"
  }

  return (
    <>
    <input type="text" value={0} ref={inptref} />
    <button onClick={abcd}>click</button>
    </>
  )
}
