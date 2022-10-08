import "./Navbar.css"
import {Link} from "react-router-dom"
import { UserContext } from "../../App"
import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import {BrowserRouter ,useNavigate,useLocation, Navigate} from "react-router-dom"

function Navbar() {
  

const { state, dispatch } = useContext(UserContext);   


const navigate = useNavigate();


const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem('jwt');
    setAuthenticationToken(false);
    setIsLoggedin(false);
   // dispatch(Login=false);
 
    navigate("/", { replace: false });
    // window.location ="/";

    //   if ((navigate="Login",replace= true)) {
    //           const  element = document.getElementById("seo")
    //           element.addEventListener("click",()=>{
    //             window.alert("No");
    //           })
    //         }

};

  const Rendermenu = () => {
    if(state) {
        return(
           
            <><div id="seo">
            <div className="login-signup">
                <Link to="" onClick={handleLogout}>
                    <button className="home-signup">LogOut</button>
                </Link>


             
            </div>
            
            <div className="home-navbar">
                    
                    <Link to="/">
                        <a href="" className="home-nav-ele">HOME</a>
                    </Link>

                    <Link to="/CareerForm" id="vv">
                        <a href="" className="home-nav-ele">career guide</a>
                    </Link>
                    <Link to="/Body">
                        <a href="" className="home-nav-ele">resume building</a>
                    </Link>
                    <Link to="/">
                        <a href="" className="home-nav-ele" style={{ borderRight: "none" }}>FAQ</a>
                    </Link>
                </div>
                </div></>
        )
    }

    else {
        return(
            <><div className="login-signup">
                
                <Link to="/Signup">
                    <button className="home-signup">Signup</button>
                </Link>
                <Link to= "/Login">
                    <button className="home-login">Login</button>
                </Link>
            </div>
                 
                 <div className="home-navbar">
                    <Link to="/">

                        <a href="" className="home-nav-ele">HOME</a>
                    </Link>
                    <Link to="/CareerForm">
                        <a href="" className="home-nav-ele">career guide</a>
                    </Link>
                    <Link to="/Body">
                        <a href="" className="home-nav-ele">resume building</a>
                    </Link>
                    <Link to="/">
                        <a href="" className="home-nav-ele" style={{ borderRight: "none" }}>FAQ</a>
                    </Link>
                </div>
                </>

        )
    }


  } 
  
  

  
    return (
        <>
           <Rendermenu/>
        </>
    )
}
export default Navbar