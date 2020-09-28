import React, { useState, Component } from "react";
import { Fade } from "react-reveal";
import Header from "../Header";
import Footer from "../Footer";
import "./Connect.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import GetInvolved from "./Components/GetInvolved";
import Support from "./Components/Support";
import Zoom from "react-reveal/Zoom";
import MobileNav from "../Components/MobileNav";
import p1 from "../resources/fall.png";
import { PayPalButton } from "react-paypal-button-v2";

import Airtable from "airtable";

export default class Apply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth < 480,
      amount: "",
      hovered: false,
      pptHovered: false,
    };
  }
  resize = (e) => {
    this.setState({
      isMobile: e.target.innerWidth < 480,
    });
  };
  componentDidMount() {
    window.addEventListener("resize", this.resize);
  }
  render() {
    var base = new Airtable({ apiKey: "key80rQbZcgw1Kmez" }).base(
      "appRLtdMJcbBUgDG3"
    );
    if (this.state.isMobile)
      return (
        <div className="flex justify-center home">
          <MobileNav showBar={false} />
          <div className="mobileAbout">
            <h3 className="mobileAboutTitle">Apply to the Bruin Review</h3>
            <hr />
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => {
                console.log(this.state.pptHovered);
                this.setState({ pptHovered: true });
              }}
              onMouseLeave={() => {
                console.log(this.state.pptHovered);
                this.setState({ pptHovered: false });
              }}
            >
              <a
                target="_blank"
                href=" https://elasticbeanstalk-us-west-1-133954069817.s3.us-west-1.amazonaws.com/Fall%202020%20BR%20Recruitment%20.pdf"
              >
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    backgroundSize: "cover",
                    backgroundImage: `url(${p1})`,
                  }}
                />
              </a>
            </div>
            <a
              target="_blank"
              style={{ textDecoration: "none" }}
              href="https://forms.gle/zZmMxBccKw4LNR6Z6"
            >
              <div
                onMouseEnter={(e) => {
                  this.setState({ hovered: true });
                }}
                onMouseLeave={(e) => {
                  this.setState({ hovered: false });
                }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                  alignItems: "center",
                  borderRadius: "7px",
                  width: "100%",
                  height: "40px",
                  backgroundColor: this.state.hovered ? "#61dafb" : "#b3e7fa",
                  textDecoration: "none",
                  color: "black",
                  fontFamily: "freight-sans",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Apply Now
              </div>
            </a>
          </div>
        </div>
      );
    else
      return (
        <div className="flex justify-center home">
          <Header />
          <div className="main flex justify-center">
            <div className="left-col">
              <Fade>
                <div className="card">
                  <h3 className="title">Apply to the Bruin Review</h3>
                  <hr />
                  <div
                    style={{ position: "relative" }}
                    onMouseEnter={() => {
                      console.log(this.state.pptHovered);
                      this.setState({ pptHovered: true });
                    }}
                    onMouseLeave={() => {
                      console.log(this.state.pptHovered);
                      this.setState({ pptHovered: false });
                    }}
                  >
                    <a
                      target="_blank"
                      style={{ textDecoration: "none" }}
                      href=" https://elasticbeanstalk-us-west-1-133954069817.s3.us-west-1.amazonaws.com/Fall%202020%20BR%20Recruitment%20.pdf"
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "400px",
                          backgroundSize: "contain",
                          backgroundImage: `url(${p1})`,
                        }}
                      />
                      {this.state.pptHovered && (
                        <div
                          className="flex justify-center items-center"
                          style={{
                            cursor: "pointer",
                            color: "white",
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(18,18,18,0.8)",
                            fontSize: "25px",
                            position: "absolute",
                            top: "0px",
                          }}
                        >
                          Click to See More
                        </div>
                      )}
                    </a>
                  </div>
                  <a
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    href="https://forms.gle/zZmMxBccKw4LNR6Z6"
                  >
                    <div
                      onMouseEnter={(e) => {
                        this.setState({ hovered: true });
                      }}
                      onMouseLeave={(e) => {
                        this.setState({ hovered: false });
                      }}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "10px",
                        alignItems: "center",
                        borderRadius: "7px",
                        width: "120px",
                        height: "40px",
                        backgroundColor: this.state.hovered
                          ? "#61dafb"
                          : "#b3e7fa",
                        textDecoration: "none",
                        color: "black",
                        fontFamily: "freight-sans",
                        fontWeight: "bold",
                        textDecoration: "none",
                      }}
                    >
                      Apply Now
                    </div>
                  </a>
                </div>
              </Fade>
            </div>
            <div className="right-col"></div>
          </div>
          <Footer />
        </div>
      );
  }
}
