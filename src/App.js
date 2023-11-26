import React from 'react';
import './App.scss';
import Animation from './components/Animation/animation';
import Parallax from './components/Parallax/parallax';
import Baseline from './components/Baseline/baseline';
import Cible from './components/Cible/cible';
// import Sidebar from './components/Sidebar';
import Categories from './components/Categories/categories';
import Projects from './components/Projets/projets';
import Showcase from './components/Showcase/showcase';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

const App = () => (
  <>
   <div className="scrollable-container">
    <Animation />
    <Parallax />
    <Baseline />
    <Cible />
    <Categories />
    <Projects />
    <Showcase />
    <Contact />
    <Footer />
    </div>
    </>
);

export default App;

// import {Routes,Route} from 'react-router-dom'
// import Layout from './components/Layout'
// import Home from './components/Home'
// import Contact from './components/Contact';
    {/* <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='contact' element={<Contact />}></Route>
      </Route>
    </Routes> */}
