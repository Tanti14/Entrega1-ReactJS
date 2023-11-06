import React from "react";
import { HeroSectionContainer, HeroGlassmorphism, ImgContainer, HeroTextContainer } from "./styles";
import Logo from "../../assets/img/DulceLogo-transformed.png";

export const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <HeroGlassmorphism>
        <ImgContainer>
          <img src={Logo} alt="" />
        </ImgContainer>
        <HeroTextContainer>
          <h1>Dulce Maicenita</h1>
          <p>
            "Donde la magia se combina con los
            sabores. Explora un universo de golosinas que despiertan tus
            sentidos. Descubre la dulzura en cada bocado. ¡Bienvenido a un mundo
            de delicias!"
          </p>
        </HeroTextContainer>
      </HeroGlassmorphism>
    </HeroSectionContainer>
  );
};
