import {useState } from 'react';
import SortingVisualizer from '../SortingVisualizer/SortingVisualizer';
import Controls from '../Controls/Controls';

function Home({windowWidth,windowHeight}){
  const [isAnimating,setIsAnimating] = useState(false);
  const [nBars,setNBars] = useState(10)
  const [array,setArray] = useState([]);
  const [colorsArray,setColorsArray] = useState([]);
  const [waitTime,setWaitTime] = useState(30);
  const [algorithm,setAlgorithm] = useState('Insertion')
  const [controlBarHeight,setControlBarHeight] = useState(0);

  return (
    <div className="Home">
      
      <Controls
        nBars={nBars} 
        setNBars={setNBars} 
        setArray={setArray} 
        array={array} 
        waitTime={waitTime} 
        setWaitTime={setWaitTime} 
        setColorsArray={setColorsArray} 
        isAnimating = {isAnimating} 
        setIsAnimating={setIsAnimating} 
        algorithm={algorithm} 
        setAlgorithm={setAlgorithm} 
        setControlBarHeight = {setControlBarHeight}
        />

      <SortingVisualizer 
        nBars={nBars} 
        array={array} 
        colorsArray={colorsArray} 
        windowWidth={windowWidth} 
        windowHeight={windowHeight}
        controlBarHeight={controlBarHeight}
        className = "mb-10"
        />
      
    </div>
  );
}

export default Home;