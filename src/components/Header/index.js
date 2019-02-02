import React from "react";

function Header(props) {
  return (
    <header className="d-flex justify-content-around align-items-center pb-2 pt-2 bg-dark">
      <span className="h2 ml-5 text-white">Memory Game</span>
      <span className="h2 text-white">{props.message}</span>
      <span className="h2 text-white mr-5">
        Current Score: {props.currentScore} <br /> Top Score: {props.topScore}
      </span>
    </header>
  );
}

export default Header;
