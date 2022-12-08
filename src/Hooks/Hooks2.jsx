import React, { useState } from "react";
function Hooks2() {
  const [name, setName] = useState("md");
  function printName() {
    name === "md" ? setName("arif") : setName("md");
  }
  return (
    <>
      <h1> i m hooks 2</h1>
      <h1>{name}</h1>
      <button onClick={printName}> click me </button>
    </>
  );
}
export default Hooks2;
