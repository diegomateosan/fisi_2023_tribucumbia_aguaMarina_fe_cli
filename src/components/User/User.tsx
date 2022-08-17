import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserDefault } from "../../entities/User";
import { User } from "../../pages/user/user";
import userService from "../../services/user";
import { Button } from "../button/button";
import { InputDefault } from "../input/input";
import "./User.css";




export const UserDetails: React.FC<{

  }> = ({  }) => {

    const navigate = useNavigate();  
    
    const [Usuario, setUsuario] = useState<UserDefault>();
    const [gender, setgender] = useState("");

    
    const serviceUsuario = async () => {
        const result = await   userService.showName();
         setUsuario(result.data);
         console.log(result.data);
       
      }; 
  
      const generoCompleto = () => {
        if (Usuario?.gender === "F") setgender("Femenino");
        else setgender("Masculino");
      };
    


    useEffect(() => {
     serviceUsuario();
     generoCompleto();
    }, []);
 




  
    return (
    
            <div className="app-container-category-edit-form">  
                  <label>Nombre:</label>
                <label>{Usuario?.name}</label>
                <br></br>
                <label>Apellido:</label>
                <label>{Usuario?.lastname}</label>
                <br></br>
                <label>Correo</label>
                <label>{Usuario?.email}</label>
                <br></br>
                <label>Numero de celular</label>
                <label>{Usuario?.phone_number}</label>
                <br></br>
                <label>numero de DNI:</label>
                <label>{Usuario?.dni}</label>
                <br></br>
                <label>GENERO:</label>
                <label>{gender}</label>
  
              <div className="button">
              <Button handleClick={()=>navigate("/brisasMarinas/usuario/edit") } 
          
          placeholder={"Editar Información"}              
              ></Button>
              </div>

            </div>


    
    );
  };


  

  export const EditUser: React.FC<{ }> = ({}) => {
    const [Usuario, setUsuario] = useState<UserDefault>();
    const navigate = useNavigate();
    const [id, setid] = useState<number | undefined>();
    const [name, setName] = useState<string | undefined>("");
    const [nameState, setNameState] = useState(true);
    const [email, setemail] = useState<string | undefined>("");
    const [emailState, setemailState] = useState(true);
    const [password, setpassword] = useState <string | undefined>("");
    const [passwordState, setpasswordState] = useState(true);
    const [idRol, setidRol] = useState<string | undefined>("");
    const [idRolState, setidRolState] = useState(true);
    const [lastname, setlastname] = useState<string | undefined>("");
    const [lastnameState, setlastnameState] = useState(true);
    const [phone, setphone] = useState<string | undefined>("");
    const [phoneState, setphoneState] = useState(true);
    const [dni, setdni] = useState<string | undefined>("");
    const [dniState, setdniState] = useState(true);
    const [genero, setgenero] = useState<string | undefined>("");
    const [generoState, setgeneroState] = useState(true);
  


    const serviceUsuario = async () => {
      const result = await   userService.showName();
       setUsuario(result.data);
       console.log(result.data);
    }; 
    
    const getDatos=()=>{

       setName(Usuario?.name);
      setdni(Usuario?.dni);
      setemail(Usuario?.email);
      setidRol(Usuario?.email);    
      setlastname(Usuario?.lastname);
      setpassword(Usuario?.password);
      setgenero(Usuario?.gender);
      setphone(Usuario?.phone_number);
      setid(Usuario?.id);
    }




    useEffect(() => {
      serviceUsuario();
      getDatos();
     }, []);

    
     useEffect(() => {
      getDatos();
     }, [Usuario]);


    const evento = (event: React.ChangeEvent<HTMLSelectElement>) =>{
      if(event.target.value==="Cliente"){
          setidRol("CLI");
          
      }else{
          setidRol("ADM");
      }
      setidRolState(true);
  }
  
  const eventoGenero= (event: React.ChangeEvent<HTMLSelectElement>) =>{
      if(event.target.value==="Masculino"){
          setgenero("M");
          
      }else{
          setgenero("F");
      }
      setgeneroState(true);
  }
  
    const EditUser= async () => {
   
        if (nameState === true && emailState === true && passwordState === true && idRolState===true && generoState===true  && phoneState===true && dniState===true && idRolState===true ) {
  
       
        if(name!==undefined && email!==undefined && phone!==undefined && dni!==undefined && lastname!==undefined && id!==undefined ){
          const result = await  userService.edit(name,lastname,email,dni,phone,id)
          console.log(result);
          alert("Edición exitosa");
          navigate("/brisasMarinas/usuario/details");
        }

        }else{

          alert("campos vacios");
        }
                  
        
      }
      
      
      
   
  
    return (
      <div className="app-container-platillo-create">
        <div className="app-container-platillo-create-form">
          <InputDefault
            estado={nameState}
            campo={name}
            cambiarEstado={(txt: boolean) => setNameState(txt)}
            cambiarCampo={(txt: string) => setName(txt)}
            tipo="text"
            label="Nombre"
            placeholder="Ejemplo: Ceviche Mixto"
            leyendaError="La categoría debe contener como mínimo 6 caracteres"
            expresionRegular={/^.{6,25}$/}
          />
  
          <InputDefault
            estado={lastnameState}
            campo={lastname}
            cambiarEstado={(txt: boolean) => setlastnameState(txt)}
            cambiarCampo={(txt: string) => setlastname(txt)}
            tipo="text"
            label="Apellido"
            placeholder="Ejemplo: Mayhuay"
            leyendaError="La categoría debe contener como mínimo 6 caracteres"
            expresionRegular={/^.{6,25}$/}
          />
  
          
          <InputDefault
              estado={phoneState}
              campo={phone}
              cambiarEstado={(txt: boolean) => setphoneState(txt)}
              cambiarCampo={(txt: string) => setphone(txt)}
              tipo="text"
              label="Número de celular"
              placeholder="Debe contener 9 caracteres numéricos"
              leyendaError="Debe contener 9 números"
              expresionRegular={/^\d{9}$/}
            />    
          
          <InputDefault
              estado={dniState}
              campo={dni}
              cambiarEstado={(txt: boolean) => setdniState(txt)}
              cambiarCampo={(txt: string) => setdni(txt)}
              tipo="text"
              label="Número de DNI"
              placeholder="Debe contener 8 caracteres numéricos"
              leyendaError="Debe contener 8 números"
              expresionRegular={/^\d{8}$/}
            />  
          
          
       
  
  
          <InputDefault
            estado={emailState}
            campo={email}
            cambiarEstado={(txt: boolean) => setemailState(txt)}
            cambiarCampo={(txt: string) => setemail(txt)}
            tipo="text"
            label="Email"
            placeholder="Ejemplo: zzz@example.com"
            leyendaError="Debe seguir el formato"
            expresionRegular={  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
          />
  
         
     
      
          <Button placeholder="Editar" handleClick={()=>EditUser()} />
        </div>
       
            
        
  
      </div>
    );
  };
  
  
  