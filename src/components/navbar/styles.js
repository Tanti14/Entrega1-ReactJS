import styled from "styled-components";

export const HeaderSection = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ec38bc;
  width: 100%;

  a {
    color: white;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  gap: 50px;
`;

export const NavBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  /* margin-left: 100px; */

  img {
    width: 200px;
  }

  @media (width <= 992px) {
    justify-content: space-between;
  }

  @media (width <= 768px) {
    display: none;
  }

`;

/* Mobile Navbar */
export const MobileNavbar = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  img {
    width: 150px;
  }

  @media (width <= 768px) {
    display: flex;
    width: 90%;
  }

`;
