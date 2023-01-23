import * as origin from '../interfaces/blockchain';
import * as request from '../interfaces/request'

import {assertNotNull, getHex, hexToNumber, isNumber, numberToHex} from "./utils";
import { transaction } from "./transaction";

export const isBlockTag = (data: any, full = false): boolean => {
  switch (data) {
    case request.EBlockTag.latest:
    case request.EBlockTag.pending:
    case request.EBlockTag.earliest:
      return true;
    case request.EBlockTagFull.safe:
    case request.EBlockTagFull.finalized:
      return full;
    default:
      return false;
  }
}

export const getBlockIdentifier = (value: any): string => {
  assertNotNull(value);

  if (isNumber(value)) {
    return numberToHex(value);
  }

  if (isBlockTag(value, true)) {
    return value;
  }

  return getHex(value);
}

const blockHeader = (block: origin.Block | origin.BlockWithTransactions): request.BlockHeader => ({
  number: block.number ? hexToNumber(block.number) : null,
  hash: block.hash,
  parentHash: block.parentHash,
  nonce: block.nonce ? hexToNumber(block.nonce) : null,
  sha3Uncles: block.sha3Uncles,
  logsBloom: block.logsBloom ? block.logsBloom : null,
  transactionsRoot: block.transactionsRoot,
  stateRoot: block.stateRoot,
  receiptRoot: block.receiptRoot,
  miner: block.miner,
  difficulty: hexToNumber(block.difficulty),
  totalDifficulty: hexToNumber(block.totalDifficulty),
  extraData: block.extraData,
  size: hexToNumber(block.size),
  gasLimit: hexToNumber(block.gasLimit),
  gasUsed: hexToNumber(block.gasUsed),
  timestamp: hexToNumber(block.timestamp),
  uncles: block.uncles
});

export const block = (block: origin.Block): request.Block => ({
  ...blockHeader(block),
  transactions: block.transactions,
});

export const blockWithTransactions = (block: origin.BlockWithTransactions): request.BlockWithTransactions => ({
  ...blockHeader(block),
  transactions: block.transactions.map(transaction)
});