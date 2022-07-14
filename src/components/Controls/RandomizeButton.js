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
        <div className="randomize-btn">
            <button onClick={randomize}>
                    Randomize
            </button>
        </div>
        )
}