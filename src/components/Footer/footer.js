import {Link} from 'react-router-dom'
import './footer.scss';
import Logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'><img src={Logo} alt='logo'/></Link>
   <div className='footer'>
    <p><FontAwesomeIcon icon="fa-regular fa-circle" style={{color: "#ffa1f5"}} />ACTUELLEMENT SUR MONTPELLIER, FR</p>
    <p>DISPONIBLE POUR DE NOUVEAUX PROJETS</p>
    <p>CONTACT</p>
   </div>
  </div>
)

export default Footer