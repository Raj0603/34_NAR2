import './App.css';
// import About from "./components/About/About"

 import React, { Component, createContext, useReducer, useState } from "react"
import Signup from './Components/SignUp/Signup';
import Home from './pages/Home/Home';
import Contact from "./Components/Contact/Contact"
import Body from "./Components/Resume/Body/Body"
import Resumetemp2 from "./Components/Resume/Resume temp 2/Resumetemp2"
import template from './Components/Template/template';
// import {useEffect} from "react"
// import {gapi} from "gapi-script"
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Faq from "./Components/FAQ/Faq"
import Login from './Components/Login/Login';
// import { init } from 'emailjs-com';

import { initialState, reducer } from '../src/reducer/UseReducer';
import CareerForm from './pages/CareerForm/CareerForm';
import Slider from './Components/Slider/Slider';

export const UserContext = createContext();

const Routing = () => {
  return (
  <>
  <div className="App">

    {/* <Home/> */}
     
 <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Body' element={<Body />}></Route>
        <Route path='/CareerForm' element={<CareerForm />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Slider' element={<Slider />}></Route>
        <Route path='/template' element={<template />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Faq' element={<Faq />}></Route>

        
        
        {/* <Route path='/Home' element={<Home />}></Route> */}
        
        </Routes>
    </Router>

    </div>
    </>
    )
    }





  // const [ user,setLoginUser ] = useState({})
  // useEffect(() => {
  //   function start(){
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: ""
  //     })
  //   };

  //   gapi.load('client:auth2', start)

  // });


     

   
  const App = () => {

  const [state,dispatch] = useReducer(reducer,initialState);

    

    return (
        
      
        <>
        <UserContext.Provider value={{state,dispatch}}>
          <Routing/>
      </UserContext.Provider>

      
      </>
  );
    }




// change here up

export default App;
