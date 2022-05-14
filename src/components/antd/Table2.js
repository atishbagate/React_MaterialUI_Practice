import React,{useState,useEffect} from 'react'
import {Table} from 'antd'

import { tableData } from '../../API';

function Table2() {
    const [data, setData] = useState([]);
    const [totalPages,setTotalPages] = useState(1);
 
    
    useEffect(() => {
         tableData()
         .then((res)=>{
             if (res.status ===200) {
                //  console.log(res);
                 setData(res.data)
                 setTotalPages(res.totalPages)
             }else{
                alert('Data is not get.')
             }
         })
         .catch((err)=>{
            console.log('error is ',err);
         })
    }, []);


  return (
      <>
    <div>Table2</div>
 
    </>
  )
}

export default Table2