import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { pedidoHistorial } from "../../entities/pedido";
import { UserDefault } from "../../entities/User";
import pedidoService from "../../services/pedido";
import userService from "../../services/user";

export const TablaPedidos: React.FC<{}> = () => {
    const [usuario, setusuario] =useState<UserDefault>()
  const navigate = useNavigate();   
    const[history, sethistory]= useState<pedidoHistorial[]>()
  useEffect(() => {
    serviceUsuario();
  }, []);

  const serviceUsuario = async () => {
    const result = await userService.showName();
    setusuario(result.data);
    console.log(result);
  };
  const serviceHistory = async () => {
    if(usuario?.id!==null && usuario?.id!==undefined ){
      const result = await pedidoService.listPorUsuario(usuario.id);
    sethistory(result);
    console.log(result);

    }
    console.log(usuario?.id)
    
  };


  
  useEffect(() => {
    serviceHistory();
    }, [usuario]);


    useEffect(() => {
  
      }, [history]);


  
  
  return (
    <div className="tabla-inicio">
    <div className="tabla-inicio-label">
      <h1>Lista de Historial de Pedidos</h1>
    </div>
    <div className="app-container-use-tabla-to">
      <div className="app-container-user-tabla">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>N° </th>
                <th>Nombre Platillo</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Sub Total</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {history?.map((data, idx) => {
                return (
                  <tr key={idx}>
                    <td>{idx}</td>
                    <td>{data.nombre}</td>
                    <td>{data.precio}</td>
                    <td>{data.cantidad}</td>

                    <td>{data.subTotal}</td>
                    
                    <td>{data.fecha}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>


  );
};
