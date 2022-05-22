import React from "react";
import { useRef, useState, useEffect } from 'react';
/*
    in useRefs value is not render the DOM as we change the value 
    and the DOM is not reloaded.
    note -> useRef returns only Object and the object content only one property ==> .current

*/
function useRefsHook2() {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);

    const startHandler = () => {
    if (timerIdRef.current) { return; }
    timerIdRef.current = setInterval(() => setCount(c => c+1), 1000);
    };
    const stopHandler = () => {
      clearInterval(timerIdRef.current);
      timerIdRef.current = 0;
    };
    useEffect(() => {
      return () => clearInterval(timerIdRef.current);
    }, []);
  return (
    <>
      <div>usecase of useRef in react</div>
      <div>Timer: {count}s</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </>
  );
}

export default useRefsHook2;
