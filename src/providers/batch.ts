import { RequestResponse } from '../interfaces/request';
import { jsonRpc } from '../json-rpc';
import { BaseProvider } from './base';

export class Batch extends BaseProvider {
  private requests: RequestResponse[];

  add(request: RequestResponse): void {
    this.requests.push(request);
  }

  async execute(): Promise<any[]>;
  async execute(requests: RequestResponse[]): Promise<any[]>;
  async execute(requests?: RequestResponse[]): Promise<any[]> {
    if (!requests.length && !this.requests.length) {
      throw new Error('Execution is impossible without requests');
    }

    if (requests.length && this.requests.length) {
      this.requests = [...this.requests, ...requests];
    }

    return jsonRpc(this.provider, this.requests);
  }

  clear(): void {
    this.requests = [];
  }
}
