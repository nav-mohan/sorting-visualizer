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
    <div className="App">
      <Home windowWidth={windowWidth} windowHeight={windowHeight}/>
    </div>
  );
}

export default App;
