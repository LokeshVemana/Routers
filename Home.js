import React, { useCallback, useMemo, useState } from "react";
import List from "./List";

const Home = () => {
  const [username, setUsername] = useState("");
  const [counter, setCounter] = useState(0);
  const factorialLogic = (value) => {
    console.log('Factorial');
    let result = 1;
    for (let index = 1; index <= value; index++) {
      result *= index;
    }
    return result;
  };
  const factorialValue = useMemo(()=>factorialLogic(counter),[counter])
  return (
    <div>
      <h1>The Fatorial of {counter} is{factorialValue} </h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <hr></hr>
      <input
        type="Name"
        value={username}
        placeholder="Enter Name"
        onChange={(e) => setUsername(e.target.value)}
      />
       <h1>My Name is: {username}</h1>
    </div>
  );

  // const[counter,setCounter]=useState(0)
  // const[bgColor,setbgColor] =useState(false)
  // const getItems=useCallback(()=>{
  //   return[counter, counter+1, counter+2];
  // },[counter]);

  // return (
  //   <div style={{background:bgColor?"red":"green"}}>
  //     <input type='number' value={counter} onChange={(e)=>setCounter(e.target.value)}/>
  //     <button onClick={()=>setbgColor(!bgColor)}> Theme</button>
  //     <List getItems={getItems}/>
  //   </div>
  // )
  //  <h1 style={{textAlign:'center' }}> Login Successfully <br></br> <hr></hr>
  //   Welcome to the Nani's Web page.</h1>
};

export default Home;
