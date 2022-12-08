import React, { useState } from "react";
const App = () => {
  let [name, setname] = useState([]);
  let [val, setval] = useState("");
  function addbuddy() {

    setname((prevvalue)=>[...prevvalue,val])
    //line 9 and 10 are equivalent to line 7
    // let prevvalue = [...name]; //
    // setname([...prevvalue, val]);
    
    //in classcomponent
    // this.setState((prevstate)=>({count:prevstate.count+1}))
    
  
    setval("");
  }
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
      {name.map((elm, indx) => {
        return (
          <p key={indx} onClick={() => removebuddy(indx)}>
            {elm}
          </p>
        );
      })}
    </>
  );
};
export default App;
