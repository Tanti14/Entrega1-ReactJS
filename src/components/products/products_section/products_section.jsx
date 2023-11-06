import React from "react";
import { products } from "../../../data/products";
import { ProductCard } from "../product_card/product_card";
import { ProdSectionContainer, ProdCardContainer } from "./styles";

export const ProductsSection = () => {
  return (
    <ProdSectionContainer>
      <h2>Productos Destacados</h2>
      <ProdCardContainer>
        {
          products.map((prod) => (<ProductCard key={prod.id} {...prod}/>))
        }
      </ProdCardContainer>
    </ProdSectionContainer>
  );
};
