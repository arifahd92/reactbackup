import React, { useState } from "react"
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate(null);
  const [val, setval] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });
  function handleFormSubmit(e) {
    e.preventDefault();
    let psd = document.getElementById("psd").value;
    if (psd.length < 8) {
      swal({
        icon: "error",
        title: "Oops...",
        text: 'password length should not be less than 8',
      });
      return;
    } else {
      for (var i = 0; i < psd.length; i++) {
        var ch = psd.charAt(i);
        if (!isNaN(ch * 1)) {
          var number = 1;
          console.log("no.found");
        } else if (
          ch === ch.toUpperCase() &&
          ch !== "@" &&
          ch !== "/" &&
          ch !== "!" &&
          ch !== "$" &&
          ch !== "#" &&
          ch !== "%" &&
          ch !== "*"
        ) {
          var uppercase = 1;
          // console.log("upper case found");
        } else if (
          ch === ch.toLowerCase() &&
          ch !== "@" &&
          ch !== "/" &&
          ch !== "!" &&
          ch !== "$" &&
          ch !== "#" &&
          ch !== "%" &&
          ch !== "*"
        ) {
          var lowercase = 1;
          // console.log("lower case found");
        } else {
          var spl = 1;
          // console.log("spl case found");
        }
      }
    }
    if (spl && lowercase && uppercase && number) {
      localStorage.setItem(`Arif${val.email}`, JSON.stringify(val));
      navigate("/login");
    } else {
      swal(
     "The password must contain an uppercase a lowercase a spacial charactor and a number"
      );
    }
  }
 function handleClick() {
    navigate("/login");
  }
return (
    <>
      <div>
        <form onSubmit={handleFormSubmit}>
            <h3>Register</h3>
            <br/>
            <label>Name</label><span>*</span>
            <br />
            <input
              type="text"
              required
              placeholder="Enter Full Name"
              value={val.name}
              onChange={(event) => setval({ ...val, name: event.target.value })}
            />
            <br />
            <label>Email</label><span>*</span>
            <br />
            <input
              type="email"
              required
              placeholder="Enter email"
              value={val.email}
              onChange={(event) =>
                setval({ ...val, email: event.target.value })
              }
            />
            <br />
            <label>Password</label> <span>*</span>
            <br />
            <input
              type="password"
              required
              id="psd"
              placeholder="Enter password"
              onChange={(event) =>
                setval({ ...val, password: event.target.value })
              }
            />
            <br />
            <label>Phone No.</label>
            <br />
            <input
              type="Phone"
              placeholder="Enter contact no"
              onChange={(event) =>
                setval({ ...val, phone: event.target.value })
              }
            />

            <button type="submit">Register</button>
            <p>
              Already registered ?
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={handleClick}
              >
                login
              </span>
            </p>
          </form>
        
      </div>
    </>
  );
}
export default Registration;