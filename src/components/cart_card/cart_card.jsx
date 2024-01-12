import React from "react";
import {
  CardBtn,
  CardRightSide,
  CartCardBtns,
  CartCardContent,
  CartCardText,
} from "./styles";
import { formatPrice } from "../../utils/formatPrice";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cart/cartSlice";
import Swal from "sweetalert2";

export const CartCard = ({ id, img, title, precio, quantity }) => {
  const dispatch = useDispatch();

  const deleteCartItem = () => {
    if (quantity === 1) {
      Swal.fire({
        title: "Eliminar producto del carrito?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ffa500",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar!",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Producto eliminado",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
          dispatch(removeFromCart(id));
        }
      });
    } else {
      dispatch(removeFromCart(id));
    }
  };
  return (
    <CartCardContent>
      <img src={img} alt="" />
      <CardRightSide>
        <CartCardText>
          <h2>{title}</h2>
          <span>{formatPrice(precio)}</span>
        </CartCardText>
        <CartCardBtns>
          <CardBtn
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.09 }}
            onClick={() => dispatch(addToCart({ id, title, img, precio }))}
          >
            +
          </CardBtn>
          <span>{quantity}</span>
          <CardBtn
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.09 }}
            onClick={() => deleteCartItem()}
          >
            -
          </CardBtn>
        </CartCardBtns>
      </CardRightSide>
    </CartCardContent>
  );
};
