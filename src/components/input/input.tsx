import React from "react";
import { InputInterface } from "../../entities/inputs";
export const InputDefault : React.FC <{ 
    estado : InputInterface;
     cambiarEstado : (text : InputInterface)=>  void;
    tipo : string;
    label : string;
    placeholder : string;
    name : string;
    leyendaError : string; 
    expresionRegular :  any;

} > = ({estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular}) =>{
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		cambiarEstado({...estado, campo: e.target.value});
	}

	const validacion = () => {
		if(expresionRegular){
			if(expresionRegular.test(estado.campo)){
				cambiarEstado(estado); //  valido: 'true'
			} else {
				cambiarEstado(estado); //valido: 'false'
			}
		}
	}
    
    
       
    return (
        <div></div>
      /*  <div>


        <label htmlFor={name} >{label}</label>
        <div>
            <Input 
                type={tipo}
                placeholder={placeholder} 
                id={name}
                value={estado.campo}
                onChange={onChange}
                onKeyUp={validacion}
                onBlur={validacion}
                valido={estado.valido}
            />
            <IconoValidacion 
                icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
                valido={estado.valido}
            />
        </div>
        <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </div>*/
       );

     }




