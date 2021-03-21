import React from "react";
import {Container, Row, Col} from 'react-bootstrap';

export function Customer(){
 return(
  <Container className="pt-4">
    <div className="text-center"><h1>Our customers</h1></div>
    <Row className=" text-center">
        
        <Col className=" mt-2">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

            <h4>Newlands water</h4>
            <p>"Some representative placeholder content for the three columns of text below the carousel. This is the first column."</p>
        </Col>
        <Col className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

            <h4>Koeburg Powerstaion</h4>
            <p>"Another exciting bit of representative placeholder content. This time, we've moved on to the second column."</p>

        </Col>
        <Col className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
            <h4>Woodlands Municipality</h4>
            <p>And lastly this, the third column of representative placeholder content.</p>
        </Col>
    </Row>
    </Container>
 )
 }