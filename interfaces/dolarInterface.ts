export interface Dolar {
  casa: string;
  compra: number;
  fechaActualizacion: string;
  moneda: string;
  nombre: string;
  venta: number;
}

export interface UtilsState {
  dolares: Dolar[] | null;
  dolarTarjeta: Dolar[] | null;
}
