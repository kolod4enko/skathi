import { Transaction } from "./transaction.interface";
export declare enum EBlockTag {
    earliest = "earliest",
    latest = "latest",
    pending = "pending"
}
export declare enum EBlockTagFull {
    earliest = "earliest",
    latest = "latest",
    pending = "pending",
    safe = "safe",
    finalized = "finalized"
}
export declare type BlockNumber = number;
export declare type BlockHash = string;
export declare type BlockTag = keyof typeof EBlockTag;
export declare type BlockTagFull = keyof typeof EBlockTagFull;
export declare type BlockIdentifier = BlockNumber | BlockTagFull | BlockHash;
export interface BlockHeader {
    /** Block number (null when it's a pending block) */
    number?: BlockNumber;
    /** Block hash (null when it's a pending block) */
    hash?: BlockHash;
    /** Hash of the parent block */
    parentHash: BlockHash;
    /** Block nonce (null when it's a pending block) */
    nonce?: number;
    /** sha3 of uncles */
    sha3Uncles: string;
    /** Bloom filter for logs (null when it's a pending block) */
    logsBloom?: string;
    /** Root of the transaction trie */
    transactionsRoot: string;
    /** Root of the state trie */
    stateRoot: string;
    /** Root of the receipt trie */
    receiptRoot: string;
    /** Ethereum address of the miner */
    miner: string;
    /** Block difficulty */
    difficulty: number;
    /** Total difficulty of the chain until this block */
    totalDifficulty: number;
    /** Extra data */
    extraData: string;
    /** Block size */
    size: number;
    /** Maximum gas limit */
    gasLimit: number;
    /** Gas used */
    gasUsed: number;
    /** Block timestamp */
    timestamp: number;
    /** List of uncles in the block */
    uncles: string[];
}
export interface Block extends BlockHeader {
    /** List of transactions in the block */
    transactions: string[];
}
export interface BlockWithTransactions extends BlockHeader {
    /** List of transactions in the block */
    transactions: Transaction[];
}
//# sourceMappingURL=block.interface.d.ts.map