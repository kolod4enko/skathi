import { Transaction } from "./transaction.interface";
interface BlockHeader {
    /** The block number (null when it's a pending block) */
    number?: string;
    /** 32 bytes - the hash of the block (null when it's a pending block) */
    hash?: string;
    /** 32 bytes - the hash of the parent block */
    parentHash: string;
    /** 8 bytes - the hash of the generated proof-of-work (null when it's a pending block) */
    nonce?: string;
    /** 32 bytes - SHA3 of the uncles data in the block */
    sha3Uncles: string;
    /** 256 bytes - the bloom filter for the logs of the block (null when it's a pending block) */
    logsBloom?: string;
    /** 32 bytes - the root of the transaction trie of the block */
    transactionsRoot: string;
    /** 32 bytes - the root of the final state trie of the block */
    stateRoot: string;
    /** 32 bytes - the root of the receipts trie of the block */
    receiptRoot: string;
    /** The address of the beneficiary to whom the mining rewards were given */
    miner: string;
    /** The difficulty of this block */
    difficulty: string;
    /** The total difficulty of the chain until this block */
    totalDifficulty: string;
    /** The "extra data" field of this block */
    extraData: string;
    /** The size of this block in bytes */
    size: string;
    /** he maximum gas allowed in this block */
    gasLimit: string;
    /** The total used gas by all transactions in this block */
    gasUsed: string;
    /** The unix timestamp for when the block was collated */
    timestamp: string;
    /** Array of uncle hashes */
    uncles: string[];
}
export interface Block extends BlockHeader {
    /** Array of transaction objects, or 32 bytes transaction hashes depending on the last given parameter */
    transactions: string[];
}
export interface BlockWithTransactions extends BlockHeader {
    transactions: Transaction[];
}
export {};
//# sourceMappingURL=block.interface.d.ts.map