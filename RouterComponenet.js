import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Career from "./pages/career";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navebar from "./pages/Navebar";
import Nopage from "./pages/Nopage";
import ToDoList from "./pages/TodoList";

export const NavuserContext = createContext(null);
const RouterComponenet = () => {
   const isloggedIn=localStorage.getItem('username')!==null
  const [isAuth, setIsAuth] = useState(isloggedIn?? false);
  const userContext ={isAuth, setIsAuth};
  return (
   < NavuserContext.Provider value={userContext}>
   <BrowserRouter>
      <Navebar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        {isAuth && (
          <>
            <Route path="/About" element={<About />} />
            <Route path="/Career" element={<Career />} />
            <Route path="/ToDo" element={<ToDoList />} />
            <Route path="/contact" element={<Contact />} />
          </>
        )}
        {!isAuth &&(<><Route path="/signup" element={<Signup />} /></>)}
        
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
   </NavuserContext.Provider>
  );
};

export default RouterComponenet;
