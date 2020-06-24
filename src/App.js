import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Reviewers from './components/Reviewers';
import Organisers from './components/Organisers';
import MediaPartners from './components/MediaPartners';
import CodeOfConduct from './components/CodeOfConduct';
import Contact from './components/Contact';
import Nav from './components/Nav';
import {hot} from 'react-hot-loader';


function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <About/>
      <Organisers/>
      <Reviewers/>
      <MediaPartners/>
      <CodeOfConduct/>
      <Contact/>
    </div>
  );
}

export default process.env.NODE_ENV === "development" ? hot(module)(App) : App;

