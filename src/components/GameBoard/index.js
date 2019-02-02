import React from "react";
//import "./style.css";

function GameBoard(props) {
  return (
    <div className="container mt-5">
      <div className="d-flex flex-sm-wrap justify-content-center">
        {props.children}
      </div>
    </div>
  );
}

export default GameBoard;
