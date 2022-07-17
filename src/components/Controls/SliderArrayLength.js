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
        <div className="nbar-slider">
            <Form>
                <Form.Group as = {Col}>
                    <Form.Group as ={Row}>
                        <Form.Label>Number of Bars</Form.Label>
                        <Form.Control value={nBars} xs="5"/>
                    </Form.Group>
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
            </Form>
        </div>
        
        )
}