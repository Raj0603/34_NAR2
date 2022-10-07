import './App.css';
// import About from "./components/About/About"

 import React, { Component, createContext, useReducer, useState } from "react"
import Signup from './Components/SignUp/Signup';
import {useEffect} from "react"
import {gapi} from "gapi-script"
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

// import Home from './pages/Home/Home';
// import Contact from './components/Contact/Contact';
// import PersonalInfo from './components/PersonalInfo/PersonalInfo';
// import Projects from "./components/Projects/Projects";
// import Certification from "./components/Certification/Certification";
// import Education from "./components/Education/Education";
// import Interest from "./components/Interest/Interest";
// import Skills from "./components/Skills/Skills";
import Login from './Components/Login/Login';
// import { init } from 'emailjs-com';

import { initialState, reducer } from '../src/reducer/UseReducer';

export const UserContext = createContext();

const Routing = () => {
  return (

 
 


  <>
  

  
  <div className="App">
     
 <Router>
      <Routes>
        {/* <Route path='/' element={<Home/>}></Route> */}
      
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        
        {/* <Route path='/Home' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route> */}
        {/* <Route path='/Skills' element={<Skills />}></Route>
        <Route path="/PersonalInfo/Skills" element={<Navigate replace to="/Skills" />} />
        <Route path='/Certification' element={<Certification />}></Route>
        <Route path="/Skills/Certification" element={<Navigate replace to="/Certification" />} />
        <Route path='/Projects' element={<Projects />}></Route>
        <Route path="/Certification/Projects" element={<Navigate replace to="/Projects" />} />
        <Route path='/Education' element={<Education />}></Route>
        <Route path="/Projects/Education" element={<Navigate replace to="/Education" />} />
        <Route path='/Interest' element={<Interest />}></Route>
        <Route path="/Education/Interest" element={<Navigate replace to="/Interest" />} />
        <Route path='/PersonalInfo' element={<PersonalInfo />}></Route>
        <Route path='/Contact' element={<Contact/>}></Route> */}
        

{/* 
        <Route path="/Signup">
          <Signup setLoginUser={setLoginUser}/>
        </Route>

        <Route path="/Signup">
          <Signup />
        </Route> */}
     
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
