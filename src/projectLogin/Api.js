import React, { useEffect, useState } from "react";
// import Detail from "./Detail"
const Api = () => {
  let[t,sett]=useState(true)
 let [user, setuser] = useState([]);
  let time = new Date().getTime().toString;
  console.log(time);
  function getuser() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setuser(data));
  }

  useEffect(() => {
    getuser();
  }, []); //for safeside dependency bhi use kar liya
  // agar baad me kabhi on click kahi pe add kiya to kaam aayega
  let showDetail = (id) => {
    let filtered = user.filter((e, indx) => {
     sett(false)
     
      return id === indx;
     
    });
    setuser(filtered);  
};
function detail(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => setuser(data));
  sett(true)
}
  return (
    < div style={{background:"black",height:"100vh"}}>
    {t? <h2  style={{color:"red"}}>Click on name to see details:</h2>:""}
    {t? <h3 style={{color:"yellow"}}>User Lists:</h3>:""}
      {user.map((e,indx) => {
        return (
          <>
        { t?(<ul  onClick={()=>showDetail(indx)}><li key={indx} style={{cursor:"pointer",color:"white"}}>
        {e.name}</li></ul>):
        ( <><h3 style={{color:"yellow"}}>Details </h3><ul style={{color:"white"}}>
          <li>name: {e.name}</li> <li>username: {e.username}</li><li>id: {e.id}</li>
          <li>email: {e.email}</li><li>street: {e.address.street}</li>
          <li>city: {e.address.city}</li><li>zipcode: {e.address.zipcode}</li></ul></>)}
          
          </>
        );
      })}
      {t?"":<button id = "apibtn" onClick={detail}><div>back to user lists</div></button>}     

    </div>
  );
};
export default Api;