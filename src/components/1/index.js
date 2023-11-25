import Sidebar from '../Sidebar';
import Footer from '../Footer';
import './index.scss';
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return <>
  <div className='App'>
      <Sidebar/>
    <div className='page'>
      <Outlet/>
    </div>
    <Footer />
  </div>
  </>
}

export default Layout