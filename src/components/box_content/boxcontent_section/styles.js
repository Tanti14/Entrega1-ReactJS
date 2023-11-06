import styled from "styled-components";

export const BoxContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fffded;
  padding: 40px 0;
  gap: 60px;

  h2 {
    font-size: 24px;
  }
`;

export const Parrafo = styled.p`
  font-size: 22px;
  text-align: center;
  width: 85%;
`;

export const CardsContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
  width: 100%;
  gap: 50px;
`;
