import React, { useState} from 'react'
import '../Categories/categories.scss';
import uno from'../../assets/projets/ivAegilops.jpg';
import dos from '../../assets/projets/onsight.png';
import tres from '../../assets/projets/ui.jpg';
import cuatro from '../../assets/projets/ui.jpg';
import cinco from'../../assets/projets/topos.jpg';
import seis from '../../assets/projets/pilepoelerose.jpg';

function Categories() {

  const catArr = [
    {
      id: 7,
      image: uno,
      title: 'Identité visuelle',
    },
    {
      id: 8,
      image: dos,
      title: 'Développement web & mobile',
    },
    {
      id: 9,
      image: tres,
      title: 'Expérience utilisateur (UX)',
    },
    {
      id:10,
      image: cuatro,
      title: 'Design d\'interface (UI)',
    },
    {
      id:11,
      image: cinco,
      title: 'Illustration',
    },
    {
      id:12,
      image: seis,
      title: 'Typographie',
    }
  ];

  // Une grille d'une colonne avec une div possédant une image
  // Au survol le titre de la catégorie s'affiche

  return (
    <>
      <div className="grid-container">
        {catArr.map(item => (
          <div className='grid-item' style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div key={item.id} className="grid-title"><h3>{item.title}</h3></div>
            <div key={item.id} className="grid-text"><p>{item.description}</p></div>
          </div>
        ))}
      </div>
    </>
  )

}

export default Categories