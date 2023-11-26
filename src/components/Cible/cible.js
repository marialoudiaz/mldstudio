import React, { useState, useEffect }from 'react'
import './cible.scss';
import ScrollingBanner from '../ScrollingBanner/ScrollingBanner';




function Cible(){
  const words = ['Identité visuelle', 'Site vitrine', 'Application web', 'Application mobile','Typographie', 'Illustration']; // Ajoutez autant de mots que nécessaire
  const textsArray = ['autoentrepreneur.se','idéaliste','créatif.ve','rêveur.se','passionné.e']
  const [buttonText, setButtonText] = useState(textsArray[0]); // Texte initial du bouton

  const handleMouseEnter =()=>{
    const currentIndex = textsArray.indexOf(buttonText);
    const nextIndex = (currentIndex + 1)%textsArray.length;

    setButtonText(textsArray[nextIndex]);
  };

   return (
   <>
      <div className='center'>
        <h1 className='circled'>Un projet ?</h1>
        <ScrollingBanner words={words} />
        <p>Nam dolorum nobis eos distinctio autem sit dignissimos natus est rerum odio. Et quam aperiam cum maiores galisum a quia labore qui neque sint vel maxime nulla aut accusamus similique et placeat vero. Sed nihil neque id voluptate alias eum debitis asperiores.</p>
        <h3>on vous accompagne</h3>
      </div>
      <div className='rolling-btn' onMouseEnter={handleMouseEnter}>{buttonText}</div>
    </>
   )
  }

export default Cible;
