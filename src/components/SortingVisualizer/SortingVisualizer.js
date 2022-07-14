import "../../styles/SortingVisualizer.css"


export default function SortingVisualizer({
    nBars, 
    array, 
    colorsArray, 
    windowWidth,
    windowHeight,
    controlBarHeight
}){
    const colorCode = {
        0:'red',
        1:'blue',
        2:'green',
        3:'white'
    }
    const SortingVisualizerDomHeight = windowHeight - controlBarHeight;
    return (
        <div className='bars' style={{'height':SortingVisualizerDomHeight}}>
        {array.map((val,idx)=>(
                <div className='bar' key={idx} style = {{
                    'height':(SortingVisualizerDomHeight/1000)*(val)+"px",
                    'width':windowWidth/nBars+"px",
                    'backgroundColor':colorCode[colorsArray[idx]],
                    'marginTop':windowHeight - (SortingVisualizerDomHeight/1000)*(val)-controlBarHeight+'px'
                }}>
                </div>
            ))}
        </div>
    );
}