import React, { useEffect, useState } from "react";
import { NavBarDefault } from "../../components/navBar/navBar";
import { ComprarHeader } from "../../components/header/header";
import { HiIdentification } from "react-icons/hi";
import { Footer } from "../../components/footer/footer";

import "./finalizarComprar.css";
import { InputDefault, InputPassword } from "../../components/input/input";
import { ButtonComprar, ButtonDescuento } from "../../components/button/button";
import { useShoppingCart } from "../../components/context/ShoppingCartContext";
import dishesService from "../../services/dishes";
import { DishesDefault } from "../../entities/dishes";
import { UserDefault } from "../../entities/User";
import userService from "../../services/user";
import facturaService from "../../services/factura";
import { useNavigate } from "react-router-dom";
import pedidoService from "../../services/pedido";
export const FinalizarCompra: React.FC<{
  userState: boolean;
  handleauth: () => void;
  handleLogin: () => void;
}> = ({ userState, handleauth, handleLogin }) => {
  const [nameValue, setNameValue] = useState("");
  const [nametState, setNameState] = useState(false);

  const [lastNameValue, setLastNameValue] = useState("");
  const [lastNameState, setLastNameState] = useState(false);

  const [codigoValue, setcodigoValue] = useState("");
  const [codigoState, secodigoState] = useState(false);

  const [fechaValue, setfechaValue] = useState("");
  const [fechaState, setfechaState] = useState(false);

  const [cvvValue, setcvvValue] = useState("");
  const [cvvdState, setcvvState] = useState(false);

  const [cuponValue, setcuponValue] = useState("");
  const [cuponState, setcuponState] = useState(false);

  const [terminoStatue, seterminosState] = useState(false);

  const { closeCart, cartItems } = useShoppingCart();
  const [idFactura, setidFactura ] = useState(0);
  
  const [Usuario, setUsuario] = useState<UserDefault>();

  const [dishesList, setDisheslist] = useState<DishesDefault[] | null>([]);
  const navigate = useNavigate();

  const tooglePasswordVisibility = () => {
    if (terminoStatue === false) {
      seterminosState(true);
    } else {
      seterminosState(false);
    }
  };

  const serviceUsuario = async () => {
    const result = await userService.showName();
    setUsuario(result.data);
    console.log(result.data);
  };


  const CuponLogic = (codigo: boolean) => {
    if (codigo === true) {
      alert("cupon aplicado");
    }
  };
  const now = new Date();

  const retornarFecha = () => {
    return now.toLocaleDateString()
  };


  const retornarPlatoxid = (idPlato : number)=>{
    const plato = dishesList!.find((plato)=>plato.id ===idPlato )
      return plato;
  }


  const guardarPedidos = async ()=>{
    cartItems.map((data,idx)=>
      servicepedido(retornarPlatoxid(data.id)!.precio*data.quantity ,idFactura,data.id,data.quantity)      
    )
  }



  
  const servicepedido = async (subtotal : number,id_factura : number, id_platillo : number, cantidad: number) => {
    const result = await  pedidoService.create(
      cantidad,
      subtotal,
      id_platillo,
      id_factura
    )

     console.log(result.data);
  };




  useEffect(() => {
    serviceUsuario();
    serviceDishes();
}, []);

  useEffect(()=>{
    console.log(idFactura)
  if(idFactura!==0 && idFactura!==undefined ){

    guardarPedidos();
     navigate("/brisasMarinas");

  }

  },[idFactura])


const serviceDishes = async () => {
    const result = await dishesService.listQuant(11);
    setDisheslist(result);
    console.log(result);
};


const total = ()=>{
    return  cartItems.reduce((subTotal, cartItem) => {
        const item = dishesList!.find(
            (i) => i.id === cartItem.id
        );
        let realPrice;

        realPrice = item?.precio;

        return (
            subTotal +
            (realPrice || 0) *
                cartItem.quantity
        );
    }, 0)
    .toFixed(2)
}


  const ComprarLogic = async (
    name: boolean,
    lastname: boolean,
    codigo: boolean,
    cvv: boolean,
    fecha: boolean
  ) => {
    if (name === false) {
      alert("Nombre no valido, revisar el error indicado.");
    }
    if (lastname === false) {
      alert("Apellido no valido, revisar el error indicado.");
    }
    if (codigo === false) {
      alert(
        "Número de codigo de tarjeta no valido, revisar el error indicado."
      );
    }
    if (cvv === false) {
      alert("Número de cvv no valido, revisar el error indicado.");
    }
    if (fecha === false) {
      alert("fecha de vencimiento no valido, revisar el error indicado.");
    }

    if (
      name === true &&
      lastname === true &&
      cvv === true &&
      fecha === true &&
      codigo === true
    ) {
      if(Usuario?.id !==undefined){
        const result = await facturaService.create (
          Number(total()),
          retornarFecha(),
          Usuario?.id
        );
        console.log(result);
        setidFactura(result.data.id);  
        alert("Compra exitosa");
          

      }else{
       
        alert("Error")
      }
    }else{

      alert("campos vacios")
    }
  };

  return (
    <div className="app-container-comprarPagina">
      <NavBarDefault
        userState={userState}
        handleauth={() => handleauth()}
        handleLogin={() => handleLogin}
      />
 
      <ComprarHeader />

      <div className="app-container-comprar">
        <div className="app-container-comprar-tarjeta">
          <div className="app-container-comprar-identificacion">
            <HiIdentification size={20} />
            <label onClick={()=>console.log(cartItems)}>Identificación</label>
          </div>
          <label>
            Solicitamos la información necesario para finalizar la compra{" "}
          </label>
          <div className="app-container-form-comprar">
            <div className="app-container-nombre-apelliado">
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

            <div className="app-container-comprar-codigo">
              <InputDefault
                estado={codigoState}
                campo={codigoValue}
                cambiarEstado={(txt: boolean) => secodigoState(txt)}
                cambiarCampo={(txt: string) => setcodigoValue(txt)}
                tipo="text"
                label="Numero de Tarjeta"
                placeholder="Ejemplo : 44557 8804 3284 2148"
                leyendaError="Error: solo debe contener caracteres numericos"
                expresionRegular={/^\d{16}$/}
              />
            </div>

            <div className="app-container-nombre-apelliado">
              <InputPassword
                estado={cvvdState}
                campo={cvvValue}
                cambiarEstado={(txt: boolean) => setcvvState(txt)}
                cambiarCampo={(txt: string) => setcvvValue(txt)}
                label="CVV"
                placeholder="Debe contener 3 caracteres numérico"
                leyendaError="Error: Debe contener 3 números"
                expresionRegular={/^\d{3}$/}
              />

              <InputDefault
                estado={fechaState}
                campo={fechaValue}
                cambiarEstado={(txt: boolean) => setfechaState(txt)}
                cambiarCampo={(txt: string) => setfechaValue(txt)}
                tipo="text"
                label="Fecha de Vencimiento"
                placeholder="Ejemplo : 04/22"
                leyendaError="Error: debe seguir el formato MM/AA"
                expresionRegular={/^(0[1-9]|1[0-2])\/(0[1-9]|1[1-9]|2[1-9])$/}
              />
            </div>
          </div>
          <div className="app-container-comprar-button">
            <ButtonComprar
              name={nametState}
              lastname={lastNameState}
              cvv={cvvdState}
              fechaven={fechaState}
              codigo={codigoState}
              placeholder="FINALIZAR COMPRA"
              handleClick={(
                name: boolean,
                lastname: boolean,
                codigo: boolean,
                cvv: boolean,
                fechaven: boolean
              ) => ComprarLogic(name, lastname, codigo, cvv, fechaven)}
            />
          </div>
        </div>

        <div className="app-container-comprar-Resumen">
          <div className="app-container-comprar-input">
            <InputDefault
              estado={cuponState}
              campo={cuponValue}
              cambiarEstado={(txt: boolean) => setcuponState(txt)}
              cambiarCampo={(txt: string) => setcuponValue(txt)}
              tipo="text"
              label="Cupon de Descuento"
              placeholder="Ejemplo : 4x576-89752x"
              leyendaError="Error: Cupon no valido"
              expresionRegular={/^[a-zA-ZÀ-ÿ\s]{8,10}$/}
            />
          </div>

          <div className="app-container-comprar-buton">
            <ButtonDescuento
              codigo={cuponState}
              placeholder="APLICAR"
              handleClick={(codigo: boolean) => CuponLogic(codigo)}
            />
          </div>

          <div className="app-container-Resumen">
            <label>Resumen de la compra</label>

            <div className="app-container-barra"></div>

            <div className="app-container-Resumen-subtotal">
              <div className="app-container-Resumen-subtotal_1">
                <label>Sub Total</label>
              </div>

              <div className="app-container-Resumen-subtotal_2">
                <label>{total()}</label>
              </div>
            </div>

            <div className="app-container-Resumen-descuento">
              <div className="app-container-Resumen-descuento_1">
                <label>Descuentos</label>
              </div>

              <div className="app-container-Resumen-descuento_2">
                <label>S/.-00.00</label>
              </div>
            </div>
            <div className="app-container-barra"></div>

            <div className="app-container-Resumen-Total">
              <div className="app-container-Resumen-Total_1">
                <label>Total</label>
              </div>

              <div className="app-container-Resumen-Total_2">
                <label>{total()}</label>
              </div>
            </div>
            <label> Ingrese una nota para su pedido :</label>
            <input type="text" id="nombre" placeholder="Ingrese su nota" />
            <br />
            <br />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};
