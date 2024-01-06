import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const { cartItems } = useSelector((state) => state.cart);
  if (!cartItems.length) return <Navigate to="/" replace />;
  return <Outlet />;
};
