import React from 'react';
import {useRef, useState, useEffect} from 'react';
import './projets.scss';
import image1 from '../../assets/logomj.png';
import image2 from '../../assets/onsight.png';
import image3 from '../../assets/pilepoele.png';
import image4 from '../../assets/cdvmono.jpg';
import image5 from '../../assets/topos.jpg';
import image6 from '../../assets/persona_poster.jpg';

function Projets() {
    
  const projectsArr = [
    {
      id: 1,
      image: image1,
      title: 'Matchjobs',
      baseline: 'A new era of recruitement',
      text:'blabla',
      link: 'matchjobs.com',

    },
    {
      id: 2,
      image: image2,
      title: 'Onsight',
      baseline: 'A retro app to keep your movies, on sight',
      text:'blabla',
      link: 'onsight.com',
    },
    {
      id: 3,
      image: image3,
      title: 'Pile-Poële',
      baseline: 'Une fonte culinario-inclusive',
      text:'blabla',
      link: 'pilepoele.com',
    },
    {
      id: 4,
      image: image4,
      title: 'Monogrammes',
      baseline: 'Une sélection d\'identités',
      text:'blabla',
    },
    {
      id: 5,
      image: image5,
      title: 'Topographies',
      baseline: 'Dessiner la ville par ses ornements, une sélection de fusains',
      text:'blabla',
    },
    {
      id: 6,
      image: image6,
      title: 'Posters',
      baseline: 'Une sélection de mes amours cinématographiques',
      text:'blabla',
    }
  ];

  const [scrollPosition, setScrollPosition]= useState(0);
  const gridContainerRef = useRef(null);

  // useEffect(()=>{
  //   if (gridContainerRef.current){
  //     gridContainerRef.current.scrollLeft = scrollPosition;
  //   }
  // }, [scrollPosition])

  // const handleScroll = (direction)=>{
  //   const scrollAmount =200;
  //     if (direction ==='left'){
  //       setScrollPosition((prevPosition)=> prevPosition - scrollAmount)
  //     } else{
  //       setScrollPosition((prevPosition)=> prevPosition + scrollAmount)
  //     }
  // };

  // grid-container

  // map function de l'array de projets
  // project-wrapper
  // project-img
  // project-description
   // project-title
   // project-txt
   // project-link (if link => display)

  return (
    <div>
       <div className='grid-container' ref={gridContainerRef}>
        {projectsArr.map((project, index) => (

        <div className='project-wrapper' key={index}>
            
            <div className='projectImg'>
              <img src={projectsArr[index].image}/>
            </div>

            <div className='project-description'>
              <div className='project-title'><h2>{projectsArr[index].title}</h2></div>
              <div className='project-txt'><p>{projectsArr[index].text}</p></div>
               <div className='project link'></div> {/*hide if no link key/value pair at given index  */}
            </div>

            <div className='carousel-btn'>
              <div className='carousel-btn-left'><svg></svg></div>
              <div className='carousel-btn-right'><svg></svg></div>
            </div>
        </div>
  ))}
  </div>
<div className='scroll-buttons'> 
    <button>Scroll Gauche</button> {/*onClick={handleScroll('left')}*/}
    <button>Scroll Droite</button> {/*onClick={handleScroll('right')}*/}
  </div>
      <div className='behance'>
        <h4>Plus de projets sur<a target="_blank" rel='noreferrer' href='https://www.behance.net/gallery/161736831/Portfolio-2023-Maria-Lou-Diaz'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg></a></h4>
      </div>
    </div>
  )
}

export default Projets