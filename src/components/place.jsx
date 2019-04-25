import React, { Component } from "react";
import Displaymap from "./displaymap";
import { Container, Col } from "reactstrap";

class Place extends Component {
  state = { loading: true, place: null };
  async componentDidMount() {
    const Xyurl = "https://cors-anywhere.herokuapp.com/";
    const url =
      "https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&g et_param=value";
    const response = await fetch(Xyurl + url);
    const data = await response.json();
    this.setState({ place: data, loading: false });
    console.log(data);
  }

  render() {
    let { Lat, Lon } = this.props;

    return (
      <div>
        <div>
          {this.state.loading || !this.state.place ? (
            <div>loading......</div>
          ) : (
            <div>
              <Container>
                <div className="placeinfo">
                  <Col sm="12">{this.state.place.name}</Col>
                  <Col sm="12">
                    {this.state.place.open == 1 ? <p>Open</p> : <p>Close</p>}
                  </Col>
                  <p className="ratting">Rating</p> {this.state.place.rating}
                </div>
              </Container>

              <Col sm="12">
                <img
                  alt="description"
                  src={this.state.place.image[0]}
                  className="placepic"
                />
              </Col>

              <Displaymap
                lon={this.state.place.lon}
                lat={this.state.place.lat}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Place;
