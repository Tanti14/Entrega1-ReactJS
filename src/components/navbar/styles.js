import styled from "styled-components";

export const HeaderSection = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ec38bc;
  width: 100%;
  height: 125px;
  position: fixed;
  top: 0;
  z-index: 10;

  a {
    color: white;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0 30px;
  gap: 20px;
  position: relative;
`;

export const NavImgContainer = styled.div`
  width: 20%;
  img {
    width: 200px;
  }
`;

export const NavBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
  gap: 40px;

  @media (width <= 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    background-color: #ec38bc;
    width: 40%;
    padding: 30px 20px;
    top: 98px;
    right: 0;
    gap: 30px;
    z-index: 3;

    transform: translate(105%);
    transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
  }
`;

/* Mobile Navbar */
export const MobileNavbarBtn = styled.div`
  display: none;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  font-size: 26px;

  @media (width <= 768px) {
    display: flex;
    width: 80%;
  }
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #ec38bc;
  width: 40%;
  height: calc(100vh - 125px);
  top: 122px;
  right: 0;
  gap: 60px;
  z-index: 3;
  overflow-y: scroll;
  padding: 20px 40px;

  transform: translate(105%);
  transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
`;

export const CartTitle = styled.div`
  display: flex;
  width: 100%;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CartBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
