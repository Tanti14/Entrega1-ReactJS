import React, { useEffect, useState } from "react";
import {
  Button,
  CategoryButtons,
  StyledProdCards,
  StyledProdsContainer,
} from "./styles";
import { ProductCard } from "../../components/products/product_card/product_card";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/categories/categoriesSlice";
import "animate.css";

export const ProductsScreen = () => {
  let products = useSelector((state) => state.products.products);
  const categos = useSelector((state) => state.categories.categories);
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );
  const dispatch = useDispatch();

  if (selectedCategory) {
    products = { [selectedCategory]: products[selectedCategory] };
  }

  useEffect(() => {
    dispatch(selectCategory(null));
  }, []);

  return (
    <StyledProdsContainer>
      <h1 className="text-4xl font-bold">CATÁLOGO DE PRODUCTOS</h1>
      <CategoryButtons className="animate__animated animate__fadeInUp">
        <Button
          selected={null === selectedCategory}
          onClick={() => dispatch(selectCategory(null))}
        >
          Todos
        </Button>
        {categos.map((catego, i) => (
          <>
            <Button
              key={i}
              selected={catego === selectedCategory}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.09 }}
              onClick={() => dispatch(selectCategory(catego))}
            >
              {catego}
            </Button>
          </>
        ))}
      </CategoryButtons>
      <StyledProdCards>
        {Object.entries(products).map(([, productos]) =>
          productos.map((prod) => {
            if (selectCategory) {
              return <ProductCard key={prod.id} {...prod} />;
            }
            return <></>;
          })
        )}
      </StyledProdCards>
    </StyledProdsContainer>
  );
};
