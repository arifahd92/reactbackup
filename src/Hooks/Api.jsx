import React, { useEffect, useState } from "react";
const Api = () => {
  let [user, setuser] = useState([]);
  let time = new Date().getTime().toString;
  console.log(time);
  // function getuser() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setuser(data));
  // }
  // useEffect(() => {
  //   getuser();
  // }, []); //for safeside dependency bhi use kar liya
  // agar baad me kabhi on click kahi pe add kiya to kaam aayega
  return (
    <>
      <h1>api</h1>
      {user.map((e) => {
        return <h1 key={time}>{e.name}</h1>;
      })}
    </>
  );
};
export default Api;
