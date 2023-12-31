import React, { useState, useEffect }from 'react'
import './cible.scss';
// import ScrollingBanner from '../ScrollingBanner/ScrollingBanner';
import TextTransition, { presets } from 'react-text-transition';





function Cible(){
  const words = ['Un projet ?','Identité visuelle', 'Site vitrine', 'Application web', 'Application mobile','Typographie', 'Illustration']; // Ajoutez autant de mots que nécessaire
  const textsArray = ['autoentrepreneur.se','idéaliste','créatif.ve','rêveur.se','passionné.e']
  const [buttonText, setButtonText] = useState(textsArray[0]); // Texte initial du bouton
  const [index, setIndex] = React.useState(0);

  const handleMouseEnter =()=>{
    const currentIndex = textsArray.indexOf(buttonText);
    const nextIndex = (currentIndex + 1)%textsArray.length;
    setButtonText(textsArray[nextIndex]);
  };

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

   return (
   <div className='cible-container'>
   {/* <div className='baseline'>
      <h1 style={{marginBottom:'-0.3em'}}>Du code avec de la profondeur</h1>
      <h1>pour donner vie à vos idées</h1>
    </div> */}
      <div className='center'>
        <h1 className='circled'>
          <TextTransition springConfig={presets.gentle}>{words[index % words.length]}</TextTransition>
        </h1>
        {/* <ScrollingBanner words={words} /> */}
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center', lineHeight:'.5rem'}}>
        <p>Vous rêvez de monter votre entreprise ?</p>
        <p>Vous rêvez de partager votre univers incroyable ?</p>
        <p style={{marginBottom:'2em'}}>Vous débordez de créativité mais vous ne pouvez lui donner vie ?</p>
        </div>
        {/* <p>Ensemble de votre cible à votre site web, je vous guide vers la concrétisation de votre projet</p> */}
        <h3 style={{margin:'0', fontSize:'2.4rem'}}>De la conception à la réalisation, je vous accompagne</h3>
      </div>
      <div className='rolling-btn' onMouseEnter={handleMouseEnter}>{buttonText}</div>
    </div>
   )
  }

export default Cible;
