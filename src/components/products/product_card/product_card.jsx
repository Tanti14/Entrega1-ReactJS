import React from "react";
import { CardItemsContainer, CardImgContainer, CardBlurEffect, CardTxtContainer } from "./styles";

export const ProductCard = ({ title, img, peso }) => {
  return (
    <CardItemsContainer>
      <CardBlurEffect>
        <CardImgContainer>
          <img src={img} alt={title} />
        </CardImgContainer>
        <CardTxtContainer>
          <h3>{title}</h3>
          <span>Peso: {peso}</span>
        </CardTxtContainer>
      </CardBlurEffect>
    </CardItemsContainer>
  );
};
