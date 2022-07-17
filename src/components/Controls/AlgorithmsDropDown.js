import React from "react";
import { Dropdown,ButtonGroup,DropdownButton } from "react-bootstrap";
export default function AlgorithmsDropDown({algorithm,setAlgorithm}){
    return(
        <DropdownButton 
            as = {ButtonGroup}
            title = {algorithm + " Sort"}
            variant = "warning"
            onSelect={setAlgorithm}
        >
            <Dropdown.Item eventKey="Insertion">Insertion Sort</Dropdown.Item>
            <Dropdown.Item eventKey="Merge">Merge Sort</Dropdown.Item>
        </DropdownButton>
    )
}

