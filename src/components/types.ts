export type TMeter = {
  id: string;
  _type: string[];
  area: { id: string };
  is_automatic: null | boolean;
  communication: string;
  description: string;
  serial_number: string;
  installation_date: string;
  brand_name: null;
  model_name: null;
  initial_values: number[];
};

export type TArea = {
  id: string;
  number: number;
  str_number: string;
  str_number_full: string;
  house: {
    address: string;
    id: string;
    fias_addrobjs: string[];
  };
};

export type TItem = {
  meter: TMeter;
  area: TArea;
}
