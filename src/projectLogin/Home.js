import React, { useState } from "react";
import Api from "./Api";
import Login from "./Login";
function Home({ name }) {
  const [login, setLogin] = useState(false);
  let saved = JSON.parse(localStorage.getItem(`Arif${name}`));
  let [condition, setCondition] = useState(true);
  function setstate() {
    setCondition(false);
  }
  const handleLogout = () => {
   let cnf= window.confirm("are you sure?")
   if(cnf){
    setCondition(false);
    setLogin(true);
   }
      
    else {
      return
    }
    
  };
  return (
    <>
      {condition ? (
        <>
          <h1>
            welcome! <span style={{ color: "red" }}>{saved.name}</span>
          </h1>
          <h2>
            you loggedIn successfully, now you can access user lists and their
            details.
          </h2>
          <br />
          <button onClick={setstate}>access user lists</button>{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={handleLogout}
          >
            logout
          </span>
        </>
      ) : login ? (
        <Login />
      ) : (
        <Api />
      )}
    </>
  );
}

export default Home;