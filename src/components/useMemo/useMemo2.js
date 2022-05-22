import React, { useState, useMemo } from "react";
import { Button,TextField } from "@material-ui/core";
// useMemo() is a built-in React hook that accepts 2 arguments — a function compute that computes a result and the depedencies array:
// During initial rendering, useMemo(compute, dependencies) invokes compute, memoizes the calculation result, and returns it to the component.

// If during next renderings the dependencies don't change, then useMemo() doesn't invoke compute but returns the memoized value.

// But if dependencies change during re-rendering, then useMemo() invokes compute, memoizes the new value, and returns it.
function useMemo2() { 
    // this function is re render on other button click 
//   const factorial = factorialOf(number);
//   to stop this we use useMemo
const [number, setNumber] = useState('');
const [inc, setInc] = useState(0);
const factorial = useMemo(() => factorialOf(number), [number]);
const onChange = event => {
  setNumber(Number(event.target.value));
};
const onClick = () => {
    console.log('render clicked');
    setInc(inc+1)};
  
  return (
    <>
      <div>useMemo2</div>
      <div> 
      <TextField  type="number" id="outlined-basic" label=" Factorial of "  value={number}  onChange={onChange} variant="outlined" />
      is {factorial}
      <Button  variant="contained"  onClick={onClick}>Re-render</Button>
    </div>
    </>
  );
}
function factorialOf(n) {
    console.log('factorialOf(n) called!');
    return n <= 0 ? 1 : n * factorialOf(n - 1);
  }
export default useMemo2;
