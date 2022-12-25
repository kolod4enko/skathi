import {
  Block,
  Transaction,
  BlockWithTransactions,
  OriginBlock,
  OriginTransaction,
  OriginBlockWithTransactions, BlockHeader
} from "./interfaces/blockchain";
import { hexToNumber } from "./utils";

const blockHeaderFormatter = (block: OriginBlock | OriginBlockWithTransactions): BlockHeader => ({
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
})

export const blockFormatter = (block: OriginBlock): Block => ({
  ...blockHeaderFormatter(block),
  transactions: block.transactions,
})

export const blockWithTransactionsFormatter = (block: OriginBlockWithTransactions): BlockWithTransactions => ({
  ...blockHeaderFormatter(block),
  transactions: block.transactions.map(transactionFormatter)
});

export const transactionFormatter = (transaction: OriginTransaction): Transaction => ({
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
})