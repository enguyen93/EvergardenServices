import React from "react";
import Full from "../Full/";
import FullText from "../FullText/";
import FullMini from "../FullMini";
import Navbar from "../Navbar";
import Button from "../Button";
import { Link } from "react-router-dom";

// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";

function Home() {
return (
  <div className="homeBody">
    <Navbar />
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">Evergarden</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" id="nav-active" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register">Register</a>
          </li>
        </ul>
      </div>
    </nav>
    <Full>
      <div className="textBody">
        <FullText>
          The gift that
          <br /> keeps on giving
        </FullText>
        <FullMini>
          No letter that could be sent deserves to go undelivered.
        </FullMini>
        <Link to="/register">
          <Button>Get Started</Button>
        </Link>
      </div>
      <div className="calenderSVG">
        <img src="https://i.imgur.com/gvjdBwa.png" alt="It's a cool SVG" />
      </div>
      <div className="homeImage" />
      <div className="flowerSVG">
        <img src="https://i.imgur.com/y3yh4g7.png" alt="It's a flower" />
      </div>
    </Full>
  </div>
);
}

export default Home;
