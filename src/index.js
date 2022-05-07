import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    // get geolocation latitude
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat)
      // render error
      return <div>Error: {this.state.errorMessage}</div>;
    if (!this.state.errorMessage && this.state.lat)
      return <SeasonDisplay lat={this.state.lat} />;

    return <div>Loading!</div>; // if latitude and error not initialized
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
