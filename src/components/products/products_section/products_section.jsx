import React from "react";
import { products } from "../../../data/products";
import { ProductCard } from "../product_card/product_card";
import { ProdSectionContainer, ProdCardContainer } from "./styles";
import { Link } from "react-router-dom";

export const ProductsSection = () => {
  const data = products.slice(0, 3);

  return (
    <ProdSectionContainer>
      <h2 className="text-2xl font-bold">Productos Destacados</h2>
      <ProdCardContainer>
        {data.map((prod) => (
          <ProductCard key={prod.id} {...prod} />
        ))}
      </ProdCardContainer>
      <Link
        to="/products"
        reloadDocument={true}
        className="text-lg bg-orange-600 rounded-md px-4 py-1 text-white"
      >
        VER MAS PRODUCTOS
      </Link>
    </ProdSectionContainer>
  );
};
