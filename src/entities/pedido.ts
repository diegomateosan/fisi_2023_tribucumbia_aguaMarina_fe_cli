import internal from "stream";

export interface pedidoData {
  id: number;
  cantidad: number;
  subtotal: number;
  id_platillo: number;
  id_factura: number;
}