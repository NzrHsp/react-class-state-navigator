import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };
  styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

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

    return (
      <div style={this.styles}>
        <i class="big notched circle loading icon"></i>
      </div>
    ); // if latitude and error not initialized
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
