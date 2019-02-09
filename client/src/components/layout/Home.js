import React from "react";
import Full from "../Full/";
import FullText from "../FullText/";
import FullMini from "../FullMini";
import Navbar from "../Navbar";
import Button from "../Button";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";

function Home() {
return (
  <div className="homeBody">
    <Navbar />
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
