import React, { Component } from "react";
import Place from "./place.jsx";
import { Button, Col } from "reactstrap";

class Suggestion extends Component {
  state = { showComponent: false };
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      isButtonDisabled: false
    };
    this.showplace = this.showplace.bind(this);
  }
  showplace() {
    this.setState({
      showComponent: true,
      isButtonDisabled: false
    });
  }
  render() {
    return (
      <div className="main-button">
        <Col sm="12">
          <Button
            color="warning"
            className="bttn"
            disabled={this.state.isButtonDisabled}
            onClick={() => this.showplace()}
          >
            suggestion
          </Button>
        </Col>
        {this.state.showComponent ? <Place /> : null}
      </div>
    );
  }
}

export default Suggestion;
