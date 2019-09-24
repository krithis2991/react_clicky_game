import React from 'react';
import FriendList from './components/FriendList/FriendList';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import friends from "./images.json";



class App extends React.Component {
  state = {
    friends,
    currentScore: 0,
    highScore: 0
  }


  increaseScore = () => {
    if (this.state.currentScore > this.state.highScore) {
      this.setState({ highScore: this.state.currentScore }, function () {
        console.log(this.state.highScore);
      });
    }

    this.state.friends.forEach(friend => {
      friend.count = 0;
    });

    alert(`Game Over :( \nscore : {this.state.currentScore}`);
    this.setState({ currentScore: 0 });
    return true;
  }

  friendCount = id => {
    this.state.friends.find((o, i) => {
      if (o.id === id) {
        if (friends[i].count === 0) {
          friends[i].count = friends[i].count + 1;
          this.setState({ currentScore: this.state.currentScore + 1 }, function () {
            console.log(this.state.currentScore);
          });
          this.state.friends.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.increaseScore();
        }
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Header currentScore={this.state.currentScore} highScore={this.score.highScore}> Clicky Game! </Header>
        {this.state.friends.map(friend => (
          <FriendList
            friendCount={this.friendCount}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
      //       <p>Current Score: <span>{this.state.currentScore}</span></p>
      //       <p>Your High Score: <span>{this.state.highScore}</span></p>
      //     </div>
      //   </div>
      // </header>
      //   <main>
      //     <FriendList images={images} increaseScore={this.increaseScore} resetScore={this.resetScore} />
      //   </main>
      // </div>
    );
  }
}

export default App;
