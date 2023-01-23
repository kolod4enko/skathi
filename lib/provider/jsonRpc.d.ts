import { Methods } from "../abstract/methods.abstract";
import { Address, Block, BlockHash, BlockNumber, BlockTag, BlockWithTransactions, FilterId, FilterOptionsByBlockHash, FilterOptionsByBlockNumber, Log, Transaction, TransactionHash, TransactionIndex, TransactionReceipt } from "../interfaces/request";
import { BaseProvider } from "./base";
export declare class JsonRpc extends BaseProvider implements Methods {
    private readonly client;
    constructor(provider: string);
    /** Get the current gas price in wei */
    getGasPrice(): Promise<number>;
    /** Get the number of the last confirmed block */
    getBlockNumber(): Promise<number>;
    getLogs(filters: FilterOptionsByBlockNumber): Promise<Log[]>;
    getLogs(filters: FilterOptionsByBlockHash): Promise<Log[]>;
    /**
     * Get block data by block number, hash or tag.
     * You can also request the data of transactions performed in this block
     */
    getBlock(): Promise<Block>;
    getBlock(blockNumber: BlockNumber): Promise<Block>;
    getBlock(blockNumber: BlockNumber, returnTransactions: boolean): Promise<Block | BlockWithTransactions>;
    getBlock(blockTag: BlockTag): Promise<Block>;
    getBlock(blockTag: BlockTag, returnTransactions: boolean): Promise<Block | BlockWithTransactions>;
    getBlock(blockHash: BlockHash): Promise<Block>;
    getBlock(blockHash: BlockHash, returnTransactions: boolean): Promise<Block | BlockWithTransactions>;
    /** Get transaction data by hash or block data in which it was performed */
    getTransaction(transactionHash: TransactionHash): Promise<Transaction>;
    getTransaction(blockNumber: BlockNumber, position?: TransactionIndex): Promise<Transaction>;
    getTransaction(blockTag: BlockTag, position?: TransactionIndex): Promise<Transaction>;
    getTransaction(blockHash: BlockHash, position?: TransactionIndex): Promise<Transaction>;
    getTransactionReceipt(transactionHash: TransactionHash): Promise<TransactionReceipt>;
    /** Get the number of transactions in a block by block number, hash or tag. */
    getBlockTransactionCount(): Promise<number>;
    getBlockTransactionCount(blockNumber: BlockNumber): Promise<number>;
    getBlockTransactionCount(blockTag: BlockTag): Promise<number>;
    getBlockTransactionCount(blockHash: BlockHash): Promise<number>;
    getTransactionCount(address: Address): Promise<number>;
    getTransactionCount(address: Address, blockNumber: BlockNumber): Promise<number>;
    getTransactionCount(address: Address, blockTag: BlockTag): Promise<number>;
    newFilter(filterOption: FilterOptionsByBlockNumber): Promise<number>;
    newFilter(filterOption: FilterOptionsByBlockHash): Promise<number>;
    newBlockFilter(): Promise<number>;
    newPendingTransactionFilter(): Promise<number>;
    uninstallFilter(filterId: FilterId): Promise<boolean>;
    getFilterChanges(filterId: FilterId): Promise<Log[]>;
    getFilterLogs(filterId: FilterId): Promise<Log[]>;
    private call;
}
//# sourceMappingURL=jsonRpc.d.ts.map