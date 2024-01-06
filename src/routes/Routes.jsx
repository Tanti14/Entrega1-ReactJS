import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Layout } from "../components/layout/layout";
import { HomeScreen } from "../pages/home/home_screen";
import { ProductsScreen } from "../pages/products/products_screen";
import { AboutusScreen } from "../pages/about_us/aboutus_screen";
import { ContactusScreen } from "../pages/contact_us/contactus_screen";
import { Checkout } from "../pages/checkout/checkout";
import { ProtectedRoute } from "../ProtectedRoute";

export const RoutesDef = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route>
            <Route path="/" index element={<HomeScreen />} />
            <Route path="/inicio" element={<HomeScreen />} />
          </Route>
          <Route path="/products" element={<ProductsScreen />} />
          <Route path="/about" element={<AboutusScreen />} />
          <Route path="/contact" element={<ContactusScreen />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
