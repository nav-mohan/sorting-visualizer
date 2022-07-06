import React from "react";
import generateRandomizedArray from "../../helperFunctions/generateRandomizedArray";

export default function RandomizeButton({
    nBars,
    setArray,
    setColorsArray,
    minBarHeight,
    maxBarHeight
}){
    function randomize(){
        setArray(
            generateRandomizedArray({
                arraySize:nBars,
                minVal:minBarHeight,
                maxVal:maxBarHeight
            })
        )
        setColorsArray(new Array(nBars).fill(0))
    }

    return (
        <button className="randomize-btn" onClick={randomize}>Randomize</button>
        )
}