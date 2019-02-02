import React from "react";
import "./style.css";

function Header(props) {
  return (
    <header className="d-flex justify-content-around align-items-center pb-2 pt-2 bg-dark">
      <h2 className="ml-5 text-white">Memory Game</h2>
      <h2 className={props.guessStyle}>{props.message}</h2>
      <h2 className="text-white mr-5">
        Current Score: {props.currentScore} <br /> Top Score: {props.topScore}
      </h2>
    </header>
  );
}

export default Header;
