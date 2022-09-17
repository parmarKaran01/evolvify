import React from "react";
import "./Item.css";
function Item({ src, name, description, link }) {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__front">
          <img src={src} alt="" className="image" />
        </div>
        <div className="card__back">
          <h1>{name}</h1>
          <p>{description}</p>
          <a href={link}>Visit Brand</a>
        </div>
      </div>
    </div>
  );
}

export default Item;
