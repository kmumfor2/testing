import React from "react"
import Card from "react-bootstrap/Card"
import kmumfor2 from './me.jpg'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={kmumfor2} />
        <Card.Body>
            <Card.Title>Khadija</Card.Title>
            <Card.Text>
            I am a software engineer student who is learning to test code.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard