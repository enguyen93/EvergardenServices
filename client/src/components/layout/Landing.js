import React from "react";
import Full from "../components/Full/";
import FullText from "../components/FullText/";
import FullMini from "../components/FullMini";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";

function Landing() {
return (
  <div className="homeBody">
    <Navbar />
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
      <a class="navbar-brand" href="/">Evergarden</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" id="nav-active" href="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signup">Register</a>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac
          leo vehicula, congue dolor in, pretium enim. Vivamus nec ultrices
          lacus.
        </FullMini>
        <a href="/signup">
          <Button>Get Started</Button>
        </a>
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

export default Landing;
