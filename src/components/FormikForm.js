import './Formik.css';
import React from 'react';



const ContactForm = () => {

    

  return (
      <div>
        <form id='contactForm' name="contact" method="POST" data-netlify="true">
              <input  placeholder='First Name' type="text" name="name" />
              <input  placeholder='Last Name' type="text" name="last name" />
              <input  placeholder='Email' type="email" name="email" />
              <textarea placeholder='Message' name="message"></textarea>
              <button type="button">Send</button>
              
        </form>
      </div>
    

  );
};
 
export default ContactForm;