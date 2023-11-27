import React from "react";
import { products } from "../../../data/products";
import { ProductCard } from "../product_card/product_card";
import { ProdSectionContainer, ProdCardContainer } from "./styles";

export const ProductsSection = () => {
  const data = products.slice(0, 3);

  return (
    <ProdSectionContainer>
      <h2>Productos Destacados</h2>
      <ProdCardContainer>
        {data.map((prod) => (
          <ProductCard key={prod.id} {...prod} />
        ))}
      </ProdCardContainer>
    </ProdSectionContainer>
  );
};
