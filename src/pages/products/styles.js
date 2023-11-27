import styled from "styled-components";
import { ProductCard } from "../../components/products/product_card/product_card";

export const StyledProdsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 125px;
  background-color: #ffc8dd;
`;

export const StyledProdCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  flex-wrap: wrap;
  padding: 60px 30px;
  margin-top: 20px;
  gap: 20px;

  @media (width <= 992px) {
    max-width: 900px;
    width: 100%;
  }

  @media (width <= 768px) {
    max-width: 760px;
    width: 100%;
  }

  @media (width <= 576px) {
    max-width: 570px;
    width: 100%;
  }

  @media (width <= 414px) {
    max-width: 380px;
    width: 100%;
  }
`;
