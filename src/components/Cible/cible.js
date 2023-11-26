import React, { useState }from 'react'
import './cible.scss';



function Cible(){

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
        <div className='rolling-categories'>rollingcategories</div>
        <p>Nam dolorum nobis eos distinctio autem sit dignissimos natus est rerum odio. Et quam aperiam cum maiores galisum a quia labore qui neque sint vel maxime nulla aut accusamus similique et placeat vero. Sed nihil neque id voluptate alias eum debitis asperiores.</p>
        <h3>on vous accompagne</h3>
      </div>
      <div className='rolling-btn' onMouseEnter={handleMouseEnter}>{buttonText}</div>
    </>
   )
  }

export default Cible;
  // Changer le texte automatiquement lors du montage du composant
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     // Fonction appelée toutes les 5 secondes pour changer le texte du bouton
  //     setButtonText((prevText) => { // prevText est le props de texte recu
  //       // Vous pouvez implémenter la logique de changement de texte ici
  //       return prevText === 'autoentrepreneur' ? 'idéaliste' : 'créatif';
  //     });
  //   }, 5000); // Intervalle de 5 secondes
  //   return () => clearInterval(intervalId);
  // }, []); // Effectue l'effet seulement lors du montage du composant
