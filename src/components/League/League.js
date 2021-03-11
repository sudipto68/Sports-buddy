import React, { useEffect, useState } from "react";
import "./League.css";
import { Card, Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const League = (props) => {
  const { strLeague, idLeague } = props.league;
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
    )
      .then((response) => response.json())
      .then((data) => {
        const Data = data.leagues[0];
        setData(Data);
      });
  }, [idLeague]);
  return (
    <div>
      <Card style={{ width: "18rem" }} className=" card my-3 py-3">
        <Card.Body>
          <Card.Img
            variant="top"
            src={data.strBadge}
            className="card-img mb-1"
          />
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
