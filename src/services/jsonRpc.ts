import { JsonRpcCallParams, JsonRpcRequestObject, JsonRpcResponse } from "../interfaces/jsonRpc";
import { RequestObject } from "../interfaces/request";

// TODO Add error handling
export class JsonRpc {
  readonly provider: string;

  constructor(provider: string) {
    this.provider = provider;
  }

  async call<T>(params: JsonRpcCallParams): Promise<JsonRpcResponse<T>>;
  async call(params: JsonRpcCallParams[]): Promise<JsonRpcResponse[]>;
  async call<T>(params: JsonRpcCallParams | JsonRpcCallParams[]): Promise<JsonRpcResponse<T> | JsonRpcResponse[]> {
    const requestBody = JSON.stringify(this.toRequestObject(params));

    const response = await fetch(this.provider, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: requestBody
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return response.json();
  }

  private toRequestObject(params: JsonRpcCallParams | JsonRpcCallParams[]): JsonRpcRequestObject | JsonRpcRequestObject[] {
    if (!params) {
      throw new Error('Params are required');
    }

    if (Array.isArray(params)) {
      if (params.length === 0) {
        throw new Error('Array of params is empty');
      }

      return params.map((item, index) =>
        ({  method: item.method, params: item.params, id: index + 1, jsonrpc: '2.0' }))
    }

    return {  method: params.method, params: params.params, id: 1, jsonrpc: '2.0' }
  }
}

export const jsonRpcBatchCall =
  (provider: string, requests: RequestObject[]) =>
    new JsonRpc(provider).call(requests);