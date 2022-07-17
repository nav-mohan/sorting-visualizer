import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import RangeSlider from "react-bootstrap/FormRange"

export default function SliderWaitTime({
    minWaitTime,
    maxWaitTime,
    waitTime,
    setWaitTime
}){

    return (
        <div className="waittime-slider">
            <Form>
                <Form.Group as = {Col}>
                    <Form.Label>Wait Time: {waitTime} milli-secs</Form.Label>
                    <Col>
                        <RangeSlider
                            min={minWaitTime} 
                            max={maxWaitTime} 
                            value = {waitTime} 
                            onChange={(e)=>setWaitTime(e.target.value)}
                            variant = 'secondary'
                        />
                    </Col>
                </Form.Group>
            </Form>
        </div>
        
        )
}