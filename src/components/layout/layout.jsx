import React from "react";
import { Navbar } from "../navbar/navbar";
import { FooterSection } from "../footer/footer_section";
import { Toaster } from "sonner";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Toaster />
      <FooterSection />
    </div>
  );
};
