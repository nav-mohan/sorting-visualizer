import React, { useRef } from "react";
import { useEffect } from 'react';
import generateRandomizedArray from "../../helperFunctions/generateRandomizedArray";
import SliderArrayLength from "./SliderArrayLength";
import SliderWaitTime from "./SliderWaitTime";
import RandomizeButton from "./RandomizeButton";
import AlgorithmsDropDown from "./AlgorithmsDropDown";
import StartSortingButton from "./StartSorting";
import {Container, Stack } from "react-bootstrap";

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
        setControlBarHeight(control_bar_ref.current.clientHeight);
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

    // useEffect(()=>{
    //     console.log(nBars)
    // },[nBars])


    return(
            <Stack className = "mt-4 mb-4 justify-content-center align-items-center"  ref={control_bar_ref} direction="horizontal" gap ={1}>
                <Stack className = "align-items-center justify-content-center" direction="vertical" gap={0}>
                    <SliderWaitTime minWaitTime={30} maxWaitTime={1000} waitTime={waitTime} setWaitTime={setWaitTime}/>
                    <SliderArrayLength minArrayLen={10} maxArrayLen={100} nBars={nBars} setNBars={setNBars}/>
                    <RandomizeButton nBars={nBars} setArray={setArray} setColorsArray={setColorsArray} minBarHeight={5} maxBarHeight={1000}/>
                </Stack>
                <Stack gap={2} className = "align-items-center justify-content-center" direction="vertical">
                    <AlgorithmsDropDown className = "d-flex" algorithm={algorithm} setAlgorithm={setAlgorithm}/>
                    <StartSortingButton algorithm={algorithm} array={array} setArray={setArray} setColorsArray={setColorsArray} waitTime={waitTime}/>
                </Stack>
            </Stack>
    )
}