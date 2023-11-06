import React from "react";
import TxtLogo from "../../assets/img/Dulce1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  HeaderSection,
  NavContainer,
  NavBtnContainer,
  MobileNavbar,
} from "./styles";

export const Navbar = () => {
  return (
    <HeaderSection>
      <NavContainer>
        <MobileNavbar>
          <img src={TxtLogo} alt="" />
          <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff"}} />
        </MobileNavbar>
        <NavBtnContainer>
          <a href="#">Inicio</a>
          <a href="#">Poductos</a>
          <img src={TxtLogo} alt="" />
          <a href="#">Box Contents</a>
          <a href="#">Proximamente</a>
        </NavBtnContainer>
      </NavContainer>
    </HeaderSection>
  );
};
