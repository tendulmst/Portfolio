import React from 'react';
import './Footer.css';
import images1 from './images/location.png'
import images2 from './images/phone.png'
import images3 from './images/email.png'
import images4 from './images/email1.png'
import images5 from './images/in.png'
import images6 from './images/whats.png'
 


function Footer() {

  const sendWhatsApp = (e) => {
  e.preventDefault();



  const firstName = e.target.firstName.value;
  const lastName = e.target.lastName.value;
  const phone = e.target.phone.value;
  const subject = e.target.subject.value;
  const message = e.target.message.value;

  const text = `Hello 👋
  Name: ${firstName} ${lastName}
  Phone: ${phone}
  Subject: ${subject}

  Message:
  ${message}`;

  const whatsappNumber = "918056836369"; // ✅ your number (no +)

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
};
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <h2 className="title">Get In Touch</h2>
        <p className="subtitle">
          I'm always interested in new opportunities and interesting projects. Let's
          discuss how we can work together!
        </p>

        <div className="grid">
          <div className="card form-card">
            <h3 className="card-title">Send me a message</h3>
            <form className="form" onSubmit={sendWhatsApp}>
  <div className="row">
    <input
      type="text"
      name="firstName"
      placeholder="Your first name"
      required
    />

    <input
      type="text"
      name="lastName"
      placeholder="Your last name"
      required
    />
  </div>

  <input
    type="tel"
    name="phone"
    placeholder="Your phone number"
    required
  />

  <input
    type="text"
    name="subject"
    placeholder="Project discussion"
    required
  />

  <textarea
    name="message"
    placeholder="Tell me about your project..."
    rows="4"
    required
  />

  <button type="submit" className="btn">
    Send Message
  </button>
</form>
          </div>

          <div>
            <h3 className="card-title1">Let's connect</h3>
            

            
              <ul className="contact-list">
                <li>
               <img src={images3} alt="Email" className='email'/>
                  
                  <div>
                    <div className="label">Email</div>
                    <a href="tendulkarm2000@gmail.com" target="_blank" rel="noreferrer">
                      tendulkarm2000@gmail.com
                    </a>
                  </div>
                </li>
                <li>
                   <img src={images2} alt="Phone" className='location'/>
                  <div>
                    <div className="label">Phone</div>
                    <a href="tel:+15551234567">+91  8056836369</a>
                  </div>
                </li>
                <li>
                   
                  <img src={images1} alt="Location" className='location'/>
                  <div>
                    <div className="label">Location</div>
                    <span>Erode, Tamilnadu</span>
                    
                  </div>
                  
                </li>
              </ul>
            <div className='card-title2'>
              <h1>Follow me</h1>
            </div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/tendulkar-m-5789162a3" target="_blank" rel="noreferrer" aria-label="GitHub"><img src={images5} alt="GitHub" className='email2'onClick={() => window.open("https://www.linkedin.com/in/tendulkar-m-5789162a3")}/></a>
            <a href="https://wa.me/918056836369" target="_blank" rel="noreferrer" aria-label="Whatsapp"><img src={images6} alt="Whatsapp" className='email2' onClick={() => window.open("https://www.linkedin.com/in/tendulkar-m-5789162a3")}/></a>
            <a href="mailto:tendulkarm2000@gmail.com" aria-label="Gmail"><img src={images4} alt="Gmail" className='email2'/></a>
          </div>
          </div>
        </div>

        <div className="bottom">
         s
          <span>© {new Date().getFullYear()} Tendulkar. All rights reserved.</span>
        </div>
      </div>
    </footer>



    
  );
 
  
}

export default Footer;


