import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import League from "../League/League";
import "./HomePage.css";

const HomePage = () => {
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    const api = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        const mainData = data.leagues;
        const leagueData = mainData.slice(0, 12);
        setLeagues(leagueData);
      });
  }, []);
  return (
    <div>
      <div className="header">
        <h1 className="text-center pt-5 text-white">SPORTS BUDDY</h1>
      </div>
      <div style={{ backgroundColor: "#0E0A2A" }}>
        <Container>
          <div className="leagueDiv">
            {leagues.map((league) => (
              <League key={league.idLeague} league={league} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
