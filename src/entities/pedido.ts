import internal from "stream";

export interface pedidoData {
  id: number;
  cantidad: number;
  subtotal: number;
  id_platillo: number;
  id_factura: number;
}

export interface pedidoHistorial {


  nombre: string;
  precio: number;
  cantidad: number;
  subTotal : number;
  fecha: string;
}
