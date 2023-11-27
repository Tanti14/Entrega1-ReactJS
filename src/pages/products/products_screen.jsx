import React from "react";
import { StyledProdCards, StyledProdsContainer } from "./styles";
import { products } from "../../data/products";
import { ProductCard } from "../../components/products/product_card/product_card";

export const ProductsScreen = () => {
  return (
    <StyledProdsContainer>
      <StyledProdCards>
        {products.map((prod) => (
          <ProductCard key={prod.id} {...prod} />
        ))}
      </StyledProdCards>
    </StyledProdsContainer>
  );
};
