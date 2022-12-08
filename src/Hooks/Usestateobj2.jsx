import React, { useState } from "react";
function UseStateArray() {
  // UseStateArray ka usestate se koi lena dena nhi ye bas compnnt ka name hai
  // let [name, setName] = useState(biodata)
  let biodata = [
    { id: 0, name: "arif", age: 24 },
    { id: 1, name: "taslim", age: 26 },
    { id: 2, name: "shama", age: 27 },
    { id: 3, name: "seema", age: 22 }
  ];

  let [name, setName] = useState(biodata); //rerender iske declaratino k baad  se hoga

  //   { id: 0, name: "arif", age: 24 },
  //   { id: 1, name: "taslim", age: 26 }
  // ]);
  // let biodata = [
  //   { id: 0, name: "arif", age: 24 },
  //   { id: 1, name: "taslim", age: 26 }
  // ];
  // name = biodata;//jab clear fxn chalta tha to rerender me har baar assign ho ja raha tha
  function clear() {
    setName([]); //set name ki wajah se name ki value hua change rerenderd hua code
    console.log(name);
  }
  function show() {
    setName(biodata);
  }
  function remove(id) {
    // alert(id);
    const newarray = name.filter((curElm) => {
      return curElm.id !== id;
    });
    setName(newarray);
  }
  return (
    <>
      <h1> UseStateArray started</h1>
      {/* <h4>name:arif & age:26</h4>
      <h4>name:arif & age:26</h4>
      <h4>name:arif & age:26</h4> */}

      {
        // biodata.map(curElm=> <h1>{curElm.name}</h1>)
        name.map((curElm) => {
          return (
            <>
              <span>key={curElm.id}</span>
              <h1>
                name:{curElm.name} age:{curElm.age}{" "}
              </h1>
              <button onClick={() => remove(curElm.id)}>-</button>
            </>
          );
        })
      }
      <br />
      <br />
      <button onClick={clear}> hideAll</button>
      <br />
      <br />
      <button onClick={show}> showAll</button>
    </>
  );
}
export default UseStateArray;
