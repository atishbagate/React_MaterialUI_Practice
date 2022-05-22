import { TextField,ButtonGroup,Button } from "@material-ui/core";
import React, { useRef } from "react";
/* notes=> to manipulate DOM and to get values from fields ]
        to directly change the component inside the page. 
        
*/

function useRefsHook() {
  let targetEle1 = useRef(null);
  function handle1(){
    alert(`one is clicked....${targetEle1.current.value}`); 
  }
  let ele2 = useRef(null);
  function handle2(){
    alert(`two button clicked....${ele2.current.value}`)
  }
  let ele3 = useRef(null);
  function handle3(){
    alert(`three buton clicked.......... ${ele3.current.value}`)
  }
  return (
    <>
      <div>useRefsHook</div>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
      <input ref={targetEle1} id="outlined-basic" label="Outlined" variant="outlined" />  <Button onClick={handle1}>One</Button>
      <br />
      <input ref={ele2} id="filled-basic" label="Filled" variant="filled" />  <Button onClick={handle2}>Two</Button>
      <br />
      <input ref={ele3} id="standard-basic" label="Standard" variant="standard" />  <Button onClick={handle3}>Three</Button>
      </ButtonGroup>
    </>
  );
}

export default useRefsHook;
