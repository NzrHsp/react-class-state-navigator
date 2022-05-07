import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = { lat: null, errorMessage: "" };

    // get geolocation latitude
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => this.setState({ errorMessage: err.message })
    );
    console.log(this.state);
  }

  render() {
    if (this.state.errorMessage && !this.state.lat)
      // render error
      return <div>Error: {this.state.errorMessage}</div>;
    if (!this.state.errorMessage && this.state.lat)
      return <div>Latitude: {this.state.lat}</div>; // render latitude

    return <div>Loading!</div>; // if latitude and error not initialized
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
