export type BlockNumber = number;
export type BlockHash = string;
export type BlockTag = 'earliest' | 'latest' | 'pending';
export type BlockTagFull = BlockTag | 'safe' | 'finalized';
export type BlockIdentifier = BlockNumber | BlockTagFull | BlockHash;

export type TransactionHash = string;
export type TransactionIndex = number;

export interface BlockHeader {
  // The block number, null when its pending
  number: BlockNumber | null;
  // The block hash, null when its pending
  hash: BlockHash | null;
  // Hash of the parent block.
  parentHash: string;
  //  Hash of the generated proof-of-work, null when its pending block
  nonce: number | null;
  // SHA3 of the uncles' data in the block
  sha3Uncles: string;
  // The bloom filter for the logs of the block. null when its pending block.
  logsBloom: string;
  // The root of the transaction trie of the block
  transactionsRoot: string;
  // The root of the final state trie of the block
  stateRoot: string;
  // The root of the receipts trie of the block
  receiptsRoot: string;
  // Integer of the difficulty for this block
  difficulty: number;
  // Integer of the total difficulty of the chain until this block
  totalDifficulty: number;
  // The "extra data" field of this block
  extraData: string;
  // Integer the size of this block in bytes
  size: number;
  // The maximum gas allowed in this block
  gasLimit: number;
  // The total used gas by all transactions in this block
  gasUsed: number;
  // The unix timestamp for when the block was collated
  timestamp: number;
  // Array of uncle hashes
  uncles: string[];
}

export interface Block extends BlockHeader {
  // Array of transaction hashes
  transactions: string[];
}

export interface BlockWithTransactions extends BlockHeader {
  // Array of transaction objects
  transactions: Transaction[];
}

export interface Transaction {
  hash: string;
  nonce: number;
  from: string;
  to?: string;
  value: number; // TODO заменить на BigInt
  gas: number; // TODO заменить на BigInt
  gasPrice: number; // TODO заменить на BigInt
  input: string;
  // null when block is pending
  blockHash: string | null;
  // null when block is pending
  blockNumber: number | null;
  // null when block is pending
  transactionIndex?: number;
  r: string;
  s: string;
  v: string;
}

export interface OriginBlockHeader {
  number: string | null;
  hash: string | null;
  parentHash: string;
  nonce: string | null;
  sha3Uncles: string;
  logsBloom: string;
  transactionsRoot: string;
  stateRoot: string;
  receiptsRoot: string;
  difficulty: string;
  totalDifficulty: string;
  extraData: string;
  size: string;
  gasLimit: string;
  gasUsed: string;
  timestamp: string;
  uncles: string[];
  miner: string;
  mixHash: string;
}

export interface OriginBlock extends OriginBlockHeader {
  transactions: string[];
}

export interface OriginBlockWithTransactions extends OriginBlockHeader {
  transactions: OriginTransaction[];
}

export interface OriginTransaction {
  hash: string;
  nonce: string;
  from: string;
  to?: string;
  value: string;
  gas: string;
  gasPrice: string;
  input: string;
  blockHash: string | null;
  blockNumber: string | null;
  transactionIndex?: string;
  r: string;
  s: string;
  v: string;
  index: string;
  l1BlockNumber: string;
  l1Timestamp: string;
  queueOrigin: string;
  rawTransaction: string;
}
