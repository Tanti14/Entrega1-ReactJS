import React, { useRef, useState } from "react";
import TxtLogo from "../../assets/img/Dulce1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  HeaderSection,
  NavContainer,
  NavBtnContainer,
  NavImgContainer,
  MobileNavbarBtn,
} from "./styles";

export const Navbar = () => {
  /* 0 = Cerrado
     1 = Abierto 
  */

  const [menuState, setMenuState] = useState(0);
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

  return (
    <HeaderSection>
      <NavContainer>
        <NavImgContainer>
          <img src={TxtLogo} alt="" />
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
          <a href="#">Inicio</a>
          <a href="#">Poductos</a>
          <a href="#">Box Contents</a>
          <a href="#">Proximamente</a>
        </NavBtnContainer>
      </NavContainer>
    </HeaderSection>
  );
};
