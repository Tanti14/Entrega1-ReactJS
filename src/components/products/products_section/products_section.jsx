import React from "react";
import { ProductCard } from "../product_card/product_card";
import {
  ProdSectionContainer,
  ProdCardContainer,
  ShowMoreProds,
  ShowMoreProdsBtn,
} from "./styles";
import { useSelector } from "react-redux";

export const ProductsSection = () => {
  const recommended = useSelector((state) => state.recommended.recommended);

  return (
    <ProdSectionContainer>
      <h2>PRODUCTOS DESTACADOS</h2>
      <ProdCardContainer>
        {recommended.map((prod) => (
          <ProductCard key={"reco" + prod.id} {...prod} />
        ))}
      </ProdCardContainer>
      <ShowMoreProds whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <ShowMoreProdsBtn to="/products" reloadDocument={true}>
          VER MÁS PRODUCTOS
        </ShowMoreProdsBtn>
      </ShowMoreProds>
    </ProdSectionContainer>
  );
};
