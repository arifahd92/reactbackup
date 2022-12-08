import React, { useState } from "react";

function Inc() {
  let [value, setValue] = useState(0);
  let [input, setInput] = useState(""); //onchange k liye
  let [ninput, setnInput] = useState("");
  function incclk() {
    setValue(() => {
      return (setValue = value++);
    });
    setValue(value + 1);
  }

  function dcclk() {
    if (value > 0) setValue(value - 1);
  }
  function reset() {
    setValue(0);
  }

  function abcd(e) {
    setInput(e.target.value);
  }
  function inpt() {
    setnInput(input);
    setInput(e.target.value);
  }

  return (
    <>
      <h1>{value}</h1>
      <input type="text" onChange={abcd} />
      <button onClick={incclk}>icrement</button>
      <button onClick={dcclk}>decrement</button>
      <button onClick={reset}>reset</button>
      <br /> <br />
      <button onClick={inpt}>inptbtn</button>
      <h1>{ninput}</h1>
    </>
  );
}
export default Inc;
