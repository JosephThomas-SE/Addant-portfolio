import * as React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import { Execution1, Execution2, Execution3, Execution4, Execution5, Execution6, LandingPage, Onboarding, PDP, NavBar, Footer } from './Containers';

import './App.css';

function App() {
  const Object = {height: `77%`, width: `100vw`}
  return (
    <div className="App">
      <div className='header'> <NavBar /> </div>
      <HorizontalScroll reverseScroll={true} style={Object} >
      <div className='main'> <LandingPage /> </div>
      <div className='main'> <PDP /> </div>
      <div className='main'> <Onboarding /> </div>
      <div className='main'> <Execution1 /> </div>
      <div className='main'> <Execution2 /> </div>
      <div className='main'> <Execution3 /> </div>
      <div className='main'> <Execution4 /> </div>
      <div className='main'> <Execution5 /> </div>
      <div className='main'> <Execution6 /> </div>
      </HorizontalScroll>
      <div className='footer'> <Footer /> </div>
    </div>
  );
}

export default App;