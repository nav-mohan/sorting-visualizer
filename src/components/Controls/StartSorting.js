import React from "react";

import { insertionSort } from "../../SortingAlgorithms/insertionSort";
import { mergeSort } from "../../SortingAlgorithms/mergeSort";


export default function StartSortingButton({
    algorithm,
    array,
    setArray,
    setColorsArray,
    waitTime
}){
    switch (algorithm) {
        case 'insertion-sort':
            return(
                <button className="start-btn" onClick={()=>{insertionSort({array,setArray,setColorsArray,waitTime})}}>Start</button>
            )
            break;

        case 'merge-sort':
            return(
                <button className="start-btn" onClick={()=>{mergeSort({array,setArray,setColorsArray,waitTime})}}>Start</button>
            )
            break;

        default:
            return(
                <button className="start-btn" onClick={()=>{insertionSort({array,setArray,setColorsArray,waitTime})}}>Start</button>
            )
            break;
    }
}