export interface Log {
    /** The address of the contract that emitted the event */
    address: string;
    /** The topics of the event */
    topics: string[];
    /** The data of the event */
    data: string;
    /** The block hash of the block that the event was mined in (null when its pending log) */
    blockHash?: string;
    /** The block number of the block that the event was mined in (null when its pending log) */
    blockNumber?: string;
    /** The transaction hash of the transaction that the event was created in (null when its pending log) */
    transactionHash?: string;
    /** The transaction index of the event within the block (null when its pending log) */
    transactionIndex?: string;
    /** The log index of the event within the transaction (null when its pending log) */
    logIndex?: string;
}
//# sourceMappingURL=log.interface.d.ts.map