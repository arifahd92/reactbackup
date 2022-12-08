import React, { useState } from "react";
function BasicForm() {
  let [email, setemail] = useState(""); //ye dono to on cnange me hi nikalliye
  let [pasword, setpasword] = useState("");
  let [allentry, setallentry] = useState([]);

  function submitform(e) {
    e.preventDefault();
    const newentry = [email, pasword];
    // const newentry = {email:email, pasword:pasword};
    setallentry([...allentry, newentry]);
    setpasword("");
    setemail("");
  }
  return (
    <>
      <h1>im basic form</h1>
      <form action="" onSubmit={submitform}>
        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          autoComplete="off"
          id="email"
          placeholder="enter your mail"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="pas">password</label>
        <input
          type="password"
          id="pas"
          placeholder="enter your pasword"
          value={pasword}
          onChange={(e) => setpasword(e.target.value)}
        />
        {/* <button type="submit" onClick={e=>e.preventDefault()}>login</button> */}
        <button type="submit">login</button>
      </form>
      {allentry.map((elm) => {
        return <h1>{elm}</h1>;
      })}
    </>
  );
}
export default BasicForm;
