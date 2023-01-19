import { Method } from "../blockchain";
import { Params } from "../jsonRpc";

export type Address = string;

export type Formatter = (value: any) => any;

export interface RequestObject {
  method: Method;
  params: Params;
  formatter: Formatter;
}
