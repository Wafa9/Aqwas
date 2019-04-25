import React, { Component } from "react";
import Displaymap from "./displaymap";

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
              <div>
                <p>Name</p>
                {this.state.place.name}
              </div>
              <div>
                <p>Id</p>
                {this.state.place.id}
              </div>
              <div>
                <p>open</p>
                {this.state.place.open}
              </div>
              <div>
                <p>Rating</p>
                {this.state.place.rating}
              </div>

              <img alt="description" src={this.state.place.image[0]} />
              <div>
                <p>Map</p>

                <Displaymap
                  lon={this.state.place.lon}
                  lat={this.state.place.lat}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Place;
