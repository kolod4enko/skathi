import { BaseProvider } from './base';
import {
  Block,
  BlockHash,
  BlockIdentifier,
  BlockNumber,
  BlockTag,
  BlockTagFull,
  BlockWithTransactions,
  Log,
  Transaction,
  TransactionHash,
  TransactionIndex, TransactionReceipt,
} from '../interfaces/blockchain';
import { requests } from '../services/requests';
import { JsonRpcCall } from "../services/jsonRpcCall";
import {LogFiltersBlockHash, LogFiltersBlockNumber, RequestObject} from "../interfaces/request";
import { JSONRPCRequestResult } from "../interfaces/json-rpc";

export class JsonRpc extends BaseProvider {
  private readonly client: JsonRpcCall;

  constructor(provider: string) {
    super(provider);

    this.client = new JsonRpcCall(provider);
  }

  async getNetVersion(): Promise<number> {
    const request = requests.getNetVersion();

    return this.call<number>(request);
  }

  async getGasPrice(): Promise<number> {
    const request = requests.getGasPrice()

    return this.call<number>(request);
  }

  /** Get the number of the last confirmed block */
  async getBlockNumber(): Promise<number> {
    const request = requests.getBlockNumber();

    return this.call<number>(request);
  }

  /**
   * Get block data by block number, hash or tag.
   * You can also request the data of transactions performed in this block
   */
  async getBlock(blockNumber: BlockNumber, returnTransactions?: boolean): Promise<Block | BlockWithTransactions>;
  async getBlock(blockTag: BlockTag, returnTransactions?: boolean): Promise<Block | BlockWithTransactions>;
  async getBlock(blockHash: BlockHash, returnTransactions?: boolean): Promise<Block | BlockWithTransactions>;
  async getBlock(identifier: BlockIdentifier, returnTransactions?: true): Promise<Block | BlockWithTransactions> {
    const request = requests.getBlock(identifier, returnTransactions);

    return this.call<Block | BlockWithTransactions>(request);
  }

  /** Get the number of transactions in a block by block number, hash or tag. */
  async getBlockTransactionCount(blockNumber: BlockNumber): Promise<number>;
  async getBlockTransactionCount(blockTag: BlockTag): Promise<number>;
  async getBlockTransactionCount(blockHash: BlockHash): Promise<number>;
  async getBlockTransactionCount(identifier: BlockIdentifier): Promise<number> {
    const request = requests.getBlockTransactionCount(identifier);

    return this.call<number>(request);
  }

  /** Get transaction data by hash or block data in which it was performed */
  async getTransaction(transactionHash: TransactionHash): Promise<Transaction>;
  async getTransaction(blockNumber: BlockNumber, transactionIndex: TransactionIndex): Promise<Transaction>;
  async getTransaction(blockTag: BlockTagFull, transactionIndex: TransactionIndex): Promise<Transaction>;
  async getTransaction(blockHash: BlockHash, transactionIndex: TransactionIndex): Promise<Transaction>;
  async getTransaction(identifier: TransactionHash | BlockIdentifier, transactionIndex?: TransactionIndex): Promise<Transaction> {
    const request = requests.getTransaction(identifier, transactionIndex);

    return this.call<Transaction>(request);
  }

  async getTransactionReceipt(transactionHash: TransactionHash): Promise<TransactionReceipt> {
    const request = requests.getTransactionReceipt(transactionHash);

    return this.call<TransactionReceipt>(request);
  }

  async getUncle(blockNumber: BlockNumber, uncleIndex?: number): Promise<Block>;
  async getUncle(blockTag: BlockTag, uncleIndex?: number): Promise<Block>;
  async getUncle(blockHash: BlockHash, uncleIndex?: number): Promise<Block>;
  async getUncle(identifier: BlockIdentifier, uncleIndex = 0): Promise<Block> {
    const request = requests.getUncle(identifier, uncleIndex);

    return this.call<Block>(request);
  }

  async getUncleCount(blockNumber: BlockNumber): Promise<number>;
  async getUncleCount(blockTag: BlockTag): Promise<number>;
  async getUncleCount(blockHash: BlockHash): Promise<number>;
  async getUncleCount(identifier: BlockIdentifier): Promise<number> {
    const request = requests.getUncleCount(identifier);

    return this.call<number>(request);
  }

  async getLogs(filters: LogFiltersBlockNumber): Promise<Log[]>;
  async getLogs(filters: LogFiltersBlockHash): Promise<Log[]>;
  async getLogs(filters: LogFiltersBlockNumber | LogFiltersBlockHash): Promise<Log[]> {
    const request = requests.getLogs(filters);

    return this.call<Log[]>(request);
  }

  private async call<T>(request: RequestObject): Promise<T> {
    const data = await this.client.call<T>(request);

    return this.outputFormatter<T>(request, data);
  }

  private outputFormatter<T extends any>(requests: RequestObject, data: JSONRPCRequestResult<T>): T {
    if (data.error) {
      throw new Error(data.error.message);
    }

    if (requests.formatter && data.result) {
      if (Array.isArray(data.result)) {
        return data.result.map((item) => requests.formatter(item)) as T;
      }

      return requests.formatter(data.result);
    }

    return data.result;
  }
}
