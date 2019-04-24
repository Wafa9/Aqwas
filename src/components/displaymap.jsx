import React, { PureComponent } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class Displaymap extends PureComponent {
  state = {};
  render() {
    return (
      <div className="map-contier">
        <Map google={this.props.google}>
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyARzv8iBxOW3nCBKSdLbvxIIVmqWNyfGfU"
})(Displaymap);
//<div>
//<h1>{this.state.selectedPlace.name}</h1>
//            </div >
