import React, { useState, useMemo } from "react";
import { Button } from "@material-ui/core";
function useMemos() {
  const [counterone, setCounterone] = useState(0);
  const [countertwo, setCountertwo] = useState(0);

  const counterOneFun = () => {
    setCounterone(counterone + 1);
  };
  const counterTwoFun = () => {
    setCountertwo(countertwo + 1);
  };
  // this function run on every time rendering
  // const isEven = () => {
  //   console.log('is Even run.');
  //   return  counterone%2===0;
  // }

  // we can stop using useMemo to Stope this extra rendering
  const isEven = useMemo(() => {
    console.log("is Even run.");
    return counterone % 2 === 0;
  },[counterone]);

  return (
    <>
      <div>useMemo</div>
      <h2>{isEven ? "Even" : "Odd"}</h2>
      <Button  variant="contained" onClick={counterOneFun}>Button=One {counterone}</Button>
      <Button  variant="contained" onClick={counterTwoFun}>Button=Two {countertwo}</Button>
    </>
  );
}

export default useMemos;
