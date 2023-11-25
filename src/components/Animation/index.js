import React from 'react'
import {Link} from 'react-router-dom'
import './index.scss';
import video from '../../assets/animationlogo.mp4'

const Animation = () => (
  <>
    <video className='video' autoPlay loop muted>
      <source src={video} type='video/mp4'/>
    </video> 
  </>
  )

export default Animation
