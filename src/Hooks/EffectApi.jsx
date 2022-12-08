import React, { useEffect, useState } from "react";
const EffectApi = () => {
  let [userr, setuser] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => setuser(data)
     
    );

  //   let [user, setuser] = useState([]);
  //   let getuser = async () => {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = response.json();
  //     setuser(data)
  //     console.log(data);
  //   };
  //   useEffect (()=>{//jab bhi kisi fxn ko call karna pad raha iska sahara le rahe
  //     getuser()
  //   },[])
  //   return (
  //     <>
  //       <h1>i m effectApi t7</h1>
  //       {
  //  user.map((elm)=>{
  //    return <h3>elm.name</h3>
  //  })
  //       }
  //     </>
  //   );
  return (
   
    <>
    {
      userr.map((e)=><h1>{e}</h1>)
    }
    </>
  )
};
export default EffectApi;
