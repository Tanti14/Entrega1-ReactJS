import React from "react";
import {
  CartItems,
  CartItemsDetails,
  CheckoutCartItems,
  CheckoutForm,
  CheckoutScreenContainer,
  CheckoutScreenItems,
  FormContainer,
  InputField,
  StyledInput,
  StyledSubmitBtn,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { CheckCartCard } from "../../components/checkout-cart-card/CheckCartCard";
import { CartDetails } from "../../components/navbar/styles";
import { formatPrice } from "../../utils/formatPrice";
import { Field, useFormik } from "formik";
import { clearCart } from "../../redux/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { checkoutSchema, checkoutInitialValues } from "../../Formik/index.js";
import Swal from "sweetalert2";
import "animate.css";

export const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const shippingCost = 1200;

  const totalPrice = useSelector((state) => state.cart.cartItems).reduce(
    (acc, item) => (acc += item.precio * item.quantity),
    0
  );

  const { values, handleSubmit, getFieldProps, resetForm, errors } = useFormik({
    validationSchema: checkoutSchema,
    initialValues: checkoutInitialValues,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: false,
    onSubmit: (values) => {
      console.log(values);
      Swal.fire({
        position: "top-start",
        icon: "success",
        title: "Pedido realizado con exito",
        text: "Muchas gracias por tu compra",
        showConfirmButton: false,
        timer: 2000,
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

      setTimeout(() => {
        resetForm();
        dispatch(clearCart());
        navigate("/", { replace: true });
      }, 500);
    },
  });

  return (
    <CheckoutScreenContainer>
      <h1 className="text-4xl">FINALIZAR COMPRA</h1>
      <CheckoutScreenItems>
        <FormContainer>
          <h2 className="text-3xl">DATOS DE ENVIO</h2>
          <CheckoutForm noValidate onSubmit={handleSubmit}>
            <InputField>
              <label htmlFor="name">Nombre</label>
              <StyledInput
                type="text"
                name="name"
                placeholder="Ingrese su nombre"
                autoFocus={true}
                {...getFieldProps("name")}
              />
            </InputField>
            {errors.name && <span className="text-red-700">{errors.name}</span>}
            <InputField>
              <label htmlFor="lastname">Apellido</label>
              <StyledInput
                type="text"
                name="lastname"
                placeholder="Ingrese su apellido"
                {...getFieldProps("lastname")}
              />
            </InputField>
            {errors.lastname && (
              <span className="text-red-700">{errors.lastname}</span>
            )}
            <InputField>
              <label htmlFor="prone">Telefono</label>
              <StyledInput
                type="text"
                name="phone"
                placeholder="Ingrese su número de telefono"
                {...getFieldProps("phone")}
              />
            </InputField>
            {errors.phone && (
              <span className="text-red-700">{errors.phone}</span>
            )}
            <InputField>
              <label htmlFor="email">Email</label>
              <StyledInput
                type="email"
                name="email"
                placeholder="Ingrese su email"
                {...getFieldProps("email")}
              />
            </InputField>
            {errors.email && (
              <span className="text-red-700">{errors.email}</span>
            )}
            <InputField>
              <label htmlFor="adress">Dirección</label>
              <StyledInput
                type="text"
                name="adress"
                placeholder="Ingrese su dirección"
                {...getFieldProps("adress")}
              />
            </InputField>
            {errors.adress && (
              <span className="text-red-700">{errors.adress}</span>
            )}
            <StyledSubmitBtn
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
              disabled={
                !values.name &&
                !values.lastname &&
                !values.phone &&
                !values.email &&
                !values.adress
              }
              type="submit"
            >
              Finalizar compra
            </StyledSubmitBtn>
          </CheckoutForm>
        </FormContainer>
        <CheckoutCartItems>
          <h2 className="text-3xl">DETALLE</h2>
          <CartItems>
            {cartItems.map((item) => (
              <CheckCartCard key={item.id} {...item} />
            ))}
          </CartItems>
          <CartItemsDetails>
            <div className="bg-white border-[1.5px] w-full rounded-md"></div>
            <CartDetails>
              <p>Subtotal</p>
              <span>{formatPrice(totalPrice)}</span>
            </CartDetails>
            <CartDetails>
              <p>Envio</p>
              <span>{formatPrice(shippingCost)}</span>
            </CartDetails>
            <div className="bg-white border-[1.5px] w-full rounded-md"></div>
            <CartDetails>
              <p>Total</p>
              <span>{formatPrice(totalPrice + shippingCost)}</span>
            </CartDetails>
          </CartItemsDetails>
        </CheckoutCartItems>
      </CheckoutScreenItems>
    </CheckoutScreenContainer>
  );
};
