import React from "react";
import Full from "../Full/";
import FullText from "../FullText/";
import FullMini from "../FullMini";
import Navbar from "../Navbar";
import Button from "../Button";
import {Link} from "react-router-dom";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";

function Home() {
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
            <Link class="nav-link" id="nav-active" to="/">Home <span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/login">Login</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/signup">Register</Link>
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

export default Home;
