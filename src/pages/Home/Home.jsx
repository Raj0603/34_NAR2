import "./Home.css"
import React from "react"
import {Link} from "react-router-dom"
// import Body from "../../Components/Resume/Body/Body"
import Navbar from "../../Components/Navbar/Navbar"


function Home() {
    return (
        <>
            <div className="homeContainer">
                <Navbar/>
                <div className="home-career">
                    <b><p className="home-heading">FIND YOUR PATH, <br /> <br /> <br /> YOUR CAREER.</p></b>

                    <p className="home-info">So many career choices and so little time. <br /><br />
                        but with appname you can figure it out in nothing but a few minutes!
                    </p>
                    <Link to="/CareerForm">

                    <button className="home-button">Get started</button>
                    </Link>
                </div>

<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                <div className="home-resume">
                    <p className="home-heading"><b> STRUGGLING <br /> <br /> WITH YOUR <br /><br /> RESUME? </b> </p>

                    <p className="home-info">Create your resume now with our automated resume builder
                    </p>

                    <Link to="/Slider">
                    <button className="home-button">Build now</button>
                    </Link>
                </div>

                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br />
                <div className="home-footer">
                    <p>Contact US</p>
                </div>
            </div>

        </>)
}
export default Home