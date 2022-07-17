import React from "react";
import {Button } from 'react-bootstrap';

import { insertionSort } from "../../SortingAlgorithms/insertionSort";
import { mergeSort } from "../../SortingAlgorithms/mergeSort";


export default function StartSortingButton({
    algorithm,
    array,
    setArray,
    setColorsArray,
    waitTime
}){
    return(
        <Button
            className = "col-xxl-10 offset-md-2"
            onClick={()=>{
            switch(algorithm){
                case "Insertion":
                    insertionSort({array,setArray,setColorsArray,waitTime})
                    break;
                case "Merge":
                    mergeSort({array,setArray,setColorsArray,waitTime})
                    break
                default:
                    insertionSort({array,setArray,setColorsArray,waitTime})
            }
            }}>
            Start {algorithm} Sort
        </Button>
    )
}