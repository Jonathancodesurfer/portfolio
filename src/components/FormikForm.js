import './Formik.css';
import React from 'react';



const ContactForm = () => {

    

  return (
      <div className='Form_container'>
          <h1 className='Form_title'>Contact us</h1>
        <form  id='contactForm' name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <input  placeholder='First Name' type="text" name="name" />
              <input  placeholder='Last Name' type="text" name="last name" />
              <input  placeholder='Email' type="email" name="email" />
              <textarea placeholder='Message' name="message"></textarea>
              <button type="submit">Send</button>
              
        </form>
      </div>
    

  );
};
 
export default ContactForm;