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
import p1 from "../resources/br-about.png";
import { PayPalButton } from "react-paypal-button-v2";

import Airtable from "airtable";

export default class Print extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth < 480,
      amount: "",
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
          <div className="flex flex-column">
            <div className="mobileAbout">
              <div className="pv3 mobileAboutTitle">About the Bruin Review</div>
              <p>
                The University was once a place of eclectic thought – the
                gathering of bright minds to encourage the exchange,
                deliberation, and inspection of ideas. Today, the inverse is
                true. Universities are proxy for a narrow viewpoint that is
                easily predictable and left unquestioned. Ideas are no longer
                submitted as subjects of observation and scrutiny; rather, they
                are endowed to students as delicacies to be defended at any
                cost.
              </p>
              <p>
                The Bruin Review was founded to end this soft treatment of
                ideas. Thought should be forged, not coddled. The University has
                lost its edge as a tool for truth. Instead, it is a cog in the
                wheel of ideology. The Review aims to bring back those tools for
                the scrutiny of thought. To learn is to be curious, and to be
                curious is to question. The Review is here to question.
              </p>
              <p>
                Universities should be less similar to a cultivated garden of
                monolithic ideals and more like a battleground of beliefs.
                Buckle up, because we plan to pick fights where dissension is
                rarely fostered and disputation seldom tolerated. Contention is
                our middle name.
              </p>
              <p>
                The Bruin Review will always push to be on the edge of truth, at
                times nearly falling off. Our goal is to present diverse
                arguments on all applicable topics, transcendent of partisan
                semantics. First and foremost, we are a society of those who
                enjoy civil discourse and pushing the limits of their intellect.
                Second, we are a medium for any responsible message. Our
                publication does not exist to bolster rumors, gossip, or
                pontificate over national politics. We hope to bring forward
                dialogue on issues which affect students’ lives and challenge
                the status quo of ideas. Not through simple debate, but by
                productive and sympathetic discussion of things sparsely
                mentioned.
              </p>
              <h3 className="mobileAboutTitle pt4">
                Subscribe to the Bruin Review
              </h3>
              <hr />
              <p>
                Subscribe for only $50 annually to receive
                <li>
                  Quarterly print editions of the Review and News in Review
                </li>
                <li>
                  Quarterly update letters from the Editor in Chief and
                  President
                </li>
                <li> Vinyl Bruin Review stickers </li>
              </p>
              <Fade when={true}>
                <form>
                  <div
                    style={{ width: "100%" }}
                    className="input flex flex-column"
                  >
                    {/*<select
                style={{
                  border: "none",
                  width: "100",
                  color: "white",
                  backgroundColor: "#191919",
                }}
                value={option}
                placeholder={"Role"}
                onChange={(e) => setOption(e.target.value)}
              >
                <option value="Donate">Donate</option>
                <option value="Subscribe">Subscribe</option>
              </select>
              <div
                style={{
                  width: "100%",
                  paddingTop: "5px",
                  borderBottom: "2px solid white",
                }}
              />*/}
                  </div>
                  <div className="input flex items-center">
                    <div className="ph1">$</div>
                    <input
                      style={{
                        margin: "10px 0 10px 0",
                        background: "#191919",
                        borderStyle: "none none solid none",
                        width: "100%",
                        borderColor: "white",
                        color: "white",
                        padding: "5px 8px",
                      }}
                      type="number"
                      placeholder={"Enter Amount"}
                      value={this.state.amount}
                      onChange={(e) =>
                        this.setState({ amount: e.target.value })
                      }
                    />
                  </div>
                  {this.state.amount == "45" || this.state.amount == "50" ? (
                    <PayPalButton
                      amount={this.state.amount}
                      style={{ layout: "horizontal" }}
                      shippingPreference="GET_FROM_FILE"
                      onSuccess={(details, data) => {
                        console.log(data);
                        console.log(details);
                        const address =
                          details.purchase_units[0].shipping.address;
                        base("Subscriber info").create(
                          [
                            {
                              fields: {
                                Name: `${details.payer.name.given_name} ${details.payer.name.surname}`,
                                Email: details.payer.email_address,
                                "Address Line 1": address.address_line_1,
                                City: address.admin_area_2,
                                State: address.admin_area_1,
                                "Postal Code": address.postal_code,
                                "Country Code": address.country_code,
                              },
                            },
                          ],
                          function (err, records) {
                            if (err) {
                              console.error(err);
                              return;
                            }
                            records.forEach(function (record) {
                              console.log(record.getId());
                            });
                          }
                        );

                        this.setState({
                          showForm: false,
                        });
                        alert(
                          "Transaction completed by " +
                            details.payer.name.given_name
                        );
                      }}
                      options={{
                        clientId:
                          "AbPnzfLhxHRes39vnomvdFEQoUb9bHT5zqA380DVCXoBYMMFGD-e1SAmNBvfaXJ2NWKBgkAgT1Kc-Yse",
                      }}
                    />
                  ) : (
                    <div />
                  )}
                </form>
              </Fade>
              <h3 className="pt5 mobileAboutTitle">Questions?</h3>
              <hr />
              <p>Email management@Bruinreview.com</p>
            </div>
          </div>
        </div>
      );
    else
      return (
        <div className="flex justify-center home">
          <Header />
          <div className="main flex justify-center">
            <div className="left-col">
              <About />
            </div>
            <div className="right-col">
              <Support />
              <GetInvolved />
            </div>
          </div>
          <Footer />
        </div>
      );
  }
}
