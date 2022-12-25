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
import { hexToNumber, isBlockTag, isNumber, numberToHex, toLowerCase } from "../utils";
import { RequestObject } from "../interfaces/request";
import { blockFormatter, blockWithTransactionsFormatter, transactionFormatter } from "../formatters";

const getNetVersion = (): RequestObject => ({
  method: Methods.GetNetVersion,
  params: [],
  outputFormatter: hexToNumber
});

const getBlockNumber = (): RequestObject => ({
  method: Methods.GetBlockNumber,
  params: [],
  outputFormatter: hexToNumber
})

function getBlock(blockNumber: BlockNumber, returnTransactions?: boolean): RequestObject;
function getBlock(blockTag: BlockTag, returnTransactions?: boolean): RequestObject;
function getBlock(blockHash: BlockHash, returnTransactions?: boolean): RequestObject;
function getBlock(identifier: BlockIdentifier, returnTransactions?: boolean): RequestObject;
function getBlock(identifier: BlockIdentifier, returnTransactions = false): RequestObject {
  const method = isNumber(identifier) || isBlockTag(identifier)
    ? Methods.GetBlockByNumber
    : Methods.GetBlockByHash;
  const inputFormatter = isNumber(identifier) ? numberToHex : toLowerCase;

  return {
    method,
    params: [identifier, returnTransactions],
    inputFormatter: [inputFormatter],
    outputFormatter: returnTransactions ? blockWithTransactionsFormatter : blockFormatter
  }
}

function getTransaction(transactionHash: TransactionHash): RequestObject;
function getTransaction(blockNumber: BlockNumber, transactionIndex: TransactionIndex): RequestObject;
function getTransaction(blockTag: BlockTagFull, transactionIndex: TransactionIndex): RequestObject;
function getTransaction(blockHash: BlockHash, transactionIndex: TransactionIndex): RequestObject;
function getTransaction(identifier: TransactionHash | BlockIdentifier, transactionIndex?: TransactionIndex): RequestObject;
function getTransaction(identifier: TransactionHash | BlockIdentifier, transactionIndex?: TransactionIndex): RequestObject {
  const inputFormatter = isNumber(identifier) ? numberToHex : toLowerCase;

  if (transactionIndex) {
    const index = numberToHex(transactionIndex);
    const method = isNumber(identifier) || isBlockTag(identifier)
        ? Methods.GetTransactionByBlockNumber
        : Methods.GetTransactionByBlockHash;

    return {
      method,
      params: [identifier, index],
      inputFormatter: [inputFormatter],
      outputFormatter: transactionFormatter
    };
  }

  return {
    method: Methods.GetTransactionByHash,
    params: [<TransactionHash>identifier],
    inputFormatter: [inputFormatter],
    outputFormatter: null
  };
}

export const requests = {
  getNetVersion,
  getBlockNumber,
  getBlock,
  getTransaction
}
