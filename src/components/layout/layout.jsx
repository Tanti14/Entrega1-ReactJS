import React from "react";
import { Navbar } from "../navbar/navbar";
import { FooterSection } from "../footer/footer_section";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <FooterSection />
    </div>
  );
};
