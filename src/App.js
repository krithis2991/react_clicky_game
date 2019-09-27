import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import images from "./images.json";
import "./App.css";

class App extends Component {
  state = {
    images,
    userScore: 0,
    highScore: 0,
    win: true
  };

  shuffleArray(arr) {
    return arr.sort(() => {
      return Math.random() - 0.5;
    });
  }

  isClicked = id => {
    const newArr = this.state.images;
    for (let image of newArr) {
      // console.log(image);
      if (image.id === parseInt(id)) {
        image.clicked = true;
      }
    }

    // console.log("newArr:", newArr)
    this.setState({ images: newArr });
  };

  clickHandler = event => {
    event.preventDefault();
    const { id } = event.target;
    const idInt = parseInt(id);
    const image = this.state.images.filter(img => img.id === idInt).pop();
    console.log("image", image);
    console.log(image.clicked === true);

    if (image.clicked === true) {
      this.setState({ userScore: 0 });
      console.log("You lose!");
      this.setState({
        images: images
      });
    } else {
      this.isClicked(id);
      console.log("else", id);
      const newScore = this.state.userScore + 1;
      this.setState({
        userScore: newScore
      });
      if (newScore > this.state.highScore) {
        this.setState({
          highScore: newScore
        });
      }
    }
    const newArr = this.shuffleArray(images);
    this.setState({ images: newArr });
    // console.log('Image Array:', this.state.images)
  };

  render() {
    return (
      <Wrapper>
        <Header score={this.state.userScore} highScore={this.state.highScore}>
          Clicky Game
        </Header>
        {this.state.images.map(item => (
          <Card
            clickHandler={this.clickHandler}
            clicked={item.clicked}
            id={item.id}
            key={item.id}
            image={item.imgFile}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
