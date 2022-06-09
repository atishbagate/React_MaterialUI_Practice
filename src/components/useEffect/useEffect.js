import React,{useState,useEffect} from 'react'
import { Button } from "@material-ui/core";

function useEffects() {
    const [count ,setCount] = useState(0);

    useEffect(()=>{
        console.log("conuter updated");
    },[count]); 
  return (
      <>
      <div>useEffect</div>
      <h3>counter -> {count}</h3>
      <Button onClick={()=>setCount(count+1)} variant="text">Text</Button>
      </>
  )
}

export default useEffects