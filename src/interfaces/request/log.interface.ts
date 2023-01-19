import { TransactionHash, TransactionIndex } from "./transaction.interface";
import { BlockHash, BlockNumber, BlockTag } from "./block.interface";
import { Address } from "./main.interface";

export type LogIndex = number;
export type FilterId = number;

interface BaseFilterOptions {
  /** The address of the contract or array of addresses that emitted the event (or `null` for all addresses) */
  address?: string | string[];

  /** The topics of the event (or `null` for all topics) */
  topics?: (string | string[])[];
}

export interface FilterOptionsByBlockNumber extends BaseFilterOptions {
  /** Number or tag of the block at which the event was emitted (or `null` for all blocks) */
  fromBlock?: BlockNumber | BlockTag;

  /** Number or tag of the block at which the event was emitted (or `null` for all blocks) */
  toBlock?: BlockNumber | BlockTag;
}

export interface FilterOptionsByBlockHash extends BaseFilterOptions {
  /** The block hash of the event (or `null` for all blocks) */
  blockHash?: string;
}

export interface Log {
  /** The address of the contract that emitted the event */
  address: Address;

  /** The topics of the event */
  topics: string[];

  /** The data of the event */
  data: string;

  /** The block hash of the block that the event was mined in (null when its pending log) */
  blockHash?: BlockHash;

  /** The block number of the block that the event was mined in (null when its pending log) */
  blockNumber?: BlockNumber;

  /** The transaction hash of the transaction that the event was created in (null when its pending log) */
  transactionHash?: TransactionHash;

  /** The transaction index of the event within the block (null when its pending log) */
  transactionIndex?: TransactionIndex;

  /** The log index of the event within the transaction (null when its pending log) */
  logIndex?: LogIndex;
}
