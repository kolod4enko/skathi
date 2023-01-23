import { Methods } from "../abstract/methods.abstract";

import {
  Address,
  Block, BlockHash, BlockIdentifier,
  BlockNumber, BlockTag, BlockWithTransactions, FilterId,
  FilterOptionsByBlockHash,
  FilterOptionsByBlockNumber,
  Log,
  RequestObject, Transaction, TransactionHash, TransactionIndex, TransactionReceipt
} from "../interfaces/request";

import { JsonRpc as JsonRpcClient } from "../services/jsonRpc";
import { requests } from "../services/requests";

import { BaseProvider } from "./base";

export class JsonRpc extends BaseProvider implements Methods {
  private readonly client: JsonRpcClient;

  constructor(provider: string) {
    super(provider);

    this.client = new JsonRpcClient(provider);
  }

  /** Get the current gas price in wei */
  async getGasPrice(): Promise<number> {
    const request = requests.getGasPrice();

    return this.call<number>(request);
  }

  /** Get the number of the last confirmed block */
  async getBlockNumber(): Promise<number> {
    const request = requests.getBlockNumber();

    return this.call<number>(request);
  }

  async getLogs(filters: FilterOptionsByBlockNumber): Promise<Log[]>;
  async getLogs(filters: FilterOptionsByBlockHash): Promise<Log[]>;
  async getLogs(filters: FilterOptionsByBlockNumber | FilterOptionsByBlockHash): Promise<Log[]> {
    const request = requests.getLogs(filters);

    return this.call<Log[]>(request);
  }

  /**
   * Get block data by block number, hash or tag.
   * You can also request the data of transactions performed in this block
   */
  async getBlock(): Promise<Block>;
  async getBlock(blockNumber: BlockNumber): Promise<Block>;
  async getBlock(blockNumber: BlockNumber, returnTransactions: boolean): Promise<Block | BlockWithTransactions>;
  async getBlock(blockTag: BlockTag): Promise<Block>;
  async getBlock(blockTag: BlockTag, returnTransactions: boolean): Promise<Block | BlockWithTransactions>;
  async getBlock(blockHash: BlockHash): Promise<Block>;
  async getBlock(blockHash: BlockHash, returnTransactions: boolean): Promise<Block | BlockWithTransactions>;
  async getBlock(blockIdentifier: BlockIdentifier = 'latest', returnTransactions = false): Promise<Block | BlockWithTransactions> {
    const request = requests.getBlock(blockIdentifier, returnTransactions);

    return this.call<Block | BlockWithTransactions>(request);
  }

  /** Get transaction data by hash or block data in which it was performed */
  async getTransaction(transactionHash: TransactionHash): Promise<Transaction>;
  async getTransaction(blockNumber: BlockNumber, position?: TransactionIndex): Promise<Transaction>;
  async getTransaction(blockTag: BlockTag, position?: TransactionIndex): Promise<Transaction>;
  async getTransaction(blockHash: BlockHash, position?: TransactionIndex): Promise<Transaction>;
  async getTransaction(data: TransactionHash | BlockNumber | BlockTag | BlockHash, position?: TransactionIndex): Promise<Transaction> {
    const request = requests.getTransaction(data, position);

    return this.call<Transaction>(request);
  }

  async getTransactionReceipt(transactionHash: TransactionHash): Promise<TransactionReceipt> {
    const request = requests.getTransactionReceipt(transactionHash);

    return this.call<TransactionReceipt>(request);
  }

  /** Get the number of transactions in a block by block number, hash or tag. */
  async getBlockTransactionCount(): Promise<number>;
  async getBlockTransactionCount(blockNumber: BlockNumber): Promise<number>;
  async getBlockTransactionCount(blockTag: BlockTag): Promise<number>;
  async getBlockTransactionCount(blockHash: BlockHash): Promise<number>;
  async getBlockTransactionCount(blockIdentifier: BlockIdentifier = 'latest'): Promise<number> {
    const request = requests.getBlockTransactionCount(blockIdentifier);

    return this.call<number>(request);
  }

  async getTransactionCount(address: Address): Promise<number>;
  async getTransactionCount(address: Address, blockNumber: BlockNumber): Promise<number>;
  async getTransactionCount(address: Address, blockTag: BlockTag): Promise<number>;
  async getTransactionCount(address: Address, blockIdentifier: BlockNumber | BlockTag = 'latest'): Promise<number> {
    const request = requests.getTransactionCount(address, blockIdentifier);

    return this.call<number>(request);
  }

  async newFilter(filterOption: FilterOptionsByBlockNumber): Promise<number>;
  async newFilter(filterOption: FilterOptionsByBlockHash): Promise<number>;
  async newFilter(filterOption: FilterOptionsByBlockNumber | FilterOptionsByBlockHash): Promise<number> {
    const request = requests.newFilter(filterOption);

    return this.call<number>(request);
  }

  async newBlockFilter(): Promise<number> {
    const request = requests.newBlockFilter();

    return this.call<number>(request);
  }

  async newPendingTransactionFilter(): Promise<number> {
    const request = requests.newPendingTransactionFilter();

    return this.call<number>(request);
  }

  async uninstallFilter(filterId: FilterId): Promise<boolean> {
    const request = requests.uninstallFilter(filterId);

    return this.call<boolean>(request);
  }

  async getFilterChanges(filterId: FilterId): Promise<Log[]> {
    const request = requests.getFilterChanges(filterId);

    return this.call<Log[]>(request);
  }

  async getFilterLogs(filterId: FilterId): Promise<Log[]> {
    const request = requests.getFilterLogs(filterId);

    return this.call<Log[]>(request);
  }

  private async call<T>({ method, params, formatter }: RequestObject): Promise<T> {
    const data = await this.client.call<number>({ method, params });

    if ('error' in data && data.error) {
      throw new Error(`Error: ${data.error.message}`);
    }

    const element = 'result' in data ? data.result : null;

    return element
      ? formatter
        ? formatter(element)
        : element
      : null;
  }
}
