import * as origin from '../interfaces/blockchain';
import * as request from '../interfaces/request';

import {getAddress, getTopics, hexToNumber} from "./utils";
import {getBlockIdentifier} from "./block";

export const filterOptions = (data: any): request.FilterOptionsByBlockNumber | request.FilterOptionsByBlockHash => {
  if ('fromBlock' in data && data.fromBlock) {
    data.fromBlock = getBlockIdentifier(data.fromBlock)
  }

  if ('toBlock' in data && data.toBlock) {
    data.toBlock = getBlockIdentifier(data.toBlock)
  }

  if ('blockHash' in data && data.blockHash) {
    data.blockHash = getBlockIdentifier(data.blockHash)
  }

  if (data.address) {
    data.address = getAddress(data.address);
  }

  if (data.topics) {
    data.topics = getTopics(data.topics);
  }

  return data;
}

export const log = (data: origin.Log): request.Log => ({
  address: data.address,
  topics: data.topics,
  data: data.data,
  blockHash: data.blockHash,
  blockNumber: hexToNumber(data.blockNumber),
  transactionHash: data.transactionHash,
  transactionIndex: hexToNumber(data.transactionIndex),
  logIndex: hexToNumber(data.logIndex)
})