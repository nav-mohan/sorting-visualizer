import React from "react";

export default function AlgorithsDropDown({setAlgorithm}){
    return(
        <select id = "algorithms-dropwdown" onChange={(e)=>{setAlgorithm(e.target.value)}}>
            <option value = 'insertion-sort'>Insertion Sort</option>
            <option value = 'merge-sort'>Merge Sort</option>
        </select>
    )
}
