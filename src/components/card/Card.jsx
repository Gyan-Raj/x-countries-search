import React from "react";
import style from "./Card.module.css";

const Card = ({ src, alt, countryName }) => {
  return (
    <>
      <img src={src} alt={alt} className={style.img} />
      <p style={{ textAlign: "center" }}>{countryName}</p>
    </>
  );
};

export default Card;
