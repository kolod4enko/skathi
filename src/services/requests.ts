import {
  Address,
  BlockHash,
  BlockIdentifier,
  BlockNumber,
  BlockTag,
  FilterId,
  FilterOptionsByBlockHash,
  FilterOptionsByBlockNumber,
  Formatter,
  RequestObject,
  TransactionHash,
  TransactionIndex,
} from "../interfaces/request";
import {Method} from "../interfaces/blockchain";
import {Params} from "../interfaces/jsonRpc";

import {Requests as AbstractRequests} from "../abstract";
import * as formatter from "../formatters";
import {hexToNumber} from "../formatters";

export class Requests implements AbstractRequests {
  getGasPrice = (): RequestObject =>
    this.getRequest(
      Method.getGasPrice,
      null,
      null,
      formatter.hexToNumber
    );

  getBlockNumber = (): RequestObject =>
    this.getRequest(
      Method.getBlockNumber,
      null,
      null,
      formatter.hexToNumber
    );

  getLogs(filterOptions: FilterOptionsByBlockNumber): RequestObject;
  getLogs(filterOptions: FilterOptionsByBlockHash): RequestObject;
  getLogs(filterOptions: FilterOptionsByBlockNumber | FilterOptionsByBlockHash): RequestObject {
    return this.getRequest(
      Method.getLogs,
      [filterOptions],
      [formatter.filterOptions],
      formatter.log
    );
  }

  getBlock(): RequestObject;
  getBlock(blockNumber: BlockNumber): RequestObject;
  getBlock(blockNumber: BlockNumber, returnTransactions: boolean): RequestObject;
  getBlock(blockTag: BlockTag): RequestObject;
  getBlock(blockTag: BlockTag, returnTransactions: boolean): RequestObject;
  getBlock(blockHash: BlockHash): RequestObject;
  getBlock(blockHash: BlockHash, returnTransactions: boolean): RequestObject;
  getBlock(blockIdentifier?: BlockIdentifier, returnTransactions?: boolean): RequestObject;
  getBlock(blockIdentifier: BlockIdentifier = 'latest', returnTransactions = false): RequestObject {
    return this.getRequest(
      (formatter.isNumber(blockIdentifier) || formatter.isBlockTag(blockIdentifier))
        ? Method.getBlockByNumber
        : Method.getBlockByHash,
      [blockIdentifier, returnTransactions],
      [formatter.getBlockIdentifier],
      !returnTransactions ? formatter.block : formatter.blockWithTransactions
    );
  }

  getTransaction(transactionHash: TransactionHash): RequestObject;
  getTransaction(blockNumber: BlockNumber, position?: TransactionIndex): RequestObject;
  getTransaction(blockTag: BlockTag, position?: TransactionIndex): RequestObject;
  getTransaction(blockHash: BlockHash, position?: TransactionIndex): RequestObject;
  getTransaction(data: TransactionHash | BlockNumber | BlockTag | BlockHash, position?: TransactionIndex): RequestObject;
  getTransaction(data: TransactionHash | BlockNumber | BlockTag | BlockHash, position?: TransactionIndex): RequestObject {
    return this.getRequest(
      position
        ? (
          (formatter.isNumber(data) || formatter.isBlockTag(data))
            ? Method.getTransactionByBlockNumberAndIndex
            : Method.getTransactionByBlockHashAndIndex
        )
        : Method.getTransactionByHash,
      [data, position],
      [position ? formatter.getBlockIdentifier : formatter.getHex, formatter.getHex],
      formatter.transaction
    );
  }

  getTransactionReceipt = (transactionHash: TransactionHash): RequestObject =>
    this.getRequest(
      Method.getTransactionReceipt,
      [transactionHash],
      [formatter.getHex],
      formatter.transactionReceipt
    );

  getBlockTransactionCount(): RequestObject;
  getBlockTransactionCount(blockNumber: BlockNumber): RequestObject;
  getBlockTransactionCount(blockTag: BlockTag): RequestObject;
  getBlockTransactionCount(blockHash: BlockHash): RequestObject;
  getBlockTransactionCount(blockIdentifier?: BlockIdentifier): RequestObject;
  getBlockTransactionCount(blockIdentifier: BlockIdentifier = 'latest'): RequestObject {
    return this.getRequest(
      (formatter.isNumber(blockIdentifier) || formatter.isBlockTag(blockIdentifier))
        ? Method.getBlockTransactionCountByNumber
        : Method.getBlockTransactionCountByHash,
      [blockIdentifier],
      [formatter.getBlockIdentifier],
      hexToNumber
    );
  }

  getTransactionCount(address: Address): RequestObject;
  getTransactionCount(address: Address, blockNumber: BlockNumber): RequestObject;
  getTransactionCount(address: Address, blockTag: BlockTag): RequestObject;
  getTransactionCount(address: Address, blockIdentifier?: BlockNumber | BlockTag): RequestObject;
  getTransactionCount(address: Address, blockIdentifier: BlockNumber | BlockTag = 'latest'): RequestObject {
    return this.getRequest(
      Method.getTransactionCount,
      [address, blockIdentifier],
      [formatter.getHex, formatter.getBlockIdentifier],
      hexToNumber
    );
  }

  newFilter(filterOptions: FilterOptionsByBlockNumber): RequestObject;
  newFilter(filterOptions: FilterOptionsByBlockHash): RequestObject;
  newFilter(filterOptions: FilterOptionsByBlockNumber | FilterOptionsByBlockHash): RequestObject {
    return this.getRequest(
      Method.newFilter,
      [filterOptions],
      [formatter.filterOptions],
      formatter.hexToNumber
    );
  }

  newBlockFilter = (): RequestObject =>
    this.getRequest(
      Method.newBlockFilter,
      null,
      null,
      formatter.hexToNumber
    );

  newPendingTransactionFilter = (): RequestObject =>
    this.getRequest(
      Method.newPendingTransactionFilter,
      null,
      null,
      formatter.hexToNumber
    );

  uninstallFilter = (filterId: FilterId): RequestObject =>
    this.getRequest(
      Method.uninstallFilter,
      [filterId],
      [],
      null
    );

  getFilterChanges = (filterId: FilterId): RequestObject =>
    this.getRequest(
      Method.getFilterChanges,
      [filterId],
      [],
      null
    );

  getFilterLogs = (filterId: FilterId): RequestObject =>
    this.getRequest(
      Method.getFilterLogs,
      [filterId],
      [],
      null
    );

  private getRequest(
    method: Method,
    params: Params = [],
    inputFormatter: Formatter[] = [],
    outputFormatter: Formatter
  ): RequestObject {
    if (params && params.length !== 0 && inputFormatter && inputFormatter.length !== 0) {
      params = params.map((item, key) => (item && inputFormatter[key]) ? inputFormatter[key](item) : item)
    }

    return { method, params, formatter: outputFormatter }
  }
}

export const requests = new Requests();