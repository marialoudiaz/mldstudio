import LogoTitle from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import React, { useState }from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Importez les icônes individuellement
import './contact.scss'

const Contact =()=>{

  const [copyPopUp, setCopyPopUp] = useState('');

  const handleCopyClick = () =>{
    const textToCopy= 'loumariadiaz@gmail.com';
    navigator.clipboard.writeText(textToCopy)
    .then(()=> {
      console.log('Texte copié avec succès !');
      setCopyPopUp('Mail copié avec succès, il ne vous reste plus qu\'à me contacter (et en plus ça rime !)');
    })
    .catch((err) => {
      setCopyPopUp('Erreur lors de la copie du texte : ' + err.message);
      console.error('Erreur lors de la copie du texte : ', err);
    });
  };


  return(
    <>
    <div className='containercontact-page'>
      <div className='text-zone'>
        <h1>Plus qu'un projet, <br /> racontez votre <br /> histoire.</h1> // effet typing (gif ou algo)
        <h2>bouton:repensons votre unicité</h2>
      </div>

      <div className='contact-form'>
        <div className='mail'>
          <button className='buttonmail' onClick={handleCopyClick}><h4>loumariadiaz@gmail.com</h4></button>
          {copyPopUp && (
            <div className='popup'>{copyPopUp}</div>
          )}
        </div>
        <div className='social'>
        <p>retrouvez-moi sur</p>
        <nav>
        <button className='buttonIn'><a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/maria-lou-diaz-1b7ba8143/'><FontAwesomeIcon className='svgIcon' icon={faLinkedinIn} style={{color: "#444950"}} /></a></button>
        <button className='buttonGh'><a target="_blank" rel='noreferrer' href='https://github.com/marialoudiaz'><FontAwesomeIcon className='svgIcon' icon={faGithub} style={{color: "#444950"}} /></a></button>
        <button className='buttonIs'><a target="_blank" rel='noreferrer' href='https://www.instagram.com/studio_mld/'><FontAwesomeIcon className='svgIcon' icon={faInstagram} style={{color: "#444950"}} /></a></button>
        </nav>
        </div>
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