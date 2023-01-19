import {
  Address, Block,
  BlockHash,
  BlockNumber,
  BlockTag,
  BlockWithTransactions,
  FilterId,
  FilterOptionsByBlockHash,
  FilterOptionsByBlockNumber,
  Log,
  Transaction,
  TransactionHash,
  TransactionIndex, TransactionReceipt
} from "../interfaces/request";

export abstract class Methods {
  abstract getGasPrice(): Promise<number>;
  abstract getBlockNumber(): Promise<number>;

  abstract getLogs(filterOptions: FilterOptionsByBlockNumber): Promise<Log[]>;
  abstract getLogs(filterOptions: FilterOptionsByBlockHash): Promise<Log[]>;

  abstract getBlock(): Promise<Block>;
  abstract getBlock(blockNumber: BlockNumber): Promise<Block>;
  abstract getBlock(blockNumber: BlockNumber, returnTransactions: boolean): Promise<Block | BlockWithTransactions>;
  abstract getBlock(blockTag: BlockTag): Promise<Block>;
  abstract getBlock(blockTag: BlockTag, returnTransactions: boolean): Promise<Block | BlockWithTransactions>;
  abstract getBlock(blockHash: BlockHash): Promise<Block>;
  abstract getBlock(blockHash: BlockHash, returnTransactions: boolean): Promise<Block | BlockWithTransactions>;

  abstract getTransaction(transactionHash: TransactionHash): Promise<Transaction>;
  abstract getTransaction(blockNumber: BlockNumber, position?: TransactionIndex): Promise<Transaction>;
  abstract getTransaction(blockTag: BlockTag, position?: TransactionIndex): Promise<Transaction>;
  abstract getTransaction(blockHash: BlockHash, position?: TransactionIndex): Promise<Transaction>;

  abstract getTransactionReceipt(transactionHash: TransactionHash): Promise<TransactionReceipt>;

  abstract getBlockTransactionCount(): Promise<number>;
  abstract getBlockTransactionCount(blockNumber: BlockNumber): Promise<number>;
  abstract getBlockTransactionCount(blockTag: BlockTag): Promise<number>;
  abstract getBlockTransactionCount(blockHash: BlockHash): Promise<number>;

  abstract getTransactionCount(address: Address): Promise<number>;
  abstract getTransactionCount(address: Address, blockNumber: BlockNumber): Promise<number>;
  abstract getTransactionCount(address: Address, blockTag: BlockTag): Promise<number>;

  abstract newFilter(filterOption: FilterOptionsByBlockNumber): Promise<number>;
  abstract newFilter(filterOption: FilterOptionsByBlockHash): Promise<number>;

  abstract newBlockFilter(): Promise<number>;
  abstract newPendingTransactionFilter(): Promise<number>;
  abstract uninstallFilter(filterId: FilterId): Promise<boolean>;
  abstract getFilterChanges(filterId: FilterId): Promise<Log[]>;
  abstract getFilterLogs(filterId: FilterId): Promise<Log[]>;
}