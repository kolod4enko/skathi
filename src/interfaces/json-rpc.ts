export type JSONRPC = '2.0';
export type JSONRPCID = string | number | null;
export type JSONRPCParams = object | any[];

export interface JSONRPCRequest {
  jsonrpc: JSONRPC;
  method: string;
  params?: JSONRPCParams;
  id?: JSONRPCID;
}

export interface JSONRPCResult<T = any> {
  jsonrpc: '2.0';
  result: T;
  id: 1;
}
