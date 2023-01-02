import { RequestObject } from '../interfaces/request';
import { jsonRpcBatchCall } from '../services/jsonRpcCall';
import { BaseProvider } from './base';
import { JSONRPCError, JSONRPCRequestResult } from "../interfaces/json-rpc";
import * as req from "../services/requests";

export class Batch extends BaseProvider {
  requests = req.requests;
  private _requests: RequestObject[];

  /** Adds a request to the pool */
  add(request: RequestObject): void {
    this._requests.push(request);
  }

  /** Clears the request pool */
  clear(): void {
    this._requests = [];
  }

  async execute(): Promise<any[]>;
  async execute(requests: RequestObject[]): Promise<any[]>;
  async execute(requests?: RequestObject[]): Promise<any[]> {
    if (!requests.length && !this._requests?.length) {
      throw new Error('Execution is impossible without requests');
    }

    if (this._requests?.length) {
      requests = [...this._requests, ...requests]
    }

    if (requests.length > 100) {
      throw new Error();
    }

    const data = await jsonRpcBatchCall(this.provider, requests);

    return data.map((item, index) => item.error
      ? item.error.message
      : this.outputFormatter(requests[index], item)
    );
  }

  private outputFormatter(requests: RequestObject, data: JSONRPCRequestResult): any | JSONRPCError {
    return data.error
      ? data.error
      : requests.formatter
        ? requests.formatter(data.result)
        : data.result;
  }
}
