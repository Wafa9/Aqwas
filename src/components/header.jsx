import React, { Component } from "react";
import { Col } from "reactstrap";
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="NavBar">
        <Col sm="12">Food&hearts;Love</Col>
      </div>
    );
  }
}

export default Header;
//        <img src={backgroungpic} alt="backgroungpic" />
