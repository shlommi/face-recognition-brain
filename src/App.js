import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Particles from "react-particles-js";
import Clarifai from "clarifai";

import "./App.css";

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 600
      }
    }
  }
};

const app = new Clarifai.App({
  apiKey: "5014b5152cd0461baa50a4c2225f7f19"
});

class App extends Component {
  state = {
    input: "",
    imageUrl: "",
    box: {},
    route: 'signin',
    isSignedIn: false,
    user: {
      id: '',
      name: '',
      email: '',
      password: '',
      entries: 0,
      joined: ''
    }
  };

  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  createBoxModel = data => {
    const clarifiDetect =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const imageElement = document.getElementById("box-model");
    const width = Number(imageElement.width);
    const height = Number(imageElement.height);
    return {
      leftCol: clarifiDetect.left_col * width,
      topRow: clarifiDetect.top_row * height,
      rightCol: width - (clarifiDetect.right_col * width),
      bottomRow: height - (clarifiDetect.bottom_row * height)
    };
  };

  displayFaceBox = (box) => {
    this.setState({ box: box });
  }

  onButtonSubmit = () => {
    if (this.state.input === '') {
      alert(' please insert url')
    } else {
      this.setState({ imageUrl: this.state.input });
      app.models
        .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
        .then(response => {
          this.displayFaceBox(this.createBoxModel(response));
          if (response) {
            fetch('http://localhost:3001/image', {
              method: 'put',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                id: this.state.user.id
              })
            })
              .then(res => res.json())
              .then(count => {
                this.setState({
                  user: Object.assign(this.state.user, { entries: count }),
                })
              })
          }
        })
        .catch(err => {
          console.log(err);
          alert('bad image, try another');
        });

    }

  };

  handleRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false })
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  render() {
    const { isSignedIn, box, imageUrl, user } = this.state
    return (
      <div className="App">
        <Particles params={particlesOptions} className="particles" />
        <Navigation handleRouteChange={this.handleRouteChange} isSignedIn={isSignedIn} />
        <div>

          <ImageLinkForm
            onButtonSubmit={this.onButtonSubmit}
            onInputChange={this.onInputChange}
          />
          <FaceRecognition box={box} imageUrl={imageUrl} />
        </div>
      </div>
    );
  }
}

export default App;
