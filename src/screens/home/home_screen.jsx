import React from "react";
import { Navbar } from "../../components/navbar/navbar";
import { HeroSection } from "../../components/hero/hero_section";
import { ProductsSection } from "../../components/products/products_section/products_section";
import { BoxcontentSection } from "../../components/box_content/boxcontent_section/boxcontent_section";
import { FooterSection } from "../../components/footer/footer_section";

export const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <BoxcontentSection />
      <FooterSection/>
    </>
  );
};
