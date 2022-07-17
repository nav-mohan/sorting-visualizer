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

    switch (algorithm) {
        case 'Insertion':
            return(
                <Button onClick={()=>{insertionSort({array,setArray,setColorsArray,waitTime})}}>
                    Start Insertion Sort
                </Button>
            )
            break;

        case 'Merge':
            return(
                <Button onClick={()=>{mergeSort({array,setArray,setColorsArray,waitTime})}}>
                  Start Merge Sort
                </Button>
            )
            break;

        default:
            return(
                <Button onClick={()=>{insertionSort({array,setArray,setColorsArray,waitTime})}}>
                   Start Insertion Sort {algorithm}
                </Button>
            )
            break;
    }
}