export type JSONRPC = '2.0';
export type JSONRPCID = string | number | null;
export type JSONRPCParams = any[];

export interface JSONRPCRequestObject {
  jsonrpc: JSONRPC;
  method: string;
  params?: JSONRPCParams;
  id?: JSONRPCID;
}

export interface JSONRPCError {
  code: number,
  message: string,
}

export interface JSONRPCRequestResult<T = any> {
  jsonrpc: '2.0';
  id: number;
  result?: T;
  error?: JSONRPCError
}
