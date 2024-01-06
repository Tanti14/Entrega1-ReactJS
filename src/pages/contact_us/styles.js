import styled from "styled-components";

export const StyledFormScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 125px;
  background-color: #ffc8dd;
  color: white;
  padding: 30px;
  img {
    width: 50%;
  }

  @media (width <= 992px) {
    max-width: 990px;
    width: 100%;
  }

  @media (width <= 768px) {
    max-width: 765px;
    width: 100%;
  }

  @media (width <= 576px) {
    img {
      display: none;
    }
  }

  @media (width <= 414px) {
    max-width: 410px;
    width: 100%;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  padding: 60px 0;
  gap: 20px;

  @media (width <= 768px) {
    max-width: 765px;
    width: 100%;
  }

  @media (width <= 576px) {
    max-width: 574px;
    width: 100%;
  }

  @media (width <= 414px) {
    max-width: 410px;
    width: 100%;
  }
`;

export const StyledInput = styled.input`
  border: 2px solid #ec38bc;
  width: 70%;
  text-align: center;
  padding: 6px;
  background: transparent;
  border-radius: 15px;
  color: white;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: white;
    text-align: center;
  }

  &[type="submit"] {
    cursor: pointer;
    &:hover {
      background-color: #ec38bc;
      transition: all 0.3s ease-in;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export const StyledTextArea = styled.textarea`
  padding: 10px;
  border: 2px solid #ec38bc;
  width: 70%;
  background: transparent;
  border-radius: 15px;
  resize: none;
  color: white;
  &:focus {
    border: 2px solid green;
    outline: none;
  }
  &::placeholder {
    color: white;
    text-align: center;
  }
`;
