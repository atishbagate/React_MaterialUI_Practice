import React,{useState,useCallback,useEffect} from 'react'
import { Button,TextField } from "@material-ui/core";
/*
    useCallback() is used -> 
        given the same dependency values deps, the hook returns the same function instance between renderings.
        means -> when dependencies changed then useCallback() will return the new function instance otherwise it will not return.

            useCallback                                              useMemo
            when we want to memoize                                when we want to memoize the value
            the function then we use useCallback.                  then we use the useMemo.
            
*/
function UseCallback() {
    const [number,setNumber] = useState(1);
    const [shuffle,setShuffle] = useState(false);

    const getItem  = useCallback(()=>{
        return [number,number+1,number+2]
    },[number]);

   
    return (
      <>
        <div>UseCallback</div>
        <TextField  type="number" id="outlined-basic" label=" Factorial of "  value={number} onChange={e => setNumber(parseInt(e.target.value))}  variant="outlined" />
        <Button  variant="contained"  onClick={()=>setShuffle(shuffle => !shuffle)}>Re-render</Button>
        <h3>Under this is Child Component.</h3>
        <ChildComponent getItem={getItem}/>
      </>
  )
}

// this is the Child component where the useCallback is sending a function 

function ChildComponent({getItem}){
    const [item,setItem] = useState([]);
    useEffect(()=>{
        setItem(getItem())
        console.log("item is rendered inside the Child component");
    },[getItem])
    return item.map(item=><div key={item}>{item}</div>)
}
export default UseCallback