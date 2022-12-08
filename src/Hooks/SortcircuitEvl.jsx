import React, { useState } from "react";
export default function SortcircuitEvl() {
  //since we can not use if else inside return there is concept of sortcircuit inside return
  let [name, setname] = useState("k");
  return (
    <>
      <h1>i m sortcircuit</h1>
      <h2>{name || "arif"}</h2>//agar name k andar kuchh hai to use print kar do
      nhi to "arif ko print karo"
      <br />
      <h3>{name && "i m and"}</h3>// exactly opposite of or for check write//if name has truthy value then aage ka chalega
      anything inside usestate
    </>
  );
}
