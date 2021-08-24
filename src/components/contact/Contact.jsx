import { useState } from "react";
import "./contact.scss";
import emailjs from 'emailjs-com';

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_b0fvkdd', e.target, 'user_ZxnZ3SXNEVhwZ5DXpWJPZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    setMessage(true);
  
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
        <input type="hidden" name="contact_number" />
      <input type="text" name="name" placeholder="Name" />
       <input type="email" name="email" placeholder="Email"  />
      <input type="text" name="subject" placeholder="Subject"  />
     
      <textarea name="message" placeholder="Message" />
      <input className="button" type="submit" value="Send" />
          {message && <span>"Thanks, I'll reply ASAP :)" </span>}
        </form>
      </div>
    </div>
  );
}
