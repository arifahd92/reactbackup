import React, { useState } from "react";
function Usestateobj() {
  let [value, setvalue] = useState({ name: "arif", age: 24, deg: "b.tech" });

  function update() {
    //  setvalue({ name: "taslim", age: 24, deg: "b.tech" })
    setvalue(...value, (name: "taslim"));//name property will be overWritten
  }
  return (
    <>
      <h1>Usestateobj started</h1>
      <p>
        name:{value.name} , age:{value.age}, degree:{value.deg}{" "}
      </p>
      <button onClick={update}>update</button>
    </>
  );
}
export default Usestateobj;
