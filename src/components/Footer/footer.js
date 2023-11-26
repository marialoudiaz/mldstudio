import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Importez les icônes individuellement
import './footer.scss';
import Logo from '../../assets/logo.png'
const Footer = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'><img src={Logo} alt='logo'/></Link>
    <nav>
        <p>retrouvez-nous sur</p>
        <button className='buttonIn'><a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/maria-lou-diaz-1b7ba8143/'><FontAwesomeIcon className='svgIcon' icon={faLinkedinIn} style={{color: "#444950"}} /></a></button>
        <button className='buttonGh'><a target="_blank" rel='noreferrer' href='https://github.com/marialoudiaz'><FontAwesomeIcon className='svgIcon' icon={faGithub} style={{color: "#444950"}} /></a></button>
        <button className='buttonIs'><a target="_blank" rel='noreferrer' href='https://www.instagram.com/studio_mld/'><FontAwesomeIcon className='svgIcon' icon={faInstagram} style={{color: "#444950"}} /></a></button>
    </nav>
  </div>
)

export default Footer