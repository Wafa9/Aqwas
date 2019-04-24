import React, { Component } from "react";
import Place from "./place.jsx";
import { Button } from "reactstrap";

class Suggestion extends Component {
  state = { showComponent: false };
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      isButtonDisabled: false
      //isOpened: false
    };
    this.showplace = this.showplace.bind(this);
  }
  showplace() {
    this.setState({
      showComponent: true,
      isButtonDisabled: false
      //isOpened: !this.state.isOpened
    });
  }
  render() {
    return (
      <div className="main-button">
        <Button
          color="secondary"
          disabled={this.state.isButtonDisabled}
          onClick={() => this.showplace()}
          className="btn btn-secondary btn-sm"
        >
          suggestion
        </Button>
        {this.state.showComponent ? <Place /> : null}
      </div>
    );
  }
}

export default Suggestion;
