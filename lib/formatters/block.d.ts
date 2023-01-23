import * as origin from '../interfaces/blockchain';
import * as request from '../interfaces/request';
export declare const isBlockTag: (data: any, full?: boolean) => boolean;
export declare const getBlockIdentifier: (value: any) => string;
export declare const block: (block: origin.Block) => request.Block;
export declare const blockWithTransactions: (block: origin.BlockWithTransactions) => request.BlockWithTransactions;
//# sourceMappingURL=block.d.ts.map