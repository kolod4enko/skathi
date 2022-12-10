import { JSONRPCParams } from './json-rpc';
import { Methods } from './method';
import {
  BlockHash,
  BlockIdentifier,
  BlockNumber,
  BlockTag,
  BlockTagFull,
  TransactionHash,
  TransactionIndex,
} from './blockchain';

export interface GetBlockNumber {
  getBlockNumber(): GetBlockNumberRequest;
}

export interface GetBlock {
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
}

export interface GetTransaction {
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
}

export type RequestFunction = GetBlockNumber & GetBlock & GetTransaction;

export interface RequestResponse {
  method: Methods;
  params?: JSONRPCParams;
}

export interface GetBlockNumberRequest extends RequestResponse {
  method: Methods.GetBlockNumber;
  params: [];
}

export interface GetBlockRequest extends RequestResponse {
  method: Methods.GetBlockByNumber | Methods.GetBlockByHash;
  params: [string, boolean];
}

export interface GetTransactionRequest extends RequestResponse {
  method:
    | Methods.GetTransactionByHash
    | Methods.GetTransactionByBlockHash
    | Methods.GetTransactionByBlockNumber;
  params: [string] | [string, string];
}
