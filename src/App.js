import React, { Component } from "react";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";
import "./App.css";
import Particles from "react-particles-js";
import { API_KEY } from "././config";
import Clarifai from "clarifai";

const app = new Clarifai.App({ apiKey: API_KEY });
class App extends Component {
  state = {
    input: "",
    imageUrl: "",
    box: {},
  };

  calculateFaceLocation = data => {};

  handleInputChange = event => {
    this.setState({ input: event.target.value });
  };

  // "c0c0ac362b03416da06ab3fa36fb58e3"

  handleButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.calculateFaceLocation(response))
      .catch(err => console.log(err));
  };

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
        <ImageLinkForm
          onButtonSubmit={this.handleButtonSubmit}
          onInputChange={this.handleInputChange}
        ></ImageLinkForm>
        <FaceRecognition imageUrl={this.state.imageUrl}></FaceRecognition>
      </div>
    );
  }
}

export default App;
