import "./CareerForm.css"
import Navbar from "../../Components/Navbar/Navbar"

function CareerForm() {
    return (


        <div className="form-main">

            <Navbar/>

            <div className="info">
                <p className="form-info" style={{marginTop: "12vh"}}>Our AI will help you better understand your choices.</p>
                <h2 className="form-heading">TAKE THE QUIZ NOW</h2>
                <p className="form-info">answer the following questions as best as you can.</p>
            </div>
            {/* <img src="../../assets/Form.svg" alt="" /> */}
            <div className="form-container">
                <div className="form-row">
                    <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>Reading and writing skills</strong></label></div>
                    <div className="form-col">
                        <select className="dropdown" name="skill" id="skill">
                            <option  value="select">Select</option>
                            <option  value="Excellent">Excellent</option>
                            <option value="Medium">Medium</option>
                            <option  value="Poor">Poor</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>CGPA</strong><br /></label></div>
                    <div className="form-col"><input type="number" style={{ margin: "8px" }} /></div>
                </div>
                <div className="form-row">
                    <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>web dev experience</strong><br /></label></div>
                    <div className="form-col">
                        <input type="radio" style={{paddingLeft:"5px"}}  id="yes1" name="web-exp" value="Yes" />
                        <label style={{marginLeft:"8px"}} for="yes1">Yes</label><br />
                        <input type="radio" style={{paddingLeft:"5px"}}  id="no1" name="web-exp" value="No" />
                        <label style={{marginLeft:"8px"}} for="no1">NO</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>Are you good at data analysis?</strong><br /></label></div>
                    <div className="form-col">
                    <input type="radio" style={{paddingLeft:"5px"}}  id="yes2" name="analysis" value="Yes" />
                        <label style={{marginLeft:"8px"}} for="yes2">Yes</label><br />
                        <input type="radio" style={{paddingLeft:"5px"}}  id="no2" name="analysis" value="No" />
                        <label style={{marginLeft:"8px"}} for="no2">NO</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>Are you a tech person?</strong><br /></label></div>
                    <div className="form-col">
                    <input type="radio" style={{paddingLeft:"5px"}}  id="yes3" name="tech" value="Yes" />
                        <label style={{marginLeft:"8px"}} for="yes3">Yes</label><br />
                        <input type="radio" style={{paddingLeft:"5px"}}  id="no3" name="tech" value="No" />
                        <label style={{marginLeft:"8px"}} for="no3">NO</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>were you in non tech society?</strong><br /></label></div>
                    <div className="form-col">
                    <input type="radio" style={{paddingLeft:"5px"}}  id="yes4" name="non_tech" value="Yes" />
                        <label style={{marginLeft:"8px"}} for="yes4">Yes</label><br />
                        <input type="radio" style={{paddingLeft:"5px"}}  id="no4" name="non_tech" value="No" />
                        <label style={{marginLeft:"8px"}} for="no4">NO</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>are you good at coding?</strong><br /></label></div>
                    <div className="form-col">
                    <input type="radio" style={{paddingLeft:"5px"}}  id="yes5" name="coding" value="Yes" />
                        <label style={{marginLeft:"8px"}} for="yes5">Yes</label><br />
                        <input type="radio" style={{paddingLeft:"5px"}}  id="no5" name="coding" value="No" />
                        <label style={{marginLeft:"8px"}} for="no5">NO</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>have you developed mobile apps</strong><br /></label></div>
                    <div className="form-col">
                    <input type="radio" style={{paddingLeft:"5px"}}  id="yes6" name="mobdev" value="Yes" />
                        <label style={{marginLeft:"8px"}} for="yes6">Yes</label><br />
                        <input type="radio" style={{paddingLeft:"5px"}}  id="no6" name="mobdev" value="No" />
                        <label style={{marginLeft:"8px"}} for="no6">NO</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>Are you good at communication</strong><br /></label></div>
                    <div className="form-col">
                    <input type="radio" style={{paddingLeft:"5px"}}  id="yes7" name="communication" value="Yes" />
                        <label style={{marginLeft:"8px"}} for="yes7">Yes</label><br />
                        <input type="radio" style={{paddingLeft:"5px"}}  id="no7" name="communication" value="No" />
                        <label style={{marginLeft:"8px"}} for="no7">NO</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>do you have specializtion in security</strong><br /></label></div>
                    <div className="form-col">
                    <input type="radio" style={{paddingLeft:"5px"}}  id="yes8" name="security" value="Yes" />
                        <label style={{marginLeft:"8px"}} for="yes8">Yes</label><br />
                        <input type="radio" style={{paddingLeft:"5px"}}  id="no8" name="security" value="No" />
                        <label style={{marginLeft:"8px"}} for="no8">NO</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>have you ever handled big data?</strong><br /></label></div>
                    <div className="form-col">
                    <input type="radio" style={{paddingLeft:"5px"}}  id="yes9" name="bigdata" value="Yes" />
                        <label style={{marginLeft:"8px"}} for="yes9">Yes</label><br />
                        <input type="radio" style={{paddingLeft:"5px"}}  id="no9" name="bigdata" value="No" />
                        <label style={{marginLeft:"8px"}} for="no9">NO</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>knowledge of statistics&nbsp;and data science</strong><br /></label></div>
                    <div className="form-col">
                    <input type="radio" style={{paddingLeft:"5px"}}  id="yes10" name="ds" value="Yes" />
                        <label style={{marginLeft:"8px"}} for="yes10">Yes</label><br />
                        <input type="radio" style={{paddingLeft:"5px"}}  id="no10" name="ds" value="No" />
                        <label style={{marginLeft:"8px"}} for="no10">NO</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>proficient in english</strong><br /></label></div>
                    <div className="form-col">
                    <input type="radio" style={{paddingLeft:"5px"}}  id="yes11" name="english" value="Yes" />
                        <label style={{marginLeft:"8px"}} for="yes11">Yes</label><br />
                        <input type="radio" style={{paddingLeft:"5px"}}  id="no11" name="english" value="No" />
                        <label style={{marginLeft:"8px"}} for="no11">NO</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>managed some event</strong><br /></label></div>
                    <div className="form-col">
                    <input type="radio" style={{paddingLeft:"5px"}}  id="yes12" name="event" value="Yes" />
                        <label style={{marginLeft:"8px"}} for="yes12">Yes</label><br />
                        <input type="radio" style={{paddingLeft:"5px"}}  id="no12" name="event" value="No" />
                        <label style={{marginLeft:"8px"}} for="no12">NO</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>do you write tech blogs</strong><br /></label></div>
                    <div className="form-col">
                    <input type="radio" style={{paddingLeft:"5px"}}  id="yes13" name="blogs" value="Yes" />
                        <label style={{marginLeft:"8px"}} for="yes13">Yes</label><br />
                        <input type="radio" style={{paddingLeft:"5px"}}  id="no13" name="blogs" value="No" />
                        <label style={{marginLeft:"8px"}} for="no13">NO</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>are you into marketing</strong><br /></label></div>
                    <div className="form-col">
                    <input type="radio" style={{paddingLeft:"5px"}}  id="yes14" name="marketing" value="Yes" />
                        <label style={{marginLeft:"8px"}} for="yes14">Yes</label><br />
                        <input type="radio" style={{paddingLeft:"5px"}}  id="no14" name="marketing" value="No" />
                        <label style={{marginLeft:"8px"}} for="no14">NO</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>are you a ml expert</strong><br /></label></div>
                    <div className="form-col">
                    <input type="radio" style={{paddingLeft:"5px"}}  id="yes15" name="ai" value="Yes" />
                        <label style={{marginLeft:"8px"}} for="yes15">Yes</label><br />
                        <input type="radio" style={{paddingLeft:"5px"}}  id="no15" name="ai" value="No" />
                        <label style={{marginLeft:"8px"}} for="no15">NO</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>do you have a lot of connections</strong><br /></label></div>
                    <div className="form-col">
                    <input type="radio" style={{paddingLeft:"5px"}}  id="yes16" name="connection" value="Yes" />
                        <label style={{marginLeft:"8px"}} for="yes16">Yes</label><br />
                        <input type="radio" style={{paddingLeft:"5px"}}  id="no16" name="connection" value="No" />
                        <label style={{marginLeft:"8px"}} for="no16">NO</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>have you ever built live project?</strong><br /></label></div>
                    <div className="form-col">
                    <input type="radio" style={{paddingLeft:"5px"}}  id="yes17" name="live_project" value="Yes" />
                        <label style={{marginLeft:"8px"}} for="yes17">Yes</label><br />
                        <input type="radio" style={{paddingLeft:"5px"}}  id="no17" name="live_project" value="No" />
                        <label style={{marginLeft:"8px"}} for="no17">NO</label>
                    </div>
                </div>

            </div>
            <div className="form-button"><button className="form-submit" type="button"><b>Submit</b></button></div>
        </div>

    )
}
export default CareerForm