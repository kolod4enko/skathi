export type TransactionHash = string;
export type TransactionIndex = number;

export interface Transaction {
  /** Transaction hash */
  hash: string;

  /** Transaction nonce */
  nonce: number;

  /** Hash of the block where this transaction was included (null when the transaction is pending) */
  blockHash?: string;

  /** Number of the block where this transaction was included (null when the transaction is pending) */
  blockNumber?: number;

  /** Index of the transaction within the block (null when the transaction is pending) */
  transactionIndex?: number;

  /** Ethereum address of the sender */
  from: string;

  /** Ethereum address of the recipient */
  to?: string;

  /** Amount transferred in wei */
  value: number;

  /** Gas price in wei */
  gasPrice: number;

  /** Gas limit */
  gas: number;

  /** Input data */
  input: string;

  /** Signature v parameter */
  v: string;

  /** Signature r parameter */
  r: string;

  /** Signature s parameter */
  s: string;
}

export interface TransactionReceipt {
  /** Hash of the transaction */
  transactionHash: string;

  /** Index of the transaction within the block */
  transactionIndex: number;

  /** Hash of the block where this transaction was included */
  blockHash: string;

  /** Number of the block where this transaction was included */
  blockNumber: number;

  /** The address of the account that sent the transaction */
  from: string;

  /** The address of the account that the transaction was sent to */
  to?: string;

  /** Ethereum address of the contract that was created (if applicable) */
  contractAddress?: string;

  /** The total amount of gas used by this transaction and all previous transactions in the same block */
  cumulativeGasUsed: number;

  /** The actual gas price that was used for the transaction */
  effectiveGasPrice: number;

  /** Cumulative gas used */
  gasUsed: number

  /** Bloom filter for light clients to quickly retrieve related logs */
  logsBloom: string;

  /** An array of log objects, which contain information about events that were triggered by this transaction */
  logs: TransactionReceiptLog[];

  /** Status of the transaction, either 1 for success or 0 for failure */
  status: number;

  /** Indicates the type of transaction or action that was performed by the transaction */
  type: number;
}

export interface TransactionReceiptLog {
  /** The address of the contract that generated the log */
  address: string;

  /** An array of 32-byte log topics */
  topics: string[];

  /** The data in the log */
  data: string;

  /** The block hash the log was created in */
  blockHash: string;

  /** The block number the log was created in */
  blockNumber: number;

  /** The transaction hash the log was created in */
  transactionHash: string;

  /** The log index position in the block */
  logIndex: number;

  /** The index of the transaction within the block */
  transactionIndex: number;

  /** Indicate if the smart contract is removed or the transaction removed due to a gas-price penalization mechanism */
  removed: boolean;
}