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
      <h2 className="text-2xl font-bold">CATÁLOGO DE PRODUCTOS</h2>
      <CategoryButtons className="animate__animated animate__fadeInUp">
        {categos.map((catego, i) => (
          <Button
            key={i}
            selected={catego === selectedCategory}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.09 }}
            onClick={() => dispatch(selectCategory(catego))}
          >
            {catego}
          </Button>
        ))}
      </CategoryButtons>
      <StyledProdCards className="animate__animated animate__fadeInUp">
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
