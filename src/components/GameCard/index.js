import React from "react";
import "./style.css";

export default function GameCard(props) {
  return (
    <div
      className="card d-flex"
      id={props.id}
      onClick={() => props.handlePieceClick(props.id)}
    >
      <img alt={props.name} src={props.image} id={props.id} />
    </div>
  );
}
