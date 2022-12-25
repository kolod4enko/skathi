import { JSONRPCParams } from './json-rpc';
import { Methods } from './method';

export type FunctionFormatter = (data: any) => any;

export interface RequestObject {
  method: Methods;
  params?: JSONRPCParams;
  inputFormatter?: FunctionFormatter[],
  outputFormatter?: FunctionFormatter,
}
