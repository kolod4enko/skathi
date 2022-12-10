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
import { requests } from '../requests';
import { jsonRpc } from '../json-rpc';

export class JsonRpc extends BaseProvider {
  // Get the number of the last confirmed block
  async getBlockNumber(): Promise<number> {
    const request = requests.getBlockNumber();

    return jsonRpc<number>(this.provider, request);
  }

  /*
   * Get block data by block number, hash or tag.
   * You can also request the data of transactions performed in this block
   */
  async getBlock(blockNumber: BlockNumber): Promise<Block>;
  async getBlock(blockTag: BlockTag): Promise<Block>;
  async getBlock(blockHash: BlockHash): Promise<Block>;
  async getBlock(
    blockNumber: BlockNumber,
    returnTransactions: true,
  ): Promise<BlockWithTransactions>;
  async getBlock(
    blockTag: BlockTag,
    returnTransactions: true,
  ): Promise<BlockWithTransactions>;
  async getBlock(
    blockHash: BlockHash,
    returnTransactions: true,
  ): Promise<BlockWithTransactions>;
  async getBlock(
    identifier: BlockIdentifier,
    returnTransactions?: true,
  ): Promise<Block | BlockWithTransactions> {
    const request = requests.getBlock(identifier, returnTransactions);

    return jsonRpc<Block | BlockWithTransactions>(this.provider, request);
  }

  // Get transaction data by hash or block data in which it was performed
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
  ): Promise<Transaction> {
    const request = requests.getTransaction(identifier, transactionIndex);

    return jsonRpc<Transaction>(this.provider, request);
  }
}
