import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../Parallax/parallax.scss'
import fusain1 from '../../assets/fusains/fusain2.png';
import fusain2 from '../../assets/fusains/fusain2-piece1.png';
import fusain3 from '../../assets/fusains/fusain2-piece2.png';
import fusain4 from '../../assets/fusains/fusain2piece3.png';
import fusain5 from '../../assets/fusains/fusain2-piece4.png';
import fusain6 from '../../assets/fusains/fusain2-piece5.png';
import fusain7 from '../../assets/fusains/fusain2-piece6.png';
import fusain8 from '../../assets/fusains/fusain2-piece7.png';
import fusain9 from '../../assets/fusains/fusain2-piece8.png';
import fusain10 from '../../assets/fusains/fusain2-piece10.png';


const Image = styled.img`
position: absolute;
transition: transform 0.2s;
`;

const ParallaxComp=()=> {

const [position, setPosition] = useState({ x: 0, y: 0 }); //STOCKER LA POSITIION ACTUELLE DU CURSEUR

  const handleMouseMove = (e) => { // METTRE A JOUR LA POSITIION DU CURSEUR A CHAQUE MOUVEMENT
    setPosition({ x: e.clientX, y: e.clientY });
  }; 

  useEffect(() => { // ajouter et supprimer un gestionnaire d'événement lorsqu'on quitte le conteneur.
    const container = document.getElementById('container');
    const handleMouseLeave = () => {
      setPosition({ x: container.offsetWidth / 2, y: container.offsetHeight / 2 });
    };
    container.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <>
    <div className='grid-massive-title'>
      <div className='grid-massive-title-bloc'>
      <h2>DU</h2>
      <h2 style={{fontSize:'25rem'}}>CODE</h2>
      <h2>AVEC</h2>
      </div>
     
    </div>

     <div className='containerparallax' id="container" onMouseMove={handleMouseMove}>

      <Image 
        src={fusain1} 
        style={{transform: `translate(50%, -5%) translate3d(${(position.x - window.innerWidth / 2)/60}px, ${(position.y - window.innerHeight / 2) / 60}px, 0)`,zIndex:'0',
      }}
      />
      <div className='parallaxtext'
     style={{
      transform: `translate(65%, 47%)`,zIndex:'3', fontSize:'2rem', fontFamily:'Karrik-Regular'
    }}
     >
      <h2>de la profondeur</h2>
    </div>
      <Image
        src={fusain2}
        style={{
          transform: `translate(50%, -5%) translate3d(${(position.x - window.innerWidth / 2) / 40}px, ${(position.y - window.innerHeight / 2) / 40}px, 0)`,zIndex:'3'
        //translate3d - effet parallax
            //valeurs translate3d ajustent la position des images en fonction du mouvement du curseur.
            // utilise position du curseur (position.x et position.y) pour ajuster la translation en fonction du mouvement du curseur.
            //(position.x - window.innerWidth / 2) / 20 calcule la translation horizontale en fonction de la position du curseur par rapport au centre de la fenêtre, divisée par 20 pour ajuster l'intensité de l'effet parallax.
        // translate indique le chemin qui va etre suivi : initialement déplacée horizontalement de 400% de sa propre largeur vers la droite et de 40% de sa propre hauteur vers le bas.
        }}
      />
      <Image
        src={fusain3}
        style={{
          transform: `translate(50%, -5%) translate3d(${(position.x - window.innerWidth / 2) / 40}px, ${(position.y - window.innerHeight / 2) / 40}px, 0)`,zIndex:'3'
        }}
      />
      {/* <Image
        src={fusain4}
        style={{
          transform: `translate(50%, -5%) translate3d(${(position.x - window.innerWidth / 2) / 40}px, ${(position.y - window.innerHeight / 2) / 40}px, 0)`,zIndex:'3'
        }}
      /> */}
       
      <Image
        src={fusain5}
        style={{
          transform: `translate(50%, -5%) translate3d(${(position.x - window.innerWidth / 2) / 40}px, ${(position.y - window.innerHeight / 2) /40}px, 0)`,zIndex:'3'
        }}
      />
      <Image
        src={fusain6}
        style={{
          transform: `translate(50%, -5%) translate3d(${(position.x - window.innerWidth / 2) / 40}px, ${(position.y - window.innerHeight / 2) / 40}px, 0)`,zIndex:'3'
        }}
      />
      <Image
        src={fusain7}
        style={{
          transform: `translate(50%, -5%) translate3d(${(position.x - window.innerWidth / 2) / 40}px, ${(position.y - window.innerHeight / 2) / 40}px, 0)`,zIndex:'3'
        }}
      />
      <Image
        src={fusain8}
        style={{
          transform: `translate(50%, -5%) translate3d(${(position.x - window.innerWidth / 2) / 40}px, ${(position.y - window.innerHeight / 2) / 40}px, 0)`,zIndex:'3'
        }}
      />
      
      <Image
        src={fusain9}
        style={{
          transform: `translate(50%, -5%) translate3d(${(position.x - window.innerWidth / 2) / 40}px, ${(position.y - window.innerHeight / 2) / 40}px, 0)`,zIndex:'3'
        }}
      />
      
    </div>
   
   
    </>
  );
};
    export default ParallaxComp;

