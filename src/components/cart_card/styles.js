import styled from "styled-components";

export const CartCardContent = styled.div`
  display: flex;
  width: 400px;
  height: 150px;
  padding: 10px;
  gap: 10px;
  background-color: #ec38bc;
  border-radius: 16px;
  color: white;

  img {
    width: 130px;
    border-radius: 12px;
  }
`;

export const CardRightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  height: 130px;
`;

export const CartCardText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  h2 {
    font-size: 22px;
    font-weight: 800;
  }
  p {
    overflow: hidden;
  }
`;

export const CartCardBtns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;

  button {
    background-color: rgba(245, 158, 11, 1);
    width: 25px;
    border-radius: 5px;
    border: 1px solid white;
  }
`;
