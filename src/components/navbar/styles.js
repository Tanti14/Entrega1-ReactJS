import styled from "styled-components";

export const HeaderSection = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ec38bc;
  width: 100%;
  height: 125px;

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: #ec38bc;
    width: 40%;
    height: calc(100vh - 124px);
    top: 124px;
    right: 0;
    gap: 60px;
    z-index: 3;

    transform: translate(200%);
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
