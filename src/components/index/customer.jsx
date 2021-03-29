import React from "react";
import {Container, Row, Col} from 'react-bootstrap';

export function Customer(){
 return(
  <Container className="pt-4">
    <div className="text-center mb-4"><h1>Customers</h1><span className="lead " >Our professional team, core values, and our ethics code give us a competitive advantage. 
</span></div>
    
    <Row className=" text-center">
        
        <Col className=" mt-2">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

            <h4>Woodlands water</h4>
            <p></p>
        </Col>
        <Col className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

            <h4>Koeburg powerplant</h4>
            <p></p>

        </Col>
        <Col className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
            <h4>Square Kilometer Array</h4>
            <p></p>
        </Col>
    </Row>
    </Container>
 )
 }