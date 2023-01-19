import { RequestObject } from "../interfaces/request";

import * as req from "../services/requests";
import { jsonRpcBatchCall } from "../services/jsonRpc";

import { BaseProvider } from './base';

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

  /** Executes the requests in the pool */
  async execute(): Promise<any[]>;
  async execute(requests: RequestObject[]): Promise<any[]>;
  async execute(requests?: RequestObject[]): Promise<any[]> {
    // check requests length
    if (!requests.length && !this._requests?.length) {
      throw new Error('Execute requires at least one request, none were provided');
    }

    // combine requests
    if (this._requests?.length) {
      requests = [...this._requests, ...requests]
    }

    // check max requests
    if (requests.length > 100) {
      throw new Error(`Maximum 100 requests can be passed to the execute method, but ${requests.length} were passed`);
    }

    // call batch request
    const data = await jsonRpcBatchCall(this.provider, requests);

    return data.map((item, index) =>
      item[index].formatter ? item[index].formatter(item) : item);
  }
}
