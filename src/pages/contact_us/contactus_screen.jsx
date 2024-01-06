import React from "react";
import contactbg from "../../assets/img/contactus.svg";
import {
  StyledForm,
  StyledFormScreen,
  StyledInput,
  StyledTextArea,
} from "./styles";
import { useFormik } from "formik";
import { contactSchema, contactInitialValues } from "../../Formik/index.js";
import { useNavigate } from "react-router-dom";

export const ContactusScreen = () => {
  const navigate = useNavigate();
  const { values, handleSubmit, getFieldProps, resetForm, errors } = useFormik({
    validationSchema: contactSchema,
    initialValues: contactInitialValues,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: false,
    onSubmit: (values) => {
      console.log(values);
      resetForm();
      navigate("/");
    },
  });
  return (
    <StyledFormScreen>
      <StyledForm onSubmit={handleSubmit}>
        <h2>Formulario de Contacto</h2>
        <StyledInput
          type="text"
          name="Name"
          {...getFieldProps("name")}
          placeholder="Nombre"
        />
        {errors.name && <span className="text-red-700">{errors.name}</span>}
        <StyledInput
          type="text"
          name="LastName"
          {...getFieldProps("lastname")}
          placeholder="Apellido"
        />
        {errors.lastname && (
          <span className="text-red-700">{errors.lastname}</span>
        )}
        <StyledInput
          type="email"
          name="Email"
          {...getFieldProps("email")}
          placeholder="Correo electronico"
        />
        {errors.email && <span className="text-red-700">{errors.email}</span>}
        <StyledTextArea
          name="Asunto"
          cols="30"
          rows="10"
          {...getFieldProps("consulta")}
          placeholder="Ingresa tu consulta"
        ></StyledTextArea>
        {errors.consulta && (
          <span className="text-red-700">{errors.consulta}</span>
        )}
        <StyledInput
          type="submit"
          name="Enviar"
          disabled={
            !values.name &&
            !values.lastname &&
            !values.email &&
            !values.consulta
          }
        />
      </StyledForm>
      <img src={contactbg} alt="" />
    </StyledFormScreen>
  );
};
