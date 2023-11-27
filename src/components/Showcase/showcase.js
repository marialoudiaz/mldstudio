import React from 'react'
import './showcase.scss'
import Video from '../../assets/showreel.mp4';

function Showcase() {

  return (
    <div className='showcase'>
      <video width='500' height='200' autoPlay loop muted>
        <source src={Video} type='video/mp4' />
      </video>
    </div>
  );
};
export default Showcase