import React, { Component } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-router-dom";
import "./MobileNav.css";
import search from "../resources/icons_search_mobile.png";

export default class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }
  render() {
    let showBar = this.props.showBar;
    return (
      <React.Fragment>
        <div
          style={{
            transform: this.state.menuOpen
              ? "translateY(0)"
              : "translateY(-100%)",
          }}
          className="mobileMenu flex flex-column items-center"
        >
          <Link
            className="no-underline nav pa3"
            style={{ width: "100%" }}
            to="/apply"
          >
            apply
          </Link>
          <Link
            className="no-underline nav pa3"
            style={{ width: "100%" }}
            to="/info"
          >
            info
          </Link>
          <Link
            className="no-underline nav pa3"
            style={{ width: "100%" }}
            to="/print"
          >
            print
          </Link>
          <Link
            className="no-underline nav pa3"
            style={{ width: "100%" }}
            to="/"
          >
            home
          </Link>
        </div>
        <div className="navBar flex flex-row">
          <HamburgerMenu
            isOpen={this.state.menuOpen}
            menuClicked={() => {
              this.setState({ menuOpen: !this.state.menuOpen });
            }}
            width={24}
            height={20}
            strokeWidth={1}
            rotate={0}
            color="white"
            borderRadius={0}
            animationDuration={0.5}
          />
          {showBar ? (
            <div style={{ width: "100%" }} className="flex flex-row">
              <input
                ref={(input) => {
                  this.inputRef = input;
                }}
                className="mobileSearchInput"
                type="text"
                value={this.props.searchVal}
                onChange={this.props.searchChange}
                placeholder="Search"
              />
              <img
                style={{ paddingLeft: "5px", width: "35px", height: "35px" }}
                src={search}
              />
            </div>
          ) : (
            <div />
          )}
        </div>
      </React.Fragment>
    );
  }
}
