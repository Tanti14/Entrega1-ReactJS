import React from "react";
import contactbg from "../../assets/img/contactus.svg";
import {
  StyledForm,
  StyledFormScreen,
  StyledInput,
  StyledTextArea,
} from "./styles";

export const ContactusScreen = () => {
  return (
    <StyledFormScreen>
      <StyledForm>
        <h2>Formulario de Contacto</h2>
        <StyledInput type="text" name="Name" placeholder="Nombre" />
        <StyledInput type="text" name="LastName" placeholder="Apellido" />
        <StyledInput
          type="email"
          name="Email"
          placeholder="Correo electronico"
        />
        <StyledTextArea
          name="Asunto"
          cols="30"
          rows="10"
          placeholder="Ingresa tu consulta"
        ></StyledTextArea>
        <StyledInput type="submit" name="Enviar" />
      </StyledForm>
      <img src={contactbg} alt="" />
    </StyledFormScreen>
  );
};
