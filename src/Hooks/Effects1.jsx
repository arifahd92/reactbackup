import React, { useEffect, useState } from "react";
const Effects1 = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    // use effect ek fxn jiska argument fxn useEffect fxn will be called on onloading of page
    console.log("he i called automaticly no of count k barabar");
    if (count >= 1) {
      document.title = `chats (${count})`; //page ka name change karne k liye
    } else {
      document.title = `chats`;
    }
  }, [count]); //jab ja count change hoga useEffect ka call hoga 
  // console.log("i m outside i will get printed first");
  useEffect(() => {
    console.log("i m fine"); //sirf refresh hone par
  }, []);
  // console.log("i m outside i will get printed first");
  return (
    <>
      <h1 style={{ color: "green" }}> i m effects 1</h1>
      <h1>{count}</h1>
      <button onClick={() => setcount(count + 1)}> click</button>
    </>
  );
};
export default Effects1;
