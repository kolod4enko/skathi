import {
  BlockHash,
  BlockIdentifier,
  BlockNumber,
  BlockTag,
  BlockTagFull,
  TransactionHash,
  TransactionIndex
} from "../interfaces/blockchain";
import { Methods } from "../interfaces/method";
import {getHex, hexToNumber, isBlockTag, isHex, isNumber, numberToHex} from "../utils";
import {LogFiltersBlockHash, LogFiltersBlockNumber, RequestObject} from "../interfaces/request";
import * as formatter from "../formatters";

const getNetVersion = (): RequestObject => ({
  method: Methods.GetNetVersion,
  formatter: hexToNumber
})

const getGasPrice = (): RequestObject => ({
  method: Methods.GetGasPrice,
  formatter: hexToNumber
})

const getBlockNumber = (): RequestObject => ({
  method: Methods.GetBlockNumber,
  formatter: hexToNumber
})

function getBlock(blockNumber: BlockNumber, returnTransactions?: boolean): RequestObject;
function getBlock(blockTag: BlockTag, returnTransactions?: boolean): RequestObject;
function getBlock(blockHash: BlockHash, returnTransactions?: boolean): RequestObject;
function getBlock(identifier: BlockIdentifier, returnTransactions?: boolean): RequestObject;
function getBlock(identifier: BlockIdentifier, returnTransactions = false): RequestObject {
  if (!isNumber(identifier) && !isBlockTag(identifier) && !isHex(identifier)) {
    throw new Error('Invalid block hash or block tag');
  }

  identifier = isNumber(identifier) ? numberToHex(identifier) : identifier;
  returnTransactions = !!returnTransactions;

  return {
    method: isNumber(identifier) || isBlockTag(identifier)
      ? Methods.GetBlockByNumber
      : Methods.GetBlockByHash,
    params: [identifier, returnTransactions],
    formatter: returnTransactions
      ? formatter.blockWithTransactions
      : formatter.block
  }
}

function getBlockTransactionCount(blockNumber: BlockNumber): RequestObject;
function getBlockTransactionCount(blockTag: BlockTag): RequestObject;
function getBlockTransactionCount(blockHash: BlockHash): RequestObject;
function getBlockTransactionCount(identifier: BlockIdentifier): RequestObject;
function getBlockTransactionCount(identifier: BlockIdentifier): RequestObject {
  if (!isNumber(identifier) && !isBlockTag(identifier) && !isHex(identifier)) {
    throw new Error('Invalid block hash or block tag');
  }

  identifier = isNumber(identifier) ? numberToHex(identifier) : identifier;

  return {
    method: isNumber(identifier) || isBlockTag(identifier)
      ? Methods.GetBlockTransactionCountByNumber
      : Methods.GetBlockTransactionCountByHash,
    params: [identifier],
    formatter: hexToNumber
  }
}

function getTransaction(transactionHash: TransactionHash): RequestObject;
function getTransaction(blockNumber: BlockNumber, transactionIndex: TransactionIndex): RequestObject;
function getTransaction(blockTag: BlockTagFull, transactionIndex: TransactionIndex): RequestObject;
function getTransaction(blockHash: BlockHash, transactionIndex: TransactionIndex): RequestObject;
function getTransaction(identifier: TransactionHash | BlockIdentifier, transactionIndex?: TransactionIndex): RequestObject;
function getTransaction(identifier: TransactionHash | BlockIdentifier, transactionIndex?: TransactionIndex): RequestObject {
  if (transactionIndex) {
    if (!isNumber(identifier) && !isBlockTag(identifier) && !isHex(identifier)) {
      throw new Error('Invalid block hash or block tag');
    }

    identifier = isNumber(identifier) ? numberToHex(identifier) : identifier;

    return {
      method: isNumber(identifier) || isBlockTag(identifier)
        ? Methods.GetTransactionByBlockNumber
        : Methods.GetTransactionByBlockHash,
      params: [identifier, numberToHex(transactionIndex)],
      formatter: formatter.transaction,
    }
  }

  if (!isHex(identifier)) {
    throw new Error('Invalid transaction hash');
  }

  return {
    method: Methods.GetTransactionByHash,
    params: [identifier],
    formatter: formatter.transaction,
  }
}

