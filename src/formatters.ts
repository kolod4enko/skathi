import {
  Block,
  Transaction,
  BlockWithTransactions,
  OriginBlock,
  OriginTransaction,
  OriginBlockWithTransactions,
  BlockHeader,
  TransactionReceiptLogs,
  TransactionReceipt,
  OriginTransactionReceipt,
  OriginTransactionReceiptLogs,
  OriginLog,
  Log
} from "./interfaces/blockchain";
import { hexToNumber } from "./utils";

const blockHeader = (block: OriginBlock | OriginBlockWithTransactions): BlockHeader => ({
  number: block.number ? hexToNumber(block.number) : null,
  hash: block.hash,
  parentHash: block.hash,
  nonce: block.nonce ? hexToNumber(block.nonce) : null,
  sha3Uncles: block.hash,
  logsBloom: block.hash,
  transactionsRoot: block.hash,
  stateRoot: block.hash,
  receiptsRoot: block.hash,
  difficulty: hexToNumber(block.difficulty),
  totalDifficulty: hexToNumber(block.totalDifficulty),
  extraData: block.hash,
  size: hexToNumber(block.size),
  gasLimit: hexToNumber(block.gasLimit),
  gasUsed: hexToNumber(block.gasUsed),
  timestamp: hexToNumber(block.timestamp),
  uncles: block.uncles,
});

export const block = (block: OriginBlock): Block => ({
  ...blockHeader(block),
  transactions: block.transactions,
});

export const blockWithTransactions = (block: OriginBlockWithTransactions): BlockWithTransactions => ({
  ...blockHeader(block),
  transactions: block.transactions.map(transaction)
});

export const transaction = (transaction: OriginTransaction): Transaction => ({
  hash: transaction.hash,
  nonce: hexToNumber(transaction.nonce),
  from: transaction.from,
  to: transaction.to,
  value: hexToNumber(transaction.value),
  gas: hexToNumber(transaction.gas),
  gasPrice: hexToNumber(transaction.gasPrice),
  input: transaction.input,
  blockHash: transaction.blockHash,
  blockNumber: transaction.blockNumber ? hexToNumber(transaction.blockNumber) : null,
  transactionIndex: transaction.transactionIndex ? hexToNumber(transaction.transactionIndex): null,
  r: transaction.r,
  s: transaction.s,
  v: transaction.v,
});

export const transactionReceipt = (transaction: OriginTransactionReceipt): TransactionReceipt => ({
  transactionHash: transaction.transactionHash,
  transactionIndex: hexToNumber(transaction.transactionIndex),
  blockHash: transaction.blockHash,
  blockNumber: hexToNumber(transaction.blockNumber),
  from: transaction.from,
  to: transaction.to ? transaction.to : null,
  cumulativeGasUsed: hexToNumber(transaction.cumulativeGasUsed),
  effectiveGasPrice: hexToNumber(transaction.effectiveGasPrice),
  gasUsed: hexToNumber(transaction.gasUsed),
  contractAddress: transaction.contractAddress ? transaction.contractAddress : null,
  logs: transactionReceiptLog(transaction.logs),
  logsBloom: transaction.logsBloom,
  type: hexToNumber(transaction.type),
  root: transaction.root ? hexToNumber(transaction.root) : null,
  status: hexToNumber(transaction.status),
})

export const transactionReceiptLog = (log: OriginTransactionReceiptLogs): TransactionReceiptLogs => ({
  transactionHash: log.transactionHash,
  transactionIndex: hexToNumber(log.transactionIndex),
  address: log.address,
  blockHash: log.blockHash,
  blockNumber: hexToNumber(log.blockNumber),
  data: log.data,
  logIndex: hexToNumber(log.logIndex),
  removed: log.removed,
  topics: log.topics
})

export const log = (log: OriginLog): Log => ({
  address: log.address,
  topics: log.topics,
  data: log.data,
  logIndex: hexToNumber(log.logIndex),
  blockNumber: log.blockNumber ? hexToNumber(log.blockNumber) : null,
  blockHash: log.blockNumber ? log.blockHash : null,
  transactionHash: log.transactionHash,
  transactionIndex: hexToNumber(log.transactionIndex),
})