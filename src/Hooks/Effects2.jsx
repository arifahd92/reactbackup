import React, { useEffect, useState } from "react";
const Effects2 = () => {
  let [width, setwidth] = useState(window.screen.width);
  let actualwidth = () => {
    setwidth(window.innerWidth);
    console.log(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", actualwidth);
    return () => {
      console.log("remove event");
      window.removeEventListener("resize", actualwidth);
    };
  });
  return (
    <>
      <h1>hi im effects2</h1>
      <p>the actual size of screen is. {width}</p>
    </>
  );
};
export default Effects2;
