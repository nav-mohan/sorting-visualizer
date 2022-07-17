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
        0:'#D4E47B',
        1:'#B37BE4',
        2:'#7BE0E4',
        3:'#93E47B'
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