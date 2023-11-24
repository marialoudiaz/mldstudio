import {Link, NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Importez les icônes individuellement
import '../Sidebar/index.scss';
import Logo from '../../assets/logo.png'
const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'><img src={Logo} alt='logo'/></Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">Home</NavLink>
      <NavLink exact="true" activeclassname="active" className='categories-link' to="/categories">Categories</NavLink>
      <NavLink exact="true" activeclassname="active" className='projects' to="/projects">Projects</NavLink>
      <NavLink exact="true" activeclassname="active" className='contact' to="/contact">Contact</NavLink>
    </nav>
  </div>
)

export default Sidebar