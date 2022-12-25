import { JSONRPCRequestObject, JSONRPCRequestResult } from "../interfaces/json-rpc";
import { DEFAULT_OPTIONS } from "../constants";
import { RequestObject } from "../interfaces/request";
import { assertNotNull } from "../utils";

export class JsonRpcCall {
  readonly provider: string;

  constructor(provider: string) {
    this.provider = provider;
  }

  async call<T>(req: RequestObject): Promise<JSONRPCRequestResult<T>>;
  async call<T>(req: RequestObject[]): Promise<JSONRPCRequestResult[]>;
  async call<T>(req: RequestObject | RequestObject[]): Promise<JSONRPCRequestResult<T> | JSONRPCRequestResult[]> {
    const jsonRpcRequests = this.transformRequests(req);
    const body = JSON.stringify(jsonRpcRequests);

    return fetch(this.provider, { ...DEFAULT_OPTIONS, body })
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      })
  }

  private transformRequests(
    req: RequestObject | RequestObject[],
  ): JSONRPCRequestObject | JSONRPCRequestObject[] {
    assertNotNull(req);

    return Array.isArray(req)
      ? req.map((item, index) => this.toRequestObject(item, index + 1))
      : this.toRequestObject(req);
  }

  private toRequestObject(
    { method, params }: RequestObject,
    id = 1
  ): JSONRPCRequestObject {
    return { jsonrpc: '2.0', method, params, id }
  }
}

export const jsonRpcBatchCall =
  (provider: string, requests: RequestObject[]) =>
    new JsonRpcCall(provider).call(requests);