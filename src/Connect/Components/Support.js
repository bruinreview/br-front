import React, { useState } from "react";
import { Fade } from "react-reveal";
import "./About.css";
import { PayPalButton } from "react-paypal-button-v2";

import Airtable from "airtable";
export default function Support(props) {
  var base = new Airtable({ apiKey: "key80rQbZcgw1Kmez" }).base(
    "appRLtdMJcbBUgDG3"
  );
  const [amount, setAmount] = useState("");
  return (
    <Fade>
      <div className="card">
        <h3 className="title">Subscribe to the Bruin Review</h3>
        <hr />
        <p>
          Subscribe for only $50 annually to receive
          <li>Quarterly print editions of the Review and News in Review</li>
          <li>
            Quarterly update letters from the Editor in Chief and President
          </li>
          <li> Vinyl Bruin Review stickers </li>
        </p>
        <Fade>
          <form>
            <div
              style={{ width: "100%" }}
              className="input flex flex-column"
            ></div>
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
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            {amount == "45" || amount == "50" ? (
              <PayPalButton
                amount={amount}
                style={{ layout: "horizontal" }}
                shippingPreference="GET_FROM_FILE"
                onSuccess={(details, data) => {
                  console.log(data);
                  console.log(details);
                  const address = details.purchase_units[0].shipping.address;
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
                    "Transaction completed by " + details.payer.name.given_name
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
      </div>
    </Fade>
  );
}
