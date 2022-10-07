import "./Login.css"
import login from "../../assets/Signup/log.svg"
import Signin from "../../assets/Signup/sign.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faGoogle, faLinkedinIn, } from "@fortawesome/free-brands-svg-icons"
// import {faLock, faUser, faEnvelope, } from "@fortawesome/free-solid-svg-icons"
import { GoogleLogin } from "react-google-login"
import React, { useContext, useState } from "react"
import Signup from "../SignUp/Signup"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useRef } from "react"

import { UserContext } from "../../App"





const clientId = "416173177198-s29fioc3j8kia1fviqh1j1bbfbldghun.apps.googleusercontent.com"

function Login() {


    setTimeout(ST, 10)
    function ST() {

        const sign_in_btn = document.getElementById("sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");

        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign-up-mode");
        });

        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
        });
    }

    const onSuccess = (res) => {
        console.log("Login Success! Current user: ", res.profileObj)
    }

    const onFailure = (res) => {
        console.log("Login Failed! res: ", res)
    }



    // login flow 

    //const {state,dispatch} = useContext(UserContext);
    const navigate = useNavigate();
    const [data, setData] = useState({ userName: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:4000/hacky/auth";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            navigate("/");
            dispatch({type:'USER',payload:true})
            alert(res.message);
          
            console.log(data.userName);
           

        } 
           catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    

    // const logreg = () => {

    // }

    // const handleLogin = () => {
    //     handleSubmit,
    //     logreg
    // }


    return (

        <>
         

            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form" onSubmit={handleSubmit}>
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>

                                <input type="text" placeholder="Username"
                                    name="userName"
                                    onChange={handleChange}
                                    value={data.userName}
                                    required />
                            </div>


                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password"
                                    name="password"
                                    onChange={handleChange}
                                    value={data.password}
                                    required />
                            </div>

                            {/* displaying error message */}
                            {error && <div style={{ color: "Red" }}>{error}</div>}


                            <input type="submit" value="Login" className="btn solid" />

                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                {/* <a href="#" className="social-icon">
<FontAwesomeIcon icon={faFacebookF} /> */}
                                {/* </a> */}
                                {/* <a href="#" className="social-icon">
<FontAwesomeIcon icon={faGoogle} /> */}
                                <GoogleLogin
                                    className="gbtn"
                                    clientId={clientId}
                                    buttonText="Login"
                                    onSuccess={onSuccess}
                                    onFailure={onFailure}
                                    cookiePolicy={"single_host_origin"}
                                    isSignedIn={true} />
                                {/* </a>
<a href="#" className="social-icon">
<FontAwesomeIcon icon={faGithub} />
</a>
<a href="#" className="social-icon">
<FontAwesomeIcon icon={faLinkedinIn} />
</a> */}
                            </div>
                        </form>

                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                It's free , join now.
                            </p>

                            <button className="btn transparent" id="sign-in-btn" onClick={() => navigate("/Signup")}>

                                Sign up

                            </button>
                        </div>
                        <img src={login} className="image" alt="" />
                    </div>

                </div>
            </div>
        </>


    )


}

export default Login