const getTransactionReceipt = (transactionHash: TransactionHash): RequestObject => {
  if (!isHex(transactionHash)) {
    throw new Error('Invalid transaction hash');
  }

  return {
    method: Methods.GetTransactionReceipt,
    params: [transactionHash],
    formatter: formatter.transactionReceipt,
  }
}

function getUncle(blockNumber: BlockNumber, uncleIndex?: number): RequestObject;
function getUncle(blockTag: BlockTag, uncleIndex?: number): RequestObject;
function getUncle(blockHash: BlockHash, uncleIndex?: number): RequestObject;
function getUncle(identifier: BlockIdentifier, uncleIndex?: number): RequestObject;
function getUncle(identifier: BlockIdentifier, uncleIndex: number = 0): RequestObject {
  if (!isNumber(identifier) && !isBlockTag(identifier) && !isHex(identifier)) {
    throw new Error('Invalid block hash or block tag');
  }

  identifier = isNumber(identifier) ? numberToHex(identifier) : identifier;

  return {
    method: isNumber(identifier) || isBlockTag(identifier)
      ? Methods.GetUncleByBlockNumberAndIndex
      : Methods.GetUncleByBlockHashAndIndex,
    params: [identifier, numberToHex(uncleIndex)],
    formatter: formatter.block
  }
}

function getUncleCount(blockNumber: BlockNumber): RequestObject;
function getUncleCount(blockTag: BlockTag): RequestObject;
function getUncleCount(blockHash: BlockHash): RequestObject;
function getUncleCount(identifier: BlockIdentifier): RequestObject;
function getUncleCount(identifier: BlockIdentifier): RequestObject {
  if (!isNumber(identifier) && !isBlockTag(identifier) && !isHex(identifier)) {
    throw new Error('Invalid block hash or block tag');
  }

  identifier = isNumber(identifier) ? numberToHex(identifier) : identifier;

  return {
    method: isNumber(identifier) || isBlockTag(identifier)
      ? Methods.GetUncleCountByBlockNumber
      : Methods.GetUncleCountByBlockHash,
    params: [identifier],
    formatter: hexToNumber
  }
}

function getLogs(filters: LogFiltersBlockNumber): RequestObject;
function getLogs(filters: LogFiltersBlockHash): RequestObject;
function getLogs(filters: LogFiltersBlockNumber | LogFiltersBlockHash): RequestObject {
  const params: {
    fromBlock?: string,
    toBlock?: string,
    blockhash?: string,
    address?: string | string[],
    topics?: (string | string[])[],
  } = {};

  if ("fromBlock" in filters && filters.fromBlock) {
    if (!isNumber(filters.fromBlock) && !isBlockTag(filters.fromBlock)) {
      throw new Error('Invalid block tag');
    }

    params.fromBlock = isNumber(filters.fromBlock) ? numberToHex(filters.fromBlock) : <string>filters.fromBlock;
  }

  if ("toBlock" in filters && filters.toBlock) {
    if (!isNumber(filters.fromBlock) && !isBlockTag(filters.fromBlock)) {
      throw new Error('Invalid block tag');
    }

    params.toBlock = isNumber(filters.toBlock) ? numberToHex(filters.toBlock) : <string>filters.toBlock;
  }

  if ("blockHash" in filters && filters.blockHash) {
    params.blockhash = getHex(filters.blockHash, 'Invalid block hash');
  }

  if (filters.address) {
    params.address = getHex(filters.address, 'Invalid address');
  }

  if (filters.topics) {
    params.topics = getHex(filters.topics, 'Invalid topics')
  }

  return {
    method: Methods.GetLogs,
    params: [params],
    formatter: formatter.log,
  }
}

export const requests = {
  getNetVersion,
  getGasPrice,
  getBlockNumber,
  getBlock,
  getBlockTransactionCount,
  getTransaction,
  getTransactionReceipt,
  getUncle,
  getUncleCount,
  getLogs
}