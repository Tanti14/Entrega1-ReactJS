import React from "react";
import { ProductCard } from "../product_card/product_card";
import {
  ProdSectionContainer,
  ProdCardContainer,
  ShowMoreProds,
} from "./styles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ProductsSection = () => {
  const recommended = useSelector((state) => state.recommended.recommended);

  return (
    <ProdSectionContainer>
      <h2 className="text-2xl font-bold">Productos Destacados</h2>
      <ProdCardContainer>
        {recommended.map((prod) => (
          <ProductCard key={"reco" + prod.id} {...prod} />
        ))}
      </ProdCardContainer>
      <ShowMoreProds whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <Link to="/products" reloadDocument={true}>
          VER MÁS PRODUCTOS
        </Link>
      </ShowMoreProds>
    </ProdSectionContainer>
  );
};
