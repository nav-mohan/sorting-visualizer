import React, { useRef } from "react";
import { useEffect, useState } from 'react';
import generateRandomizedArray from "../../helperFunctions/generateRandomizedArray";
import SliderArrayLength from "./SliderArrayLength";
import SliderWaitTime from "./SliderWaitTime";
import RandomizeButton from "./RandomizeButton";

import "./Controls.css"
import AlgorithsDropDown from "./AlgorithmsDropDown";
import StartSortingButton from "./StartSorting";

export default function Controls({
    nBars,
    setNBars,
    array,
    setArray,
    waitTime,
    setWaitTime,
    setColorsArray,
    algorithm,
    setAlgorithm,
    setControlBarHeight
}){

    const control_bar_ref = useRef(null);
    useEffect(()=>{
        setControlBarHeight(control_bar_ref.current.clientHeight)
    },[])
   
    useEffect(()=>{
        setArray(
            generateRandomizedArray({
                arraySize:nBars,
                minVal:5,
                maxVal:1000
            })
        )
    },[nBars])


    return(
        <div className="controls" ref={control_bar_ref} >
            <SliderWaitTime minWaitTime={30} maxWaitTime={1000} waitTime={waitTime} setWaitTime={setWaitTime}/>
            <SliderArrayLength minArrayLen={10} maxArrayLen={100} nBars={nBars} setNBars={setNBars}/>
            <RandomizeButton nBars={nBars} setArray={setArray} setColorsArray={setColorsArray} minBarHeight={5} maxBarHeight={1000}/>
            <AlgorithsDropDown algorithm={algorithm} setAlgorithm={setAlgorithm}/>
            <StartSortingButton algorithm={algorithm} array={array} setArray={setArray} setColorsArray={setColorsArray} waitTime={waitTime}/>
        </div>
    )
}