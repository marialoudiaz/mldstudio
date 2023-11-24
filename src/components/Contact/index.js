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
           </ul>
        </form>
      </div>
    </div>

    </>
  )


  }
export default Contact