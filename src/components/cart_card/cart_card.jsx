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

export const CartCard = ({ id, img, title, precio, quantity }) => {
  const dispatch = useDispatch();
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
            onClick={() => dispatch(removeFromCart(id))}
          >
            -
          </CardBtn>
        </CartCardBtns>
      </CardRightSide>
    </CartCardContent>
  );
};
