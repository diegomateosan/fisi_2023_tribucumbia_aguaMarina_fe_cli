import React, { useState } from "react";


import { Button, ButtonLogin, ButtonRegister} from "../button/button";
import { InputDefault, InputPassword } from "../input/input";
import { FcUndo } from "react-icons/fc";
import { FiCheckSquare, FiSquare } from "react-icons/fi";
import "./form.css";
import { AiOutlineClose } from "react-icons/ai";

export const FormLogin: React.FC<{
  state: boolean;
  handleChange: (text: boolean) => void;

  registerState: boolean;
  handleRegister: (text: boolean) => void;
}> = ({ state, handleChange, registerState, handleRegister }) => {
  const [InputValue, setInputValue] = useState("");
  const [InputState, setInputState] = useState(false);

  const [passwordValue, setPasswordValue] = useState("");
  const [PasswordState, setPasswordState] = useState(false);

  const loginLogic = (password: boolean, email: boolean) => {
    if (password === false) {
      alert("Password no válida");
    }
    if (email === false) {
      alert("Correo no válido");
    }
    if (email === true && password === true) {
      alert("Sesión iniciada con éxito");
      handleChange(false);
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
          leyendaError="Email no valido "
          expresionRegular={/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
        />

        <InputPassword
          estado={PasswordState}
          campo={passwordValue}
          cambiarEstado={(txt: boolean) => setPasswordState(txt)}
          cambiarCampo={(txt: string) => setPasswordValue(txt)}
          label="Contraseña"
          placeholder="Debe contener entre 8 a 20 caracteres"
          leyendaError="Contraseña no válida"
          expresionRegular={/^.{8,25}$/}
        />

        <div className="app-container-label-register">
          <label>¿Aún no tienes una cuenta? </label>
          <p onClick={enterRegister}> Registrate aquí</p>
        </div>
      </div>

      <div className="app-container-button-login">
        <ButtonLogin
          placeholder="INICIAR SESIÓN"
          handleClick={(txt1: boolean, txt2: boolean) => loginLogic(txt1, txt2)}
          password={PasswordState}
          email={InputState}
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



  const RegisterLogic =(name: boolean ,lastname : boolean , dni : boolean, phone: boolean, password: boolean, email: boolean,terminos : boolean)=>{
    if(name===false){
      alert("Nombre no valido")
    }
    if(lastname===false){
      alert("Apellido no valido")
    }
    if(dni===false){
      alert("DNI no valido")
    }
    if(phone===false){
      alert("Celular no valido")
    }
    if(email===false){
      alert("email no valido")
    }

    if(password===false){
      alert("Contraseña no valido")
    }

    if(terminos===false){
      alert("Terminos y condiciones no aceptados")
    }

    if(name ===true && lastname ===true && email ===true && password ===true && phone ===true && dni===true && terminos===true){
      alert("Usuario registrado correctamente")
      handleRegister(false);
      handleChange(true);
    }

  }
  const volverLogin=()=>{
    handleRegister(false);
      handleChange(true);
    
  }

  const volverHome=()=>{
    handleRegister(false);
      handleChange(false);
    
  }

  return (
    <div className="app-container-register">
      <div className="app-container-register-tittleReturn">
        <div className="app-container-register-return">
          <FcUndo
            size={50}
            title="Regresar al login "
            onClick={ volverLogin}
          />
        </div>

        <div className="app-container-register-title">
          <h1>REGISTRARSE</h1>
        </div>
        <div className="app-container-register-exit">
          <AiOutlineClose
            size={50}
            title="Cerrar Registro"
            onClick={ volverHome}
          />
        </div>


      </div>

     

      <div className="app-container-register-form">
        <div className="app-container-nombre-apellido">
          <InputDefault
            estado={nametState}
            campo={nameValue}
            cambiarEstado={(txt: boolean) => setNameState(txt)}
            cambiarCampo={(txt: string) => setNameValue(txt)}
            tipo="text"
            label="Nombres"
            placeholder="Ejemplo : Gustavo Adrián"
            leyendaError="Error: solo debe contener caractéres alfabéticos"
            expresionRegular={/^[a-zA-ZÀ-ÿ\s]{1,40}$/}
          />

          <InputDefault
            estado={lastNameState}
            campo={lastNameValue}
            cambiarEstado={(txt: boolean) => setLastNameState(txt)}
            cambiarCampo={(txt: string) => setLastNameValue(txt)}
            tipo="text"
            label="Apellidos"
            placeholder="Ejemplo : Pazos Medina"
            leyendaError="Error: solo debe contener caractéres alfabéticos"
            expresionRegular={/^[a-zA-ZÀ-ÿ\s]{1,40}$/}
          />
        </div>

        <div className="app-container-email-dni">
          <InputDefault
            estado={emailState}
            campo={emailValue}
            cambiarEstado={(txt: boolean) => setEmailState(txt)}
            cambiarCampo={(txt: string) => setEmailValue(txt)}
            tipo="text"
            label="Correo Electrónico"
            placeholder="Ejemplo : alguien@gmail.com"
            leyendaError="Error: Correo no válido"
            expresionRegular={
              /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            }
          />

          <InputDefault
            estado={dniState}
            campo={dniValue}
            cambiarEstado={(txt: boolean) => setDniState(txt)}
            cambiarCampo={(txt: string) => setDniValue(txt)}
            tipo="text"
            label="DNI"
            placeholder="Debe contener 8 caracteres numéricos"
            leyendaError="Error: DNI no válido"
            expresionRegular={/^\d{8}$/}
          />
        </div>

        <div className="app-container-phone-gender">
          <InputDefault
            estado={phoneState}
            campo={phoneValue}
            cambiarEstado={(txt: boolean) => setPhoneState(txt)}
            cambiarCampo={(txt: string) => setPhoneValue(txt)}
            tipo="text"
            label="Número de celular"
            placeholder="Debe contener 9 caracteres numéricos"
            leyendaError="Error: Número no válido"
            expresionRegular={/^\d{9}$/}
          />
          <div className="app-container-gender">
            <label>Genero</label>
            <select name="Genero">
              <option>Masculino</option> <option>Femenino</option>
            </select>
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
                leyendaError="Contraseña no válida"
                expresionRegular={/^.{8,25}$/}
              />

            </div>

          
          </div> 
          <div className="app-container-register-terminos">
              
              {terminoStatue? (
              <FiCheckSquare size={18} onClick={tooglePasswordVisibility} />
            ) : (
              <FiSquare size={18} onClick={tooglePasswordVisibility} />
            )}
  
                <label>Estoy de acuerdo con las  </label>
                <a href=""> condiciones de uso</a>
                <label> y </label>
                <a href=""> politica de privacidad</a>
                
               </div>
  
  
          <div className="app-container-register-CrearCuenta"> 
            <ButtonRegister 
            name={nametState}
            lastname={lastNameState}
            dni={dniState}
            email={emailState}
            phone={phoneState}
            password={passwordState}
            placeholder="CREAR CUENTA"
            terminos={terminoStatue}
            handleClick={(name: boolean ,lastname : boolean , dni : boolean, phone: boolean, password: boolean, email: boolean,terminos : boolean)=>RegisterLogic(name,lastname,dni,phone,password,email,terminos)}
       
      />
             

        </div>
         


      </div>
    </div>
  );
};
