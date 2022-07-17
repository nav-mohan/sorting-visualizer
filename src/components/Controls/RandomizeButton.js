import React from "react";
import generateRandomizedArray from "../../helperFunctions/generateRandomizedArray";
import {Button } from 'react-bootstrap';

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
            <Button variant = "danger" onClick={randomize}>Randomize</Button>
        </div>
        )
}