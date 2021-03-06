import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { BiMap, BiAperture } from "react-icons/bi";
import { BsFlag } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { CgGenderMale } from "react-icons/cg";
import male from "../../image/male.png";
import female from "../../image/female.png";
import "./LeagueDetails.css";
import SocialIcon from "../SocialIcon/SocialIcon";

const LeagueDetails = () => {
  let { leagueId } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`
    )
      .then((response) => response.json())
      .then((data) => {
        const mainData = data.leagues[0];
        setDetails(mainData);
        setLoading(false);
      });
  }, [leagueId]);
  return (
    <div>
      <div className="header">
        <img src={details.strLogo} alt="logo" className="logo fluid mx-auto" />
      </div>
      <div style={{ backgroundColor: "#0E0A2A" }}>
        <Container>
          <Row>
            <Card
              className="text-white cardDiv p-3 my-3"
              style={{ backgroundColor: "#3A42FF", width: "100%" }}
            >
              {loading ? (
                <h2>Loading...</h2>
              ) : (
                <div className="all-items">
                  <div className="details-container">
                    <h4>{details.strLeague}</h4>
                    <h6>
                      <BiMap />
                      First Event: {details.dateFirstEvent}
                    </h6>
                    <h6>
                      <BsFlag />
                      Country: {details.strCountry}
                    </h6>
                    <h6>
                      <BiAperture /> Sport Type: {details.strSport}
                    </h6>
                    <h6>
                      <CgGenderMale /> Gender: {details.strGender}
                    </h6>
                  </div>
                  <div className="img-container">
                    <img
                      className="img"
                      src={details.strGender === "Male" ? male : female}
                      alt="img"
                    />
                  </div>
                </div>
              )}
            </Card>
          </Row>
          <p className="text-justify description text-white py-3 mb-3">
            {details.strDescriptionEN}
          </p>
          <div>
            <Row className="d-flex justify-content-center py-3">
              <a href="https://facebook.com" target="_blank">
                <SocialIcon icon={AiFillFacebook} />
              </a>
              <a href="https://www.twitter.com/" target="_blank">
                <SocialIcon icon={AiOutlineTwitter} />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <SocialIcon icon={AiFillYoutube} />
              </a>
            </Row>
            <Link to="/home">
              <Button className="d-flex justify-content-center">
                <BsArrowLeft style={{ marginTop: "5px", marginRight: "5px" }} />{" "}
                Back to Home
              </Button>
            </Link>
            <br />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default LeagueDetails;
