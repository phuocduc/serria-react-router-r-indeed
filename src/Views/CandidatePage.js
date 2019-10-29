import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Form, Col, InputGroup, Button } from "react-bootstrap";

export default function CandidatePage() {
  const [validated, setValidated] = useState(false);
  const [candidate, setCandidate] = useState({});

  const { id } = useParams();
  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    const config ={
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(candidate) 
    }
    const response = await fetch(`http://localhost:3001/candidates/` + id, config)
    console.log(response)
    
};

  //   console.log(candidate && candidate)

  useEffect(() => {
    const getCandidateId = async () => {
      const res = await fetch(`http://localhost:3001/candidates/` + id);
      const data = await res.json();
      setCandidate(data);
    };
    getCandidateId();
  }, []);


  

  return (
    <Container>
      <Row>
        <Col>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control

                  required
                  type="text"
                  placeholder="First name"
                  value={candidate.first_name}
                  onChange = {(e)=>setCandidate({...candidate, first_name: e.target.value})}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  value={candidate.last_name}
                  onChange = {(e)=>setCandidate({...candidate, last_name: e.target.value})}

/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup>
                
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    value={candidate.email}
                    onChange = {(e)=>setCandidate({...candidate, email: e.target.value})}

                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
