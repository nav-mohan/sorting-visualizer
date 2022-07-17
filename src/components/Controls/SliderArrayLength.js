import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import RangeSlider from "react-bootstrap/FormRange"

export default function SliderArrayLength({
    minArrayLen, 
    maxArrayLen, 
    nBars, 
    setNBars
}){
    return (
        <Form.Group as = {Row}>
            <Form.Label>Number of Bars: {nBars} </Form.Label>
            <Col>
                <RangeSlider
                    min={minArrayLen} 
                    max={maxArrayLen} 
                    value = {nBars} 
                    onChange={(e)=>setNBars(e.target.value)}
                    variant = 'secondary'
                />
            </Col>
        </Form.Group>
        )
}