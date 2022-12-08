import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Home from "./Home";

function Login() {
  const [val, setval] = useState({
    emaillog: "",
    passwordlog: ""
  });

  const navigate = useNavigate(null);
  const [home, sethome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let saved = JSON.parse(localStorage.getItem(`Arif${val.emaillog}`));
   if(saved){
     if (saved.email === val.emaillog && saved.password === val.passwordlog) {
      sethome(false);
    }
     else if ( saved.email !== val.emaillog) {
        swal( " email did not match !")
    } else {
      swal(" password did not match !")
      }
 }
else {
    swal( "You are not a registerd user!")
   }
}
  function knowPassword() {
    let saved = JSON.parse(localStorage.getItem(`Arif${val.emaillog}`));
      if (saved && (saved.email === val.emaillog)) {
       
        swal(`your password is ${saved.password}`)
       
      } else {
       
          swal(" Enter Registered Email !")
       }
    }
  return (
    <div>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>LogIn</h3>
          <br />
          <label>Email</label><span>*</span>
          <br />
          <input
            type="email"
            required
            placeholder="Enter Email"
            onChange={(event) =>
              setval({ ...val, emaillog: event.target.value })
            }
          />
          <br />
          <label>Password</label><span>*</span>
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            required
            value={val.passwordlog}
            onChange={(event) =>
              setval({ ...val, passwordlog: event.target.value })
            }
          />
          <div
            style={{ color: "blue", marginLeft: "50vw", cursor: "pointer" }}
            onClick={knowPassword}
          >
            forgot password
          </div>
          <button type="submit">Login</button>{" "}
          <span>did not register? {""} </span>
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            register
          </span>
        </form>
      ) : (
        <Home name={val.emaillog} />
      )}
    </div>
  );
}
export default Login;