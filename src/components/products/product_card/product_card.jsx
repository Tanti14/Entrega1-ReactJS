import React from "react";
import { CardItemsContainer, CardImgContainer, CardBlurEffect, CardTxtContainer } from "./styles";

export const ProductCard = ({ id, title, img, peso, precio }) => {
  return (
    <CardItemsContainer>
      <CardBlurEffect>
        <CardImgContainer>
          <img src={img} alt={title} />
        </CardImgContainer>
        <CardTxtContainer>
          <h3>{title}</h3>
          <span>Peso: {peso}</span>
          <span>${precio}</span>
        </CardTxtContainer>
        <div>
          <button className="bg-amber-500 px-4 py-1 rounded-md text-white">
            Agregar
          </button>
        </div>
      </CardBlurEffect>
    </CardItemsContainer>
  );
};
