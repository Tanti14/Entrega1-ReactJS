import React, { useRef, useState, useEffect, useContext } from "react";
import TxtLogo from "../../assets/img/Dulce1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import {
  HeaderSection,
  NavContainer,
  NavBtnContainer,
  NavImgContainer,
  MobileNavbarBtn,
} from "./styles";
import { MenuContext } from "../../context/menuContext";

export const Navbar = () => {
  /* 0 = Cerrado
     1 = Abierto 
  */

     const value = useContext(MenuContext);

  /* const [menuState, setMenuState] = useState(0);
  const refMenuBtn = useRef(),
    refMenu = useRef();

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
  }, [menuState]); */

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
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/products"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Productos
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Sobre Nosotros
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Contacto
          </NavLink>
        </NavBtnContainer>
      </NavContainer>
    </HeaderSection>
  );
};
