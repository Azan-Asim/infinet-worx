import React from "react";
import "../css/Contact.css"; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faXTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section className="contact1" id="contact">
      <div className="content1">
        <h2>Contact Us</h2>
        <p>Need assistance or have questions? Contact us; we’re here to help!</p>
      </div>
      <div className="container2">
        <div className="contactinfo">
          <div className="box1">
            <div className="icon1"><FontAwesomeIcon icon={faLocationDot} /></div>
            <div className="text2">
              <h3>Address</h3>
              <p>Level 3 KL Gateway 59200<br /> Kuala Lumpur<br /> Malaysia</p>
            </div>
          </div>
          <div className="box1">
            <div className="icon1"><FontAwesomeIcon icon={faPhone} /></div>
            <div className="text2">
              <h3>Phone</h3>
              <p>+6 23 2935 8176</p>
            </div>
          </div>
          <div className="box1">
            <div className="icon1"><FontAwesomeIcon icon={faEnvelope} /></div>
            <div className="text2">
              <h3>E-mail</h3>
              <p>info@infinetworx.co</p>
            </div>
          </div>
          <h2 className="txt">Contact with us</h2>
          <ul className="sci">
            <li><a href="facebook"><FontAwesomeIcon icon={faFacebookF} /></a></li>
            <li><a href="twitter"><FontAwesomeIcon icon={faXTwitter} /></a></li>
            <li><a href="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="linkedinn"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
          </ul>
        </div>
        <div className="contactform">
          <form>
            <h2>Send Message</h2>
            <div className="inputbox">
              <input type="text" required />
              <span>Full Name</span>
            </div>
            <div className="inputbox">
              <input type="email" required />
              <span>E-mail</span>
            </div>
            <div className="inputbox">
              <textarea required></textarea>
              <span>Type your Message...</span>
            </div>
            <div className="inputbox">
              <a href="mailto:arhamsarwar786@gmail.com">
              Send
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
