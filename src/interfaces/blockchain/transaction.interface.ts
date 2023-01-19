export interface Transaction {
  /** 32 bytes - hash of the transaction */
  hash: string;

  /** The number of transactions made by the sender prior to this one */
  nonce: string;

  /** 32 bytes - hash of the block where this transaction was in (null when the transaction is pending) */
  blockHash?: string;

  /** Block number where this transaction was in (null when the transaction is pending) */
  blockNumber?: string;

  /** Integer of the transactions index position in the block (null when the transaction is pending) */
  transactionIndex?: string;

  /** 20 bytes - address of the sender */
  from: string;

  /** 20 bytes - address of the receiver. Null when it's a contract creation transaction */
  to?: string;

  /** Value transferred in Wei */
  value: string;

  /** Gas price provided by the sender in Wei */
  gasPrice: string;

  /** Gas provided by the sender */
  gas: string;

  /** The data sent along with the transaction */
  input: string;

  /** The "r" value of the digital signature */
  r: string;

  /** The "s" value of the digital signature */
  s: string;

  /** The "v" value of the digital signature */
  v: string;
}

export interface TransactionReceipt {
  /** The hash of the transaction */
  transactionHash: string;

  /** The index of the transaction within the block */
  transactionIndex: string;

  /** The hash of the block that the transaction was included in */
  blockHash: string;

  /** The number of the block that the transaction was included in */
  blockNumber: string;

  /** The address of the account that sent the transaction */
  from: string;

  /** The address of the account that the transaction was sent to */
  to?: string;

  /** The address of the contract that was created or interacted with in the transaction, if applicable */
  contractAddress?: string;

  /** The total amount of gas used by this transaction and all previous transactions in the same block */
  cumulativeGasUsed: string;

  /** The actual gas price that was used for the transaction */
  effectiveGasPrice: string;

  /** The amount of gas used by this transaction */
  gasUsed: string;

  /** Bloom filter for light clients to quickly retrieve related logs */
  logsBloom: string;

  /** An array of log objects, which contain information about events that were triggered by this transaction */
  logs: TransactionReceiptLog[];

  /** A boolean indicating whether the transaction was successful or not */
  status: string;

  /** Indicates the type of transaction or action that was performed by the transaction */
  type: string;
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
  blockNumber: string;

  /** The transaction hash the log was created in */
  transactionHash: string;

  /** The log index position in the block */
  logIndex: string;

  /** The index of the transaction within the block */
  transactionIndex: string;

  /** Indicate if the smart contract is removed or the transaction removed due to a gas-price penalization mechanism */
  removed: boolean;
}
