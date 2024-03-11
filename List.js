import React, { useEffect } from 'react'
import { useState } from 'react'

const List = ({getItems}) => {
    const[items,setItems]=useState([]);
    useEffect(()=>{
        console.log('Updating ....!');
        setItems(getItems())
    },[getItems])
  return (
   <ul>
    {items?.map((value)=>(
        <li key={value}>{value}</li>
    ))}

   </ul>
  );
};

export default List