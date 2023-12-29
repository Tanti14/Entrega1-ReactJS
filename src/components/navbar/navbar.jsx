import React, { useRef, useState, useEffect, useContext } from "react";
import TxtLogo from "../../assets/img/Dulce1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
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
} from "./styles";
import { CartCard } from "../cart_card/cart_card";

export const Navbar = () => {
  /* 0 = Cerrado
     1 = Abierto 
  */

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
      setMenuState(0);
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

  return (
    <HeaderSection>
      <NavContainer>
        <NavImgContainer>
          <NavLink to="/">
            <img src={TxtLogo} alt="" />
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
        <FontAwesomeIcon
          onClick={handleToggleCart}
          ref={refCartBtn}
          className="text-white text-xl"
          icon={faCartShopping}
        />
        <Cart ref={refCart}>
          <CartTitle>
            <h2 className="text-xl text-white font-bold underline">
              Estas llevando:
            </h2>
          </CartTitle>
          <CartItemsContainer>
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
          </CartItemsContainer>
          <CartBtn>
            <button className="bg-slate-500 text-white w-[80%] py-2 rounded-xl">
              Finalizar pedido
            </button>
          </CartBtn>
        </Cart>
      </NavContainer>
    </HeaderSection>
  );
};
