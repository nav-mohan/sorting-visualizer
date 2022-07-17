import { useEffect, useState } from 'react';
import Home from './components/HomePage/Home';

import './App.css';

function getWindowDimensions(){
  const {innerWidth:windowWidth,innerHeight:windowHeight} = window;
  return ({windowWidth,windowHeight})
}

function useWindowDimensions(){
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(()=>{
    function handleResize(){setWindowDimensions(getWindowDimensions())}
    window.addEventListener('resize',handleResize);
    return () => window.removeEventListener('resize',handleResize);
  },[])
  return windowDimensions;
}

function App() {
  const {windowWidth,windowHeight} = useWindowDimensions();

  return (
    <div className="App max-vh-90 d-flex justify-content-center align-items-center">
      <Home windowWidth={0.9*windowWidth} windowHeight={0.9*windowHeight}/>
    </div>
  );
}

export default App;
