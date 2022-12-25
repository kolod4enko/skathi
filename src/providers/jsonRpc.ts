import { BaseProvider } from './base';
import {
  Block,
  BlockHash,
  BlockIdentifier,
  BlockNumber,
  BlockTag,
  BlockTagFull,
  BlockWithTransactions,
  Transaction,
  TransactionHash,
  TransactionIndex,
} from '../interfaces/blockchain';
import { requests } from '../services/requests';
import { JsonRpcCall } from "../services/jsonRpcCall";
import { RequestObject } from "../interfaces/request";
import { JSONRPCError, JSONRPCRequestResult } from "../interfaces/json-rpc";

export class JsonRpc extends BaseProvider {
  private readonly client: JsonRpcCall;

  constructor(provider: string) {
    super(provider);

    this.client = new JsonRpcCall(provider);
  }

  async getNetVersion(): Promise<number | JSONRPCError> {
    const request = requests.getNetVersion();

    const data = await this.client.call<number>(this.inputFormatter(request));

    return this.outputFormatter<number>(request, data);
  }

  /** Get the number of the last confirmed block */
  async getBlockNumber(): Promise<number | JSONRPCError> {
    const request = requests.getBlockNumber();

    const data = await this.client.call<number>(this.inputFormatter(request));

    return this.outputFormatter<number>(request, data);
  }

  /**
   * Get block data by block number, hash or tag.
   * You can also request the data of transactions performed in this block
   */
  async getBlock(blockNumber: BlockNumber, returnTransactions?: boolean): Promise<Block>;
  async getBlock(blockTag: BlockTag, returnTransactions?: boolean): Promise<Block>;
  async getBlock(blockHash: BlockHash, returnTransactions?: boolean): Promise<Block>;
  async getBlock(identifier: BlockIdentifier, returnTransactions?: true): Promise<Block | BlockWithTransactions | JSONRPCError> {
    const request = requests.getBlock(identifier, returnTransactions);

    const data = await this.client.call<Block | BlockWithTransactions>(this.inputFormatter(request));

    return this.outputFormatter<Block | BlockWithTransactions>(request, data);
  }

  /** Get transaction data by hash or block data in which it was performed */
  async getTransaction(transactionHash: TransactionHash): Promise<Transaction>;
  async getTransaction(
    blockNumber: BlockNumber,
    transactionIndex: TransactionIndex,
  ): Promise<Transaction>;
  async getTransaction(
    blockTag: BlockTagFull,
    transactionIndex: TransactionIndex,
  ): Promise<Transaction>;
  async getTransaction(
    blockHash: BlockHash,
    transactionIndex: TransactionIndex,
  ): Promise<Transaction>;
  async getTransaction(
    identifier: TransactionHash | BlockIdentifier,
    transactionIndex?: TransactionIndex,
  ): Promise<Transaction>;
  async getTransaction(
    identifier: TransactionHash | BlockIdentifier,
    transactionIndex?: TransactionIndex,
  ): Promise<Transaction | JSONRPCError> {
    const request = requests.getTransaction(identifier, transactionIndex);

    const data = await this.client.call<Transaction>(this.inputFormatter(request));

    return this.outputFormatter<Transaction>(request, data);
  }

  private inputFormatter(request: RequestObject): RequestObject {
    const { params, inputFormatter } = request;

    if (params && inputFormatter) {
      for (const key in params) {
        params[key] = inputFormatter[key]
          ? inputFormatter[key](params[key])
          : params[key]
      }
    }

    return request;
  }

  private outputFormatter<T>(requests: RequestObject, data: JSONRPCRequestResult<T>): T | JSONRPCError {
    return data.error
      ? data.error
      : requests.outputFormatter
        ? requests.outputFormatter(data.result)
        : data.result;
  }
}
