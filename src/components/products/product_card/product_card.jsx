import React from "react";
import {
  CardItemsContainer,
  CardImgContainer,
  CardTxtContainer,
  ProdCardBtn,
  CardBtnContainer,
} from "./styles";
import { formatPrice } from "../../../utils/formatPrice";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/cartSlice";
import Swal from "sweetalert2";

export const ProductCard = ({ id, title, img, peso, precio }) => {
  const dispatch = useDispatch();

  const addProdToCart = () => {
    dispatch(addToCart({ id, title, img, peso, precio }));
    Swal.fire({
      position: "top-start",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1000,
      showClass: {
        popup: `
          animate__animated
          animate__fadeInLeft
          animate__lower
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutLeft
          animate__lower
        `,
      },
    });
  };
  return (
    <CardItemsContainer>
      <CardImgContainer>
        <img src={img} alt={title} />
      </CardImgContainer>
      <CardTxtContainer>
        <h3>{title}</h3>
        <span>Peso: {peso}</span>
        <span>{formatPrice(precio)}</span>
      </CardTxtContainer>
      <CardBtnContainer>
        <ProdCardBtn
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 1 }}
          onClick={() => addProdToCart()}
        >
          Agregar al carrito
        </ProdCardBtn>
      </CardBtnContainer>
    </CardItemsContainer>
  );
};
