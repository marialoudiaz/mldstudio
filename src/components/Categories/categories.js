import React, { useState}from 'react'
import './categories.scss';
import image1 from'../../assets/ivAegilops.jpg';
import image2 from '../../assets/onsight.png';
import image3 from '../../assets/ui.jpg';
import image4 from '../../assets/ui.jpg';
import image5 from'../../assets/topos.jpg';
import image6 from '../../assets/pilepoelerose.jpg';

function Categories() {
  const categoriesArr = ['Identité visuelle', 'Développement web & mobile', 'Expérience utilisateur (UX)', 'Design d\'interface (UI)', 'Illustration', 'Typographie'];
  const imagesArr=[image1,image2,image3,image4,image5,image6];
  const hoverTextArr = ['', '', '', '', '', ''];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  

  return (
    <>
      <div className='grid-row'>
        {categoriesArr.map((category, index) => (
          <div
            key={index}
            className={`grid-item ${index === hoveredIndex ? 'hovered' : ''}`} // activer le style au survol pour element E
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={imagesArr[index]} />
            <p>{category}</p>
            <p className='hoverText'>{hoverTextArr[index]}</p> {/* // accèder à l'index correspondant dans l'array imagesArr */}
          </div>
        ))}
      </div>
    </>
  )
}

export default Categories