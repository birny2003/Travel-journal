import React from "react";

export default function Destination(props) {
  return (
    <div>
      <img
        src={`../images/${props.item.locationImg}`}
        className="location--image"
      ></img>
      <h1>{props.item.title}</h1>
      <h2>{props.item.location}</h2>
      <div className="location--stats">
        <p>{props.item.description}</p>
        <p className="Bold">{props.item.season} </p>
        <p className="Bold"> {props.item.rating}</p>
      </div>
    </div>
  );
}
