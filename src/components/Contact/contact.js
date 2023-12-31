import LogoTitle from '../../assets/projets/logo.png'
import {Link} from 'react-router-dom'
import React, { useState, useEffect }from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Importez les icônes individuellement
import './contact.scss'
import Typewriter from 'typewriter-effect';

const Contact =()=>{
  const [showHistoire, setShowHistoire] = useState(false);
  const typewriterStrings = ['Plus qu\'un projet,', 'racontons votre'];
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [copyPopUp, setCopyPopUp] = useState('');
  const [toggleClickCompo, setToggleClick] = useState('');
  
  // Montrer les différentes typos de 'histoire' lorsque le texe a fini de s'écrire
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentStringIndex((prevIndex) => (prevIndex + 1) % typewriterStrings.length);
      // si atteint fin array => afficher histoire
      if (currentStringIndex === typewriterStrings.length - 1) {
        setShowHistoire(true);
      }
    }, 6000); // 6 secondes
    setTimeout(() => {
      setShowHistoire(false);
    }, 10000); // Afficher "histoire" pendant 10 secondes
    return () => clearTimeout(timeoutId);
  }, [currentStringIndex]);

  // Copier le mail
  const handleCopyClick = () =>{
    const textToCopy= 'loumariadiaz@gmail.com';
    navigator.clipboard.writeText(textToCopy)
    .then(()=> {
      console.log('Texte copié avec succès !');
      setCopyPopUp('Mail copié avec succès, il ne vous reste plus qu\'à me contacter (et en plus ça rime !)');
      setTimeout(()=>{
        setCopyPopUp('');
      }, 10000);
    })
    .catch((err) => {
      setCopyPopUp('Erreur lors de la copie du texte : ' + err.message);
      console.error('Erreur lors de la copie du texte : ', err);
      setTimeout(()=>{
        setCopyPopUp('');
      }, 10000);
    });
  };

  const toggleClick = () =>{
     setToggleClick('repensons votre unicité');
      setTimeout(()=>{
        setCopyPopUp('');
      }, 10000)
  };

  return(
    <>
    <div className='containercontact-page'>
      <div className='text-zone'>
      {!showHistoire && (
        <Typewriter className='typewriter'
          options={{
            strings: [typewriterStrings[currentStringIndex]],
            autoStart: true,
            loop: true,
          }}
        />
      )}
           {showHistoire && (
        <div className='histoire'>
          <div className='histoire-animation'>histoire</div>
        </div>
      )}
      <div className='toggle'>
        <label className="toggle-switch">
          <button onClick={toggleClick} type="checkbox"/>
            <div className="toggle-switch-background">
            <div className="toggle-switch-handle"></div>
          </div>
        </label>
          <h2 className={`toggle ${toggleClickCompo ? 'toggleActive' : 'toggleInactive'}`}>{toggleClickCompo}</h2>
       </div>
      </div>
      <div className='social'> 
        <nav>
        <p>retrouvez-moi sur</p>
        <button className='buttonIn'><a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/maria-lou-diaz-1b7ba8143/'><FontAwesomeIcon className='svgIcon' icon={faLinkedinIn} style={{color: "#444950"}} /></a></button>
        <button className='buttonGh'><a target="_blank" rel='noreferrer' href='https://github.com/marialoudiaz'><FontAwesomeIcon className='svgIcon' icon={faGithub} style={{color: "#444950"}} /></a></button>
        <button className='buttonIs'><a target="_blank" rel='noreferrer' href='https://www.instagram.com/studio_mld/'><FontAwesomeIcon className='svgIcon' icon={faInstagram} style={{color: "#444950"}} /></a></button>
        </nav>
        </div>
        <div className='mail'>
          <button className='buttonmail' onClick={handleCopyClick}>
            <h4>{copyPopUp ? copyPopUp : 'loumariadiaz@gmail.com'}</h4>
          </button>
        </div>
      </div>
    </>
   )
  }
export default Contact;