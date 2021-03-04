import Button from "@material-ui/core/Button";
import "./App.css";
import Card from "@material-ui/core/Card";
import Portfolio from "./subpage/Portfolio";
import Thoughts from "./subpage/Thoughts";
import About from "./subpage/About";
import Contact from "./subpage/Contact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import React, { useState, useEffect } from "react";

const App = () => {
  const [frameExpand, setFrameExpand] = useState(false);
  const [tweetFrame, setTweetFrame] = useState(false);
  const [linkNum, setLinkNum] = useState(0);
  const [linkColor1, setLinkColor1] = useState("#2068e9");
  const [linkColor2, setLinkColor2] = useState("#2068e9");
  const [linkColor3, setLinkColor3] = useState("#2068e9");
  const [linkColor4, setLinkColor4] = useState("#2068e9");

  useEffect(() => {
    if (linkNum === 1) {
      setLinkColor1("#21d586");
      setLinkColor2("#2068e9");
      setLinkColor3("#2068e9");
      setLinkColor4("#2068e9");
    } else if (linkNum === 2) {
      setLinkColor1("#2068e9");
      setLinkColor2("#21d586");
      setLinkColor3("#2068e9");
      setLinkColor4("#2068e9");
    } else if (linkNum === 3) {
      setLinkColor1("#2068e9");
      setLinkColor2("#2068e9");
      setLinkColor3("#21d586");
      setLinkColor4("#2068e9");
    } else if (linkNum === 4) {
      setLinkColor1("#2068e9");
      setLinkColor2("#2068e9");
      setLinkColor3("#2068e9");
      setLinkColor4("#21d586");
    } else {
      setLinkColor1("#2068e9");
      setLinkColor2("#2068e9");
      setLinkColor3("#2068e9");
      setLinkColor4("#2068e9");
    }
  }, [linkNum]);
  return (
    <Router>
      <div className="App">
        <Container className="titleFrame">
          <Row>
            <Col className="titleCol" xs={4}>
              <Link
                to="/"
                style={{ textDecoration: "none", color: "#2068E9" }}
                onClick={() => setLinkNum(0)}>
                <div className="bigTitle">WINKLE</div>
                <div className="smallTitle">CAPITAL</div>
              </Link>
            </Col>
            <Col className="titleCol" xs={2}>
              <Link
                to="/portfolio"
                style={{ color: linkColor1, textDecoration: "none" }}
                onClick={() => setLinkNum(1)}>
                <div className="title">PORTFOLIO</div>
              </Link>
            </Col>
            <Col className="titleCol" xs={2}>
              <Link
                to="/thoughts"
                style={{ color: linkColor2, textDecoration: "none" }}
                onClick={() => setLinkNum(2)}>
                <div className="title">THOUGHTS</div>
              </Link>
            </Col>
            <Col className="titleCol" xs={2}>
              <Link
                to="/about"
                style={{ color: linkColor3, textDecoration: "none" }}
                onClick={() => setLinkNum(3)}>
                <div className="title">ABOUT</div>
              </Link>
            </Col>
            <Col className="titleCol" xs={2}>
              <Link
                to="/contact"
                style={{ color: linkColor4, textDecoration: "none" }}
                onClick={() => setLinkNum(4)}>
                <div className="title">CONTACT</div>
              </Link>
            </Col>
          </Row>
        </Container>
        <Route path="/portfolio" component={Portfolio}></Route>
        <Route path="/thoughts" component={Thoughts}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route exact path="/">
          <div className="outFrame">
            <div className="content">
              <Card className="leftFrame">This is first left Part</Card>
              <Card className="leftFrame">This is second left Part</Card>
              <Card className="leftFrame">This is third left Part</Card>
              {!frameExpand ? (
                <Button
                  variant="outlined"
                  style={{
                    border: "1px solid #2068E9",
                    marginTop: "15px",
                    color: "#2068E9",
                  }}
                  onClick={() => setFrameExpand(true)}>
                  View More
                </Button>
              ) : (
                <div>
                  <div className="leftFrame"> This is the hidden left Part</div>
                  <Button
                    variant="outlined"
                    style={{
                      border: "1px solid #2068E9",
                      marginTop: "15px",
                      color: "#2068E9",
                    }}
                    onClick={() => setFrameExpand(false)}>
                    View Less
                  </Button>
                </div>
              )}
            </div>
            <div className="tweet">
              <Card className="rightFrame">This is the first Tweet part</Card>
              {!tweetFrame ? (
                <Button
                  variant="outlined"
                  style={{
                    border: "1px solid #2068E9",
                    marginTop: "15px",
                    color: "#2068E9",
                  }}
                  onClick={() => setTweetFrame(true)}>
                  View More
                </Button>
              ) : (
                <div>
                  <div className="leftFrame">
                    {" "}
                    This is the hidden Tweet Part
                  </div>
                  <Button
                    variant="outlined"
                    style={{
                      border: "1px solid #2068E9",
                      marginTop: "15px",
                      color: "#2068E9",
                    }}
                    onClick={() => setTweetFrame(false)}>
                    View Less
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Route>
      </div>
    </Router>
  );
};

export default App;
