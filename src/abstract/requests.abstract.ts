import {
  Address,
  BlockHash,
  BlockNumber,
  BlockTag,
  FilterId, FilterOptionsByBlockHash, FilterOptionsByBlockNumber,
  RequestObject, TransactionHash,
  TransactionIndex
} from "../interfaces/request";

export abstract class Requests {
  abstract getGasPrice(): RequestObject;
  abstract getBlockNumber(): RequestObject;

  abstract getLogs(filterOptions: FilterOptionsByBlockNumber): RequestObject;
  abstract getLogs(filterOptions: FilterOptionsByBlockHash): RequestObject;

  abstract getBlock(): RequestObject;
  abstract getBlock(blockNumber: BlockNumber): RequestObject;
  abstract getBlock(blockNumber: BlockNumber, returnTransactions: boolean): RequestObject;
  abstract getBlock(blockTag: BlockTag): RequestObject;
  abstract getBlock(blockTag: BlockTag, returnTransactions: boolean): RequestObject;
  abstract getBlock(blockHash: BlockHash): RequestObject;
  abstract getBlock(blockHash: BlockHash, returnTransactions: boolean): RequestObject;

  abstract getTransaction(transactionHash: TransactionHash): RequestObject;
  abstract getTransaction(blockNumber: BlockNumber, position?: TransactionIndex): RequestObject;
  abstract getTransaction(blockTag: BlockTag, position?: TransactionIndex): RequestObject;
  abstract getTransaction(blockHash: BlockHash, position?: TransactionIndex): RequestObject;

  abstract getTransactionReceipt(transactionHash: TransactionHash): RequestObject;

  abstract getBlockTransactionCount(): RequestObject;
  abstract getBlockTransactionCount(blockNumber: BlockNumber): RequestObject;
  abstract getBlockTransactionCount(blockTag: BlockTag): RequestObject;
  abstract getBlockTransactionCount(blockHash: BlockHash): RequestObject;

  abstract getTransactionCount(address: Address): RequestObject;
  abstract getTransactionCount(address: Address, blockNumber: BlockNumber): RequestObject;
  abstract getTransactionCount(address: Address, blockTag: BlockTag): RequestObject;

  abstract newFilter(filterOption: FilterOptionsByBlockNumber): RequestObject;
  abstract newFilter(filterOption: FilterOptionsByBlockHash): RequestObject;

  abstract newBlockFilter(): RequestObject;
  abstract newPendingTransactionFilter(): RequestObject;
  abstract uninstallFilter(filterId: FilterId): RequestObject;
  abstract getFilterChanges(filterId: FilterId): RequestObject;
  abstract getFilterLogs(filterId: FilterId): RequestObject;
}