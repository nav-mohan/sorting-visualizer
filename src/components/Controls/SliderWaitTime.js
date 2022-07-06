import React from "react";

export default function SliderWaitTime({
    minWaitTime,
    maxWaitTime,
    waitTime,
    setWaitTime
}){

    return (
        <input 
            className="waittime-slider" 
            type="range" 
            min = {minWaitTime}
            max = {maxWaitTime}
            value={waitTime} 
            onChange={(e)=>{setWaitTime(e.target.value)}}
        ></input>
    )
}