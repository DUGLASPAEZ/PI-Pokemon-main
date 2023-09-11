import React from "react";
import { Link } from "react-router-dom";
import '../CardPage/Card.css';

const Card = ({ Pokemons }) => {
  const {name, image, id, types} = Pokemons
  return (

    <Link to={`/detail/${id}`} className= "detail-card">
    <div className= "detail-text">{name}</div>
    <div className= "imagen">
      <img src={image} alt={name} loading="lazy" />
    </div>
    <div className= "detail-text">{types}</div>
  </Link>
  );
};

export default Card;