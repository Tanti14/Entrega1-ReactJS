import styled from "styled-components";
import bg from "../../../assets/img/cards_img/card_bg.png";

export const CardItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 10px;
`;

export const CardImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 280px;
    border-radius: 10px;
  }
`;

export const CardBlurEffect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;

  background: rgba(255, 255, 255, 0.11);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;



export const CardTxtContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  h3{
    font-size: 22px;
    font-weight: 800;
  }
  span{
    font-size: 18px;
    font-weight: 700;
  }
`;
