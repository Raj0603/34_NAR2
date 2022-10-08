import Navbar from "../Navbar/Navbar"
import "./Contact.css" ;
import emailjs from "emailjs-com" ;

function Contact() {

    function sendEMail(e) {
        e.preventDefault();

    emailjs.sendForm('service_7yrlwcj' , 'template_y7kxdcu' , e.target ,'qBuEMWy9NjLN1SwX6' )
    .then(()=>{
        document.write("<h2>Thank You For Sending Us Your Message</h2>");})
        .catch(()=> document.write("<h2>An Error Occured , Please Try Again </h2>"));
    }

	return (
    
        <div className="contact-main">
        <Navbar />

        <section id="contact">
            <div className="contact-box">
                <div className="contact-links">
                    <h2 className="heading2">CONTACT</h2>
                    <div className="links">
                  
                    </div>
                </div>
                <div className="contact-form-wrapper">
                    <form onSubmit={sendEMail}>
                        <div className="form-item">
                            <input type="text" name="sender" required className="contact-input"/>
                                <label className="contact-label">Name:</label>
                            </div>
                        <div className="form-item">
                            <input type="text" name="email" required className="contact-input"/>
                                <label className="contact-label">Email:</label>
                            </div>
                        <div className="form-item">
                            <textarea className="contact-textarea" name="message" required></textarea>
                            <label className="contact-label">Message:</label>
                        </div>
                        <button className="submit-btn">Send</button>
                    </form>
                </div>
            </div>
        </section>   
        </div>
        
	);
}
export default Contact;