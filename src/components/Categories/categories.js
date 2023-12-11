import React, { useState} from 'react'
import '../Categories/categories.scss';
import image1 from'../../assets/ivAegilops.jpg';
import image2 from '../../assets/onsight.png';
import image3 from '../../assets/ui.jpg';
import image4 from '../../assets/ui.jpg';
import image5 from'../../assets/topos.jpg';
import image6 from '../../assets/pilepoelerose.jpg';

function categories() {

  const catArr = [
    {
      id: 1,
      image: image1,
      title: 'Identité visuelle',
    },
    {
      id: 2,
      image: image2,
      title: 'Développement web & mobile',
    },
    {
      id: 3,
      image: image3,
      title: 'Expérience utilisateur (UX)',
    },
    {
      id:4,
      image: image4,
      title: 'Design d\'interface (UI)',
    },
    {
      id:5,
      image: image5,
      title: 'Illustration',
    },
    {
      id:6,
      image: image6,
      title: 'Typographie',
    }
  ];
  const words = ['Identité visuelle', 'Site vitrine', 'Application web', 'Application mobile','Typographie', 'Illustration']; // Ajoutez autant de mots que nécessaire

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

export default categories