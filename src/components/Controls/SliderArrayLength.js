import React from "react";

export default function SliderArrayLength({
    minArrayLen, 
    maxArrayLen, 
    nBars, 
    setNBars
}){
    return (
        <input 
            className="nbar-slider" 
            type="range" 
            min = {minArrayLen} 
            max = {maxArrayLen}
            value={nBars} 
            onChange={(e)=>{setNBars(e.target.value)}}
        ></input>
        
        )
}