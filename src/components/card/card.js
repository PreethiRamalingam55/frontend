import React from 'react';
import './card.css';
const CardComponent = ({props}) => {
  return (
    <div className="card">
      <img className="card-image" src={props.image} alt={props.title} />
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
