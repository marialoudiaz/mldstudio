import React, { useState, useEffect }from 'react'
import './index.scss';



function Cible(){

  const [buttonText, setButtonText] = useState('autoentrepreneur'); // Texte initial du bouton
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Fonction appelée toutes les 5 secondes pour changer le texte du bouton
      setButtonText((prevText) => { // prevText est le props de texte recu
        // Vous pouvez implémenter la logique de changement de texte ici
        return prevText === 'autoentrepreneur' ? 'idéaliste' : 'créatif';
      });
    }, 5000); // Intervalle de 5 secondes
   
    return () => clearInterval(intervalId);
  }, []); // Effectue l'effet seulement lors du montage du composant


   return (
   <>
      <div className='center'>
        <h1 className='circled'>Un projet ?</h1>
        <p>Nam dolorum nobis eos distinctio autem sit dignissimos natus est rerum odio. Et quam aperiam cum maiores galisum a quia labore qui neque sint vel maxime nulla aut accusamus similique et placeat vero. Sed nihil neque id voluptate alias eum debitis asperiores.</p>
      </div>
      <div className='rolling-btn'>{buttonText}</div>
    </>
   )
  }

export default Cible;