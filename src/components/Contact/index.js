import LogoTitle from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import './index.scss'


const Contact =()=>{
  return(
    <>
    <div className='containercontact-page'>
      <div className='text-zone'>
        <h1>Plus qu'un projet, <br /> racontez votre <br /> histoire.</h1> // effet typing (gif ou algo)
        <h2>bouton:repensons votre unicité</h2>
      </div>

      <div className='contact-form'>
        <form>
          <ul>
            <li className='half'>
              <input type='text' name='name' placeholder='Name' required/>
            </li>
            <li className='half'>
              <input type='email' name='email' placeholder='Email' required/>
            </li>
            <li>
              <input type='text' name='subject' placeholder='Subject' required/>
            </li>
            <li>
              <textarea placeholder='Message' name='message' required></textarea>
            </li>
            <li>
              <input type='submit' className='flat-button' value='SEND'/>
            </li>
           </ul>
        </form>
      </div>
    </div>

    </>
  )


  }
export default Contact

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };