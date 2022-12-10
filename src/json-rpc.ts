import { JSONRPCRequest, JSONRPCResult } from './interfaces/json-rpc';
import { DEFAULT_OPTIONS } from './constants';
import { RequestResponse } from './interfaces/request';

class JsonRpcCall {
  private readonly options = DEFAULT_OPTIONS;

  async call<T>(provider: string, request: RequestResponse): Promise<T>;
  async call(provider: string, requests: RequestResponse[]): Promise<any[]>;
  async call<T>(
    provider: string,
    req: RequestResponse | RequestResponse[],
  ): Promise<T | any[]> {
    const jsonRpcRequests = this.transformRequests(req);
    const body = JSON.stringify(jsonRpcRequests);
    const params = { ...this.options, body };

    const query = fetch(provider, params)
      .then((response) => response.json())
      .catch((error) => {
        throw new Error(error);
      });

    if (Array.isArray(req)) {
      return query.then((data: JSONRPCResult[]) =>
        data.map((item) => item.result),
      );
    }

    return query.then((data: JSONRPCResult<T>) => data.result);
  }

  private transformRequests(
    req: RequestResponse | RequestResponse[],
  ): JSONRPCRequest | JSONRPCRequest[] {
    if (Array.isArray(req)) {
      if (!req || req.length === 0) {
        throw new Error();
      }

      return req.map(({ method, params }, index) => ({
        jsonrpc: '2.0',
        id: index,
        method,
        params,
      }));
    }

    return {
      jsonrpc: '2.0',
      method: req.method,
      params: req.params,
    };
  }
}

export const jsonRpc = new JsonRpcCall().call;
