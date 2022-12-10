import {
  BlockHash,
  BlockIdentifier,
  BlockNumber,
  BlockTag,
  BlockTagFull,
  TransactionHash,
  TransactionIndex,
} from './interfaces/blockchain';
import {
  GetBlockNumberRequest,
  GetBlockRequest,
  GetTransactionRequest,
  RequestFunction,
} from './interfaces/request';
import { Methods } from './interfaces/method';
import { numberToHex } from './utils';
import { BlockTags } from './constants';

class Requests implements RequestFunction {
  getBlockNumber(): GetBlockNumberRequest {
    return { method: Methods.GetBlockNumber, params: [] };
  }

  getBlock(blockNumber: BlockNumber): GetBlockRequest;
  getBlock(blockTag: BlockTag): GetBlockRequest;
  getBlock(blockHash: BlockHash): GetBlockRequest;
  getBlock(blockNumber: BlockNumber, returnTransactions: true): GetBlockRequest;
  getBlock(blockTag: BlockTag, returnTransactions: true): GetBlockRequest;
  getBlock(blockHash: BlockHash, returnTransactions: true): GetBlockRequest;
  getBlock(
    identifier: BlockIdentifier,
    returnTransactions?: true,
  ): GetBlockRequest;
  getBlock(
    identifier: BlockIdentifier,
    returnTransactions?: true,
  ): GetBlockRequest {
    const method =
      this.isNumber(identifier) || this.isBlockTag(identifier)
        ? Methods.GetBlockByNumber
        : Methods.GetBlockByHash;
    const firstParam = this.isNumber(identifier)
      ? numberToHex(<number>identifier)
      : (<string>identifier).toLowerCase();
    const isFull = returnTransactions ? returnTransactions : false;

    return { method, params: [firstParam, isFull] };
  }

  getTransaction(transactionHash: TransactionHash): GetTransactionRequest;
  getTransaction(
    blockNumber: BlockNumber,
    transactionIndex: TransactionIndex,
  ): GetTransactionRequest;
  getTransaction(
    blockTag: BlockTagFull,
    transactionIndex: TransactionIndex,
  ): GetTransactionRequest;
  getTransaction(
    blockHash: BlockHash,
    transactionIndex: TransactionIndex,
  ): GetTransactionRequest;
  getTransaction(
    identifier: TransactionHash | BlockIdentifier,
    transactionIndex?: TransactionIndex,
  ): GetTransactionRequest;
  getTransaction(
    identifier: TransactionHash | BlockIdentifier,
    transactionIndex?: TransactionIndex,
  ): GetTransactionRequest {
    if (transactionIndex) {
      const index = numberToHex(transactionIndex);
      const method =
        this.isNumber(identifier) || this.isBlockTag(identifier)
          ? Methods.GetTransactionByBlockNumber
          : Methods.GetTransactionByBlockHash;
      const firstParam = this.isNumber(identifier)
        ? numberToHex(<number>identifier)
        : (<string>identifier).toLowerCase();

      return { method, params: [firstParam, index] };
    }

    return {
      method: Methods.GetTransactionByHash,
      params: [<TransactionHash>identifier],
    };
  }

  private isNumber(identifier: BlockIdentifier) {
    return typeof identifier === 'number';
  }

  private isBlockTag(identifier: BlockIdentifier) {
    return BlockTags.includes(<BlockTag>identifier);
  }
}

export const requests = new Requests();
