import React, { Component } from "react";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import "./App.css";
import Particles from "react-particles-js";

class App extends Component {
  particleOptions = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
    },
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={this.particleOptions} />
        <Navigation></Navigation>
        <Logo></Logo>
        <Rank></Rank>
        <ImageLinkForm></ImageLinkForm>
        {/* <FaceRecognition></FaceRecognition> */}
      </div>
    );
  }
}

export default App;
