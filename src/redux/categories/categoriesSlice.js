import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products.js";

function filtrarCategorias(data) {
  // Crear un conjunto para almacenar categorías únicas
  let categoriasUnicas = new Set();

  // Iterar sobre cada objeto en el array
  data.forEach((objeto) => {
    // Verificar si la propiedad 'categoria' existe y es un string o número
    if (
      "categoria" in objeto &&
      (typeof objeto.categoria === "string" ||
        typeof objeto.categoria === "number")
    ) {
      // Agregar la categoría al conjunto
      categoriasUnicas.add(objeto.categoria);
    }
  });

  // Convertir el conjunto de nuevo a un array si es necesario
  let resultado = Array.from(categoriasUnicas);

  return resultado;
}

const cats = filtrarCategorias(products);

const INITAL_STATE = {
  categories: cats,
  selectedCategory: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITAL_STATE,
  reducers: {
    getCategories: (state) => {
      return state;
    },
    selectCategory: (state, action) => {
      return {
        ...state,
        selectedCategory:
          action.payload !== state.selectedCategory ? action.payload : null,
      };
    },
  },
});

export const { getCategories, selectCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
