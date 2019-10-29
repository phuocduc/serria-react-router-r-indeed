import React, { useEffect, useState } from "react";
import {
  Row,
  Card,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";

export default function Candidates() {
  const [candidates, setCandidates] = useState([]);
  console.log(candidates.id);
  useEffect(() => {
    const getCandidates = async () => {
      const response = await fetch("http://localhost:3001/candidates");
      const data = await response.json();
      setCandidates(data);
    };
    getCandidates();
  }, []);

    const onDeleteCandidate = (e, id) => {
      e.preventDefault();
      const config = {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      };
      fetch(`http://localhost:3001/candidates/${id}`, config);
      const newCandidates = candidates.filter(candidate => candidate.id !== id);
      setCandidates(newCandidates);
    };

    


  const renderCard = () => {
    return candidates.map(({gender, country,id, email,company,job_title,first_name, last_name, photo_url }) => {
      return (
        <Card className="each-card" key={id}>
          <Card.Img className="img_card" variant="top" src={photo_url} />
          <Card.Body>
            <Card.Title>
              {first_name + " " + last_name}
            </Card.Title>

            <Card.Text>
              {id}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{gender}</ListGroupItem>
            <ListGroupItem>{country}</ListGroupItem>
            <ListGroupItem>{email}</ListGroupItem>
            <ListGroupItem>{company}</ListGroupItem>
            <ListGroupItem>{job_title}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link  href={`/candidate/${id}/edit`}>Edit</Card.Link>
            
            <Card.Link
              onClick={e => onDeleteCandidate(e, id)}
              href={`/candidate/${id}`}
            >
              Delete
            </Card.Link>
          </Card.Body>
        </Card>
      );
    });
  };
  return <Row className="whole_card">{renderCard()}</Row>;
}
