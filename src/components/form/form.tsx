import React, { useState } from "react";

import { Button, ButtonLogin, ButtonRegister } from "../button/button";
import { InputDefault, InputPassword } from "../input/input";
import { FcUndo } from "react-icons/fc";
import { FiCheckSquare, FiSquare } from "react-icons/fi";
import "./form.css";
import { AiOutlineClose } from "react-icons/ai";
import userService from "../../services/user";
import { useNavigate } from "react-router-dom";

export const FormLogin: React.FC<{
  handleChange: (text: boolean) => void;
  handleRegister: (text: boolean) => void;
  handleauth: () => void;
  handleLogin: () => void;
}> = ({ handleauth, handleChange, handleRegister, handleLogin }) => {
  const [InputValue, setInputValue] = useState("");
  const [InputState, setInputState] = useState(false);

  const [passwordValue, setPasswordValue] = useState("");
  const [PasswordState, setPasswordState] = useState(false);
  const navigate = useNavigate();

  const submitClick = async (emailValue: string, passwordValue: string) => {
    if (emailValue === "" || passwordValue === "") {
      alert("Password o email en blanco");
    } else {
      const result = await userService.loginUser(emailValue, passwordValue);
      if (!result.success) {
        console.log(result);
        alert(result.message);
      } else {
        localStorage.setItem("token", result.data.token);
        alert("Usuario inició sesión correctamente");
        console.log(result);
        handleChange(false);
        handleLogin();
        navigate("/brisasMarinas/Usuario");
      }
    }
  };

  const enterRegister = () => {
    handleChange(false);
    handleRegister(true);
  };

  return (
    <div className="app-container-login">
      <div className="app-container-tittleReturn">
        <div className="app-container-login-return">
          <FcUndo
            size={40}
            title="Cerrar Login"
            onClick={() => handleChange(false)}
          />
        </div>

        <div className="app-container-title">
          <h1>INICIAR SESIÓN</h1>
        </div>
      </div>

      <div className="app-container-form">
        <InputDefault
          estado={InputState}
          campo={InputValue}
          cambiarEstado={(txt: boolean) => setInputState(txt)}
          cambiarCampo={(txt: string) => setInputValue(txt)}
          tipo="text"
          label="Correo Electronico"
          placeholder="Ejemplo : alguien@gmail.com"
          leyendaError="El correo no cuenta con la estructura: alguien@gmail.com"
          expresionRegular={/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
        />

        <InputPassword
          estado={PasswordState}
          campo={passwordValue}
          cambiarEstado={(txt: boolean) => setPasswordState(txt)}
          cambiarCampo={(txt: string) => setPasswordValue(txt)}
          label="Contraseña"
          placeholder="Debe contener entre 8 a 20 caracteres"
          leyendaError="La contraseña debe contener entre 8 a 20 caracteres."
          expresionRegular={/^.{4,25}$/}
        />

        <div className="app-container-label-register">
          <label>¿Aún no tienes una cuenta? </label>
          <p onClick={enterRegister}> Registrate aquí</p>
        </div>
      </div>

      <div className="app-container-button-login">
        <Button
          placeholder="Iniciar Sesión"
          handleClick={() => submitClick(InputValue, passwordValue)}
        />
      </div>
    </div>
  );
};

export const FormRegister: React.FC<{
  state: boolean;
  handleChange: (text: boolean) => void;
  registerState: boolean;
  handleRegister: (text: boolean) => void;
}> = ({ state, handleChange, registerState, handleRegister }) => {
  const [nameValue, setNameValue] = useState("");
  const [nametState, setNameState] = useState(false);

  const [lastNameValue, setLastNameValue] = useState("");
  const [lastNameState, setLastNameState] = useState(false);

  const [gender, setGender] = useState("");
  const [genderState, setGenderState] = useState(true);

  const [emailValue, setEmailValue] = useState("");
  const [emailState, setEmailState] = useState(false);

  const [dniValue, setDniValue] = useState("");
  const [dniState, setDniState] = useState(false);

  const [phoneValue, setPhoneValue] = useState("");
  const [phoneState, setPhoneState] = useState(false);

  const [passwordValue, setPasswordValue] = useState("");
  const [passwordState, setPasswordState] = useState(false);

  const [terminoStatue, seterminosState] = useState(false);

  const tooglePasswordVisibility = () => {
    if (terminoStatue === false) {
      seterminosState(true);
    } else {
      seterminosState(false);
    }
  };

  const eventoGenero = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "Masculino") {
      setGender("M");
    } else {
      setGender("F");
    }
    setGenderState(true);
  };

  const CreateUser = async () => {
    if (
      nametState === true &&
      emailState === true &&
      passwordState === true &&
      genderState === true &&
      phoneState === true &&
      dniState === true
    ) {
      const result = await userService.register(
        nameValue,
        emailValue,
        passwordValue,
        "CLI",
        phoneValue,
        gender,
        dniValue,
        lastNameValue
      );
      console.log(result);
      alert("Registro exitoso");
      handleRegister(false);
      handleChange(true);
    } else {
      alert("campos vacios");
    }
  };

  const volverLogin = () => {
    handleRegister(false);
    handleChange(true);
  };

  const volverHome = () => {
    handleRegister(false);
    handleChange(false);
  };

  return (
    <div className="app-container-register">
      <div className="app-container-register-tittleReturn">
        <div className="app-container-register-return">
          <FcUndo size={50} title="Regresar al login " onClick={volverLogin} />
        </div>

        <div className="app-container-register-title">
          <h1>REGISTRARSE</h1>
        </div>
        <div className="app-container-register-exit">
          <AiOutlineClose
            size={50}
            title="Cerrar Registro"
            onClick={volverHome}
          />
        </div>
      </div>

      <div className="app-container-register-form">
        <div className="app-container-nombre-apellido">
          <div className="nombre-left">
            <InputDefault
              estado={nametState}
              campo={nameValue}
              cambiarEstado={(txt: boolean) => setNameState(txt)}
              cambiarCampo={(txt: string) => setNameValue(txt)}
              tipo="text"
              label="Nombres"
              placeholder="Ejemplo : Gustavo Adrián"
              leyendaError="Error: solo debe contener caracteres alfabéticos"
              expresionRegular={/^[a-zA-ZÀ-ÿ\s]{1,40}$/}
            />
          </div>
          <div className="apellido-right">
            <InputDefault
              estado={lastNameState}
              campo={lastNameValue}
              cambiarEstado={(txt: boolean) => setLastNameState(txt)}
              cambiarCampo={(txt: string) => setLastNameValue(txt)}
              tipo="text"
              label="Apellidos"
              placeholder="Ejemplo : Pazos Medina"
              leyendaError="Error: solo debe contener caracteres alfabéticos"
              expresionRegular={/^[a-zA-ZÀ-ÿ\s]{1,40}$/}
            />
          </div>
        </div>

        <div className="app-container-email-dni">
          <div className="email-left">
            <InputDefault
              estado={emailState}
              campo={emailValue}
              cambiarEstado={(txt: boolean) => setEmailState(txt)}
              cambiarCampo={(txt: string) => setEmailValue(txt)}
              tipo="text"
              label="Correo Electrónico"
              placeholder="Ejemplo : alguien@gmail.com"
              leyendaError="Debe seguir la estructura: alguien@gmail.com"
              expresionRegular={
                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
              }
            />
          </div>
          <div className="dni-right">
            <InputDefault
              estado={dniState}
              campo={dniValue}
              cambiarEstado={(txt: boolean) => setDniState(txt)}
              cambiarCampo={(txt: string) => setDniValue(txt)}
              tipo="text"
              label="DNI"
              placeholder="Debe contener 8 caracteres numéricos"
              leyendaError="Debe contener 8 números"
              expresionRegular={/^\d{8}$/}
            />
          </div>
        </div>

        <div className="app-container-phone-gender">
          <div className="phone-left">
            <InputDefault
              estado={phoneState}
              campo={phoneValue}
              cambiarEstado={(txt: boolean) => setPhoneState(txt)}
              cambiarCampo={(txt: string) => setPhoneValue(txt)}
              tipo="text"
              label="Número de celular"
              placeholder="Debe contener 9 caracteres numéricos"
              leyendaError="Debe contener 9 números"
              expresionRegular={/^\d{9}$/}
            />
          </div>
          <div className="gender-right">
            <label>Genero</label>
            <div className="select-gender">
              <select className="categoria" name="Genero" onChange={eventoGenero}>
                <option>Masculino</option> <option>Femenino</option>
              </select>
            </div>
          </div>
        </div>
        <div className="app-container-register-password">
          <div className="app-container-register-password-Separador">
            <InputPassword
              estado={passwordState}
              campo={passwordValue}
              cambiarEstado={(txt: boolean) => setPasswordState(txt)}
              cambiarCampo={(txt: string) => setPasswordValue(txt)}
              label="Contraseña"
              placeholder="Debe contener entre 8 a 20 caracteres"
              leyendaError="La contraseña debe contener entre 8 a 20 caracteres."
              expresionRegular={/^.{8,25}$/}
            />
          </div>
        </div>
        <div className="app-container-register-terminos">
          {terminoStatue ? (
            <FiCheckSquare size={18} onClick={tooglePasswordVisibility} />
          ) : (
            <FiSquare size={18} onClick={tooglePasswordVisibility} />
          )}

          <label>Estoy de acuerdo con las </label>
          <a href=""> condiciones de uso</a>
          <label> y </label>
          <a href=""> politica de privacidad</a>
        </div>

        <div className="app-container-register-CrearCuenta">
          <Button
            placeholder="Registrar Usuario"
            handleClick={() => CreateUser()}
          />
        </div>
      </div>
    </div>
  );
};

export const FormComprar: React.FC<{}> = ({ }) => {
  const ComprarLogic = (
    name: boolean,
    lastname: boolean,
    dni: boolean,
    phone: boolean,
    password: boolean,
    email: boolean,
    terminos: boolean
  ) => {
    if (name === false) {
      alert("Nombre no valido, revisar el error indicado.");
    }
    if (lastname === false) {
      alert("Apellido no valido, revisar el error indicado.");
    }
    if (dni === false) {
      alert("Número de DNI no valido, revisar el error indicado.");
    }
    if (phone === false) {
      alert("Número de celular no valido, revisar el error indicado.");
    }
    if (email === false) {
      alert("Correo no valido, revisar el error indicado.");
    }

    if (password === false) {
      alert("Contraseña no valida, revisar el error indicado.");
    }

    if (terminos === false) {
      alert(
        "Terminos y condiciones no aceptados, por favor verifique la casilla."
      );
    }

    if (
      name === true &&
      lastname === true &&
      email === true &&
      password === true &&
      phone === true &&
      dni === true &&
      terminos === true
    ) {
      alert("Usuario registrado correctamente");
    }
  };

  return <div></div>;
};
