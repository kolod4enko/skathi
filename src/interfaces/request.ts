import { BlockHash, BlockNumber, BlockTag } from "./blockchain";
import { Methods } from './method';

export type FunctionFormatter = (data: any) => any;

export interface RequestObject {
  method: Methods;
  params?: any[];
  formatter: FunctionFormatter,
}

interface LogFilters {
  address?: string | string[],
  topics?: (string | string[])[],
}

export interface LogFiltersBlockNumber extends LogFilters {
  fromBlock?: BlockNumber | BlockTag,
  toBlock?: BlockNumber | BlockTag,
}

export interface LogFiltersBlockHash extends LogFilters {
  blockHash?: BlockHash;
}