declare const json_sym:unique symbol
export type json_T = string&{ [json_sym]:never }
