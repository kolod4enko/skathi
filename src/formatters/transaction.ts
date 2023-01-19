import * as origin from '../interfaces/blockchain';
import * as request from '../interfaces/request'

import { hexToNumber } from "./utils";

export const transaction = (transaction: origin.Transaction): request.Transaction => ({
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

export const transactionReceipt = (transaction: origin.TransactionReceipt): request.TransactionReceipt => ({
  transactionHash: transaction.transactionHash,
  transactionIndex: hexToNumber(transaction.transactionIndex),
  blockHash: transaction.blockHash,
  blockNumber: hexToNumber(transaction.blockNumber),
  from: transaction.from,
  to: transaction.to ? transaction.to : null,
  contractAddress: transaction.contractAddress ? transaction.contractAddress : null,
  cumulativeGasUsed: hexToNumber(transaction.cumulativeGasUsed),
  effectiveGasPrice: hexToNumber(transaction.effectiveGasPrice),
  gasUsed: hexToNumber(transaction.gasUsed),
  logsBloom: transaction.logsBloom,
  logs: transaction.logs.map(transactionReceiptLog),
  status: hexToNumber(transaction.status),
  type: hexToNumber(transaction.type),
})

export const transactionReceiptLog = (log: origin.TransactionReceiptLog): request.TransactionReceiptLog => ({
  address: log.address,
  topics: log.topics,
  data: log.data,
  blockHash: log.blockHash,
  blockNumber: hexToNumber(log.blockNumber),
  transactionHash: log.transactionHash,
  logIndex: hexToNumber(log.logIndex),
  transactionIndex: hexToNumber(log.transactionIndex),
  removed: log.removed
})