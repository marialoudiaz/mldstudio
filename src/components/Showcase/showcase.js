import React from 'react'
import './showcase.scss'

function Showcase() {
  const videoSource = process.env.PUBLIC_URL + '/showreel.mp4';

  return (
    <div className='showcase'>
      showcase
      <video width="500" height="200" autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
  );
};
export default Showcase