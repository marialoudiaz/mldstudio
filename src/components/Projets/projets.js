import React from 'react';
import {useRef, useState, useEffect} from 'react';
import { Paragraph, Text, ThemeProvider } from 'react-ui';
import { tokens, components } from 'react-ui/themes/base'

import './projets.scss';
import image1 from '../../assets/projets/matchjob-screen.png';
import image2 from '../../assets/projets/onsight.png';
import image3 from '../../assets/projets/pilepoele.png';
import image4 from '../../assets/projets/cdvmono.jpg';
import image5 from '../../assets/projets/topos.jpg';
import image6 from '../../assets/projets/persona_poster.jpg';

function Projets() {
      // Usestate permet de gerer letat local du composant pour stocker la hauteur de project-description ('descriptionHeight') et de projectImgContainer ('imgContainerHeight')
  // const [descriptionHeight, setDescriptionHeight] = useState(0);
  // const [imgContainerHeight, setImgContainerHeight] = useState(0);
  const gridContainerRef = useRef(null);
  const descriptionRef = useRef(null);
  const imgContainerRef = useRef(null);
  
  const customStyles = {
    fontSize:'1.5rem',
    padding: '1em',  
    textAlign:'left',
  } 

  const projectsArr = [
    {
      id: 1,
      image: image1,
      title: 'Matchjobs',
      baseline: 'Une nouvelle ère de recruitement',
      text:'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure, Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure, Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure',
      text2:'être trouvées ici ou là, mais la majeure',
      link: 'matchjobs.com',
    },
    {
      id: 2,
      image: image2,
      title: 'Onsight',
      baseline: 'Une appli retro pour garder un oeil sur tes films ',
      text:'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure, Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure, Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure',
      text2:'être trouvées ici ou là, mais la majeure',
      link: 'onsight.com',
    },
    {
      id: 3,
      image: image3,
      title: 'Pile-Poële',
      baseline: 'Une fonte culinario-inclusive',
      text:'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure, Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure, Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure',
      text2:'être trouvées ici ou là, mais la majeure',
      link: 'pilepoele.com',
    },
    {
      id: 4,
      image: image4,
      title: 'Monogrammes',
      baseline: 'Une sélection d\'identités',
      text:'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure, Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure, Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure',
      text2:'être trouvées ici ou là, mais la majeure',
    },
    {
      id: 5,
      image: image5,
      title: 'Topographies',
      baseline: 'Une sélection de fusains',
      text:'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure, Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure, Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure',
      text2:'être trouvées ici ou là, mais la majeure',
    },
    {
      id: 6,
      image: image6,
      title: 'Posters',
      baseline: 'Une sélection de mes amours ciné',
      text:'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure, Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure, Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure',
      text2:'être trouvées ici ou là, mais la majeure',
    }
  ];
  const [scrollPosition, setScrollPosition]= useState(0);


  return (
    <div>
      <section>
      <div className='title-destructured'>
        <h1 style={{margin:'2rem', display:'flex',fontSize:'10rem'}}>Selection</h1>
        <h1 style={{margin:'2rem', display:'flex',fontSize:'10rem'}}> <em>de</em> projets</h1>
      </div>

{/* // La grille avec tous les projets selectionnés */}
       <div className='grid-container-projets' ref={gridContainerRef}>
        {projectsArr.map((project, index) => (

// Le projet 
        <div className='project-wrapper' key={index} style={{marginBottom:'2rem'}}>
          {/* //Div 1 avec l'image */}
          <div className='projectImgContainer'>
            <div className='projectImg' style={{backgroundImage: `url(${projectsArr[index].image})`, backgroundSize: 'cover'}}></div>
            <div className='project-details'>
                <p style={{fontSize:'1.5rem'}}>{projectsArr[index].title}</p>
                  <div className='carousel-btn'><svg></svg></div>
                  <div className='carousel-btn'><svg></svg></div>
            </div>
          </div>
          {/* //Div 2 avec le texte */}
            <div className='project-description' ref={descriptionRef}>
              <h2 className='project-title' style={{fontSize:'8rem', paddingLeft:'3rem'}}>{projectsArr[index].baseline}</h2>
              <p className='project-txt'>{projectsArr[index].text}</p>
              <p className='project-txt'>{projectsArr[index].text2}</p>
               <div className='project-link'>{projectsArr[index].link}</div> {/*hide if no link key/value pair at given index  */}
            </div>  
        </div>
  ))}
  </div>
  </section>

  <section style={{marginTop:'9rem', marginBottom:'13rem'}}>
      <div className='behance'>
        <h4>Plus de projets sur</h4>
        <a target="_blank" rel='noreferrer' href='https://www.behance.net/gallery/161736831/Portfolio-2023-Maria-Lou-Diaz'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg></a>
      </div>

      
  </section>
  <section>
    <div>
        <h3 style={{margin:'2rem', display:'flex',fontSize:'7rem', justifyContent:'center'}}>Auto-entrepreneurs.euses et petites entreprises. </h3>
        <p style={{fontSize:'4rem', margin:'2rem'}}>Ma mission à vos côtés <span role="img" aria-label="cowboy">🤠</span></p>
        <div className='bulles'>
          <p>vous accompagner dans votre aventure.</p>
          <p>simplifier votre parcours</p>
          <p>communiquer simplement</p>
          <p>définir une cible pertinente</p>
          <p>mettre à votre disposition une palette de services</p>
          <p>vous propulser vers le succès</p>
          <p>vous offrir un support complet qui vous ressemble</p>
          <p>vous guider de A à Z</p>
        </div>
      {/* <p style={{fontSize:'2.2em', margin:'.5'}}>  </p> */}
    </div>
  </section>
    </div>
  )
}

export default Projets