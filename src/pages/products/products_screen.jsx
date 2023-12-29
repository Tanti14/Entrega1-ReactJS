import React from "react";
import { StyledProdCards, StyledProdsContainer } from "./styles";
import { products } from "../../data/products";
import { Products } from "../../data/products";
import { ProductCard } from "../../components/products/product_card/product_card";

export const ProductsScreen = () => {
  return (
    <StyledProdsContainer>
      <h2 className="text-2xl font-bold">CATÁLOGO DE PRODUCTOS</h2>
      <div className="flex justify-center items-center w-full gap-8 py-8">
        <button className="bg-amber-500 px-4 py-1 rounded-xl border-slate-950 border-solid border-2">
          KILOS
        </button>
        <button className="bg-amber-500 px-4 py-1 rounded-xl border-slate-950 border-solid border-2">
          PICADAS
        </button>
        <button className="bg-amber-500 px-4 py-1 rounded-xl border-slate-950 border-solid border-2">
          POTES
        </button>
      </div>
      <StyledProdCards>
        {
          Object.entries(Products).map(([, productos]) =>
            productos.map((prod) => <ProductCard key={prod.id} {...prod} />)
          )

          /* products.map((prod) => (
          <ProductCard key={prod.id} {...prod} />
        )) */
        }
      </StyledProdCards>
    </StyledProdsContainer>
  );
};
