import React, { useState } from "react";
const Todo = () => {
  let [name, setname] = useState([]);
  let [val, setval] = useState("");
  if(name){
  console.log("name true")}
  function addbuddy() {
    // setname((prevvalue)=>[...prevvalue,val])//prevvalue k andar name ka data aajayega
   if(val){
      setname([...name, val]);
      setval("");
  }}
  function removebuddy(ind) {
    let newarr = name.filter((elm, index) => {
      return index !== ind;
    });
    setname(newarr);
  }
  return (
    <>
      <h1>hi i m todolist</h1>
      <input
        type="text"
        placeholder="name of Buddy"
        value={val}
        onChange={(e) => setval(e.target.value)}
      />
      <br /> <br />
      <button onClick={addbuddy}>add buddy</button>

      <ol>
      {name&&
    
      name.map((elm, indx) => {
        return (
          <li key={indx} onDoubleClick={()=>removebuddy(indx)} >
            {elm}
          </li>
       
        );
      })
      }
      </ol>
    </>
  );
};
export default Todo;