import LogoTitle from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import './index.scss'


const Home =()=>{
  return(
    <>
    <div className="containerhome-page">
      <div><img src={LogoTitle} alt='logo'/></div>
      <div><Link to='/contact' className='flat-button'>CONTACT ME</Link></div>
    </div>
    <div class="lds-ripple"><div></div><div></div></div>
    </>
  )


  }
export default Home