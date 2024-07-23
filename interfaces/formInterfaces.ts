export interface Categoria {
  id: number;
  label: string;
  value: string;
}

export interface CantidadDeCuotas {
  id: number;
  label: string;
  value: number;
}

export interface Moneda {
  id: number;
  label: string;
  value: string;
}

export interface MetodoDePago {
  id: number;
  label: string;
  value: string;
}

export interface Gasto {
  nombreGasto: string;
  categoria: string;
  metodoDePago: string;
  cuota: boolean;
  cantidadCuotas: number;
  moneda: string;
  valor: string;
  gastoFijo: boolean;
  date: string;
}

export interface FormState {
  categorias: Categoria[];
  cantidadDeCuotas: CantidadDeCuotas[];
  monedas: Moneda[];
  metodosDePago: MetodoDePago[];
  gastos: Gasto[];
}
