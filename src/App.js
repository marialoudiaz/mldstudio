import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Animation from './components/Animation';
import Parallax from './components/Parallax';
import Baseline from './components/Baseline';
import Cible from './components/Cible';
import Sidebar from './components/Sidebar';
import Categories from './components/Categories';
import Projects from './components/Projets';
import Showcase from './components/Showcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
