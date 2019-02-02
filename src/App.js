import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import GameCard from "./components/GameCard";
import Footer from "./components/Footer";
import buildings from "./gameImages.json";

class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    message: "Click an Image to Start",
    gamePieces: buildings,
    clickedItems: [],
    guessStyle: "text-white"
  };

  addClickedItem = id => {
    this.setState(state => {
      const clickedItems = state.clickedItems.concat(id);

      return {
        clickedItems
      };
    });
  };

  handlePieceClick = id => {
    //check to see if this has been clicked before
    if (this.state.clickedItems.includes(id)) {
      //console.log("You clicked this already");
      // Then reset current score to 0, update message, clear out clickedItems
      this.setState({
        currentScore: 0,
        message: "You Guessed Incorrectly",
        clickedItems: [],
        guessStyle: "incorrect"
      });
    } else {
      // push the value to clickecItems array
      this.addClickedItem(id);
      // add 1 to the score and update the message
      this.setState({
        message: "You Guessed Correctly!",
        currentScore: this.state.currentScore + 1,
        guessStyle: "correct"
      });
      //check if current score > top score
      if (this.state.currentScore >= this.state.topScore) {
        this.setState({ topScore: this.state.topScore + 1 });
      }
    }
  };

  render() {
    return (
      <div>
        <Header
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          message={this.state.message}
          guessStyle={this.state.guessStyle}
        />

        <GameBoard>
          {this.state.gamePieces
            .sort(function() {
              return 0.5 - Math.random();
            })
            .map((piece, i) => (
              <GameCard
                key={i}
                id={piece.id}
                name={piece.name}
                image={piece.image}
                handlePieceClick={this.handlePieceClick}
              />
            ))}
        </GameBoard>
        <Footer />
      </div>
    );
  }
}

export default App;
