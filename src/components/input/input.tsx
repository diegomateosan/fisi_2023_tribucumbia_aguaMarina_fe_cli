import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import "./input.css";
export const InputDefault : React.FC <{ 
    estado : boolean;
    campo : string;
    cambiarEstado : (text : boolean)=>  void;
    cambiarCampo: (text : string)=>void;
    tipo : string;
    label : string;
    placeholder : string;
    leyendaError : string; 
    expresionRegular :  RegExp;

} > = ({estado,campo, cambiarEstado,cambiarCampo, tipo, label, placeholder, leyendaError, expresionRegular}) =>{
  
	const validacion = () => {
		if(expresionRegular){
			if(expresionRegular.test(campo)){
				cambiarEstado(true); 
			} else {
				cambiarEstado(false); 
			}
		}
	}
    
    const MostrarIcono=()=>{
        if(campo!==""){
            if(estado===true){
                return <FaCheckCircle size={25} className="icon-check" />
               }else{
               return <AiFillCloseCircle size={25} className="icon-error"/>
               }
        }else{
            return <div></div>
        }
        
    }

    const MostrarError=()=>{
        if(campo!==""){
            if(estado===false){
                return (
                    <label>{leyendaError}</label>)
                               }else{<div>  </div>}
                
        }
        
    }

       
    return (
        <div className="app-container-input">
           
            <div className="app-container-input-icon">
                <div className="app-container-input-label">
                <label>{label}</label>
                </div>
                <div className="app-container-inputAndIcon"> 
                    <input
                    type={tipo}
                    placeholder={placeholder} 
                    value={campo}
                    onChange={(event)=>cambiarCampo(event.target.value)}
                    onKeyUp={validacion}
                    onBlur={validacion}
                    />
                    <div className="app-container-icon">
                        {MostrarIcono()}
                    </div>
                   

                </div>
                <div className="app-container-showError"> 
                        {MostrarError()}
                    </div>
            </div>
       
       
        </div>
 
       );

     }




