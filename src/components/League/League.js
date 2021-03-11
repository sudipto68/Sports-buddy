import React from "react";
import "./League.css";
import { Card, Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const League = (props) => {
  const { strLeague, idLeague } = props.league;
  return (
    <div>
      <Card style={{ width: "18rem" }} className=" card my-3 py-3">
        <Card.Body>
          <Card.Title>{strLeague}</Card.Title>
          <Card.Text>Sports Type: Football</Card.Text>
          <Link to={"league/" + idLeague}>
            <Button variant="primary">
              Explore <BsArrowRight />
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default League;
