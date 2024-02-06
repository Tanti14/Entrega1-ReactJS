import React, { useRef, useState, useEffect, useContext } from "react";
import TxtLogo from "../../assets/img/Dulce1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import {
  HeaderSection,
  NavContainer,
  NavBtnContainer,
  NavImgContainer,
  MobileNavbarBtn,
  Cart,
  CartItemsContainer,
  CartBtn,
  CartTitle,
  CartBtnContainer,
  NavCartBtn,
  CartDetailsContainer,
  CartDetails,
  CartActionsBtns,
} from "./styles";
import { CartCard } from "../cart_card/cart_card";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/cart/cartSlice";
import { formatPrice } from "../../utils/formatPrice";
import Swal from "sweetalert2";
import { toast } from "sonner";

export const Navbar = () => {
  const navigate = useNavigate();
  const [menuState, setMenuState] = useState(0);
  const [cartState, setCartState] = useState(0);
  const refMenuBtn = useRef(),
    refMenu = useRef();
  const refCartBtn = useRef(),
    refCart = useRef();

  const handleToggleMenu = () => {
    if (menuState === 0) {
      setMenuState((prev) => prev + 1);
      refMenu.current.style.transform = "translate(0)";
    } else {
      setMenuState(0);
      refMenu.current.style.transform = "translate(105%)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY !== 0 && menuState === 1) {
        setMenuState(0);
        refMenu.current.style.transform = "translate(105%)";
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuState]);

  /* ========================================================= */
  const handleToggleCart = () => {
    if (cartState === 0) {
      setCartState((prev) => prev + 1);
      refCart.current.style.transform = "translate(0)";
    } else {
      setCartState(0);
      refCart.current.style.transform = "translate(105%)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY !== 0 && cartState === 1) {
        setCartState(0);
        refCart.current.style.transform = "translate(105%)";
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cartState]);

  /* ========================================================= */

  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const shippingCost = 1200;

  const totalCartItems = useSelector((state) => state.cart.cartItems).reduce(
    (acc, item) => (acc += item.quantity),
    0
  );

  const totalPrice = useSelector((state) => state.cart.cartItems).reduce(
    (acc, item) => (acc += item.precio * item.quantity),
    0
  );

  const vaciarCarrito = () => {
    Swal.fire({
      title: "Desea vaciar el carrito?",
      text: "Esta acción no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ffa500",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, vaciar carrito!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success("Se han eliminado los items del carrito", {
          position: "bottom-left",
        });
        dispatch(clearCart());
        handleToggleCart();
      }
    });
  };

  return (
    <HeaderSection>
      <NavContainer>
        <NavImgContainer>
          <NavLink to="/">
            <img src={TxtLogo} alt="Logo Dulce Maicenita" />
          </NavLink>
        </NavImgContainer>

        <MobileNavbarBtn>
          <FontAwesomeIcon
            onClick={handleToggleMenu}
            ref={refMenuBtn}
            icon={faBars}
            style={{ color: "#ffffff" }}
          />
        </MobileNavbarBtn>

        <NavBtnContainer ref={refMenu}>
          <NavLink
            to="/"
            reloadDocument={true}
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/products"
            reloadDocument={true}
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Productos
          </NavLink>
          <NavLink
            to="/about"
            reloadDocument={true}
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Sobre Nosotros
          </NavLink>
          <NavLink
            to="/contact"
            reloadDocument={true}
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Contacto
          </NavLink>
        </NavBtnContainer>
        <CartBtnContainer onClick={handleToggleCart} ref={refCartBtn}>
          <NavCartBtn>
            <FontAwesomeIcon
              className="text-white text-xl"
              icon={faCartShopping}
            />
            <span>{totalCartItems}</span>
          </NavCartBtn>
        </CartBtnContainer>

        <Cart ref={refCart}>
          <CartTitle>
            <h2 className="text-xl text-white font-bold underline">
              Estas llevando:
            </h2>
          </CartTitle>
          <CartItemsContainer>
            {cartItems.length ? (
              cartItems.map((item) => <CartCard key={item.id} {...item} />)
            ) : (
              <span className="text-white text-2xl">
                El carrito esta vacio!
              </span>
            )}
          </CartItemsContainer>

          <CartDetailsContainer>
            <div className="bg-white border-[1.5px] rounded-md"></div>
            <p>Detalles:</p>
            <CartDetails>
              <p>Subtotal</p>
              <span>{formatPrice(totalPrice)}</span>
            </CartDetails>
            <CartDetails>
              <p>Envio</p>
              <span>
                {cartItems.length ? formatPrice(shippingCost) : formatPrice(0)}
              </span>
            </CartDetails>
            <div className="bg-white border-[1.5px] rounded-md"></div>
            <CartDetails>
              <p>Total</p>
              <span>
                {cartItems.length
                  ? formatPrice(totalPrice + shippingCost)
                  : formatPrice(0)}
              </span>
            </CartDetails>
          </CartDetailsContainer>
          <CartBtn>
            <CartActionsBtns
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => vaciarCarrito()}
              disabled={!cartItems.length}
            >
              Vaciar carrito
            </CartActionsBtns>
            <CartActionsBtns
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                handleToggleCart();
                navigate("/checkout");
              }}
              disabled={!cartItems.length}
            >
              Finalizar pedido
            </CartActionsBtns>
          </CartBtn>
        </Cart>
      </NavContainer>
    </HeaderSection>
  );
};
