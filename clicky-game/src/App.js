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
    win: true
  };

  changeImageArray = () => {

    let j = 0
    let tempVar = null
    let tempArray = this.state.images;

    for (let i = this.state.images.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      tempVar = tempArray[i]
      tempArray[i] = tempArray[j]
      tempArray[j] = tempVar
    }
    this.setState({ images: tempArray }, () => console.log("hey", this.state.images))

  }

  clickHandler = event => {
    event.preventDefault();
    const clickedID = parseInt(event.target.id);
    const newImages = this.state.images.map(item => {
      if (item.id === clickedID) {

        if (item.clicked === true) {
          alert("You looose");
          this.setState({
            won: false
          })

        }
        else {
          item.clicked = true;
          const newScore = this.state.userScore + 1;
          this.setState({
            userScore: newScore
          })
        }
      }
      return item;
    })
    if (this.state.won === true) {
      this.setState({
        images: newImages
      }, () => {
        console.log(this.state.images)
        this.changeImageArray()
      })

    } else {
      const newGameArr = this.state.imageArr.map(item => item.clicked = false)
      this.setState({
        won: true,
        userScore: 0,
        images: newGameArr
      }, () => this.shufflePictures())
    }

  }

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
        {this.state.images.map(item => (
          <Card
            clickHandler={this.clickCount}
            id={images.id}
            key={images.id}
            image={images.image} />
        ))}
      </Wrapper>
    );
  }
}

export default App;