import { RequestObject } from '../interfaces/request';
import { jsonRpcBatchCall } from '../services/jsonRpcCall';
import { BaseProvider } from './base';
import { JSONRPCError, JSONRPCRequestResult } from "../interfaces/json-rpc";

export class Batch extends BaseProvider {
  private requests: RequestObject[];

  add(request: RequestObject): void {
    this.requests.push(request);
  }

  async execute(): Promise<any[]>;
  async execute(requests: RequestObject[]): Promise<any[]>;
  async execute(requests?: RequestObject[]): Promise<any[]> {
    if (!requests.length && !this.requests?.length) {
      throw new Error('Execution is impossible without requests');
    }

    if (this.requests?.length) {
      requests = [...this.requests, ...requests]
    }

    let result: JSONRPCRequestResult[] = []

    if (requests.length > 100) {
      for (let i = 0; i < requests.length; i += 100) {
        const chunk = requests.slice(i, i + 100);
        const data = await jsonRpcBatchCall(this.provider, this.inputFormatter(chunk));
        result = [...result, ...data];
      }
    }

    return result.map((item, index) => item.error
      ? item.error.message
      : this.outputFormatter(requests[index], item)
    )
  }

  clear(): void {
    this.requests = [];
  }

  private inputFormatter(requests: RequestObject[]): RequestObject[] {
    for (const request of requests) {
      const { params, inputFormatter } = request;

      if (params && inputFormatter) {
        for (const key in params) {
          params[key] = inputFormatter[key]
            ? inputFormatter[key](params[key])
            : params[key]
        }
      }
    }

    return requests;
  }

  private outputFormatter(requests: RequestObject, data: JSONRPCRequestResult): any | JSONRPCError {
    return data.error
      ? data.error
      : requests.outputFormatter
        ? requests.outputFormatter(data.result)
        : data.result;
  }
}
