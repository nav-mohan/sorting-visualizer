import React from "react";
import { Dropdown,ButtonGroup,DropdownButton } from "react-bootstrap";
export default function AlgorithmsDropDown({algorithm,setAlgorithm}){
    return(
        <div id = "algo-dropdown">
            <DropdownButton 
                className = "col-xxl-10 offset-2"
                as = {ButtonGroup}
                title = {algorithm + " Sort"}
                variant = "warning"
                onSelect={setAlgorithm}
            >
                <Dropdown.Item eventKey="Insertion">Insertion Sort</Dropdown.Item>
                <Dropdown.Item eventKey="Merge">Merge Sort</Dropdown.Item>
            </DropdownButton>

        </div>
    )
}

