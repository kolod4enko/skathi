import { Method, ErrorCode } from "../blockchain";
declare type Version = "2.0";
declare type ID = string | number;
export declare type Params = any[];
export interface JsonRpcCallParams {
    /**
     * The name of the JSON-RPC method to call.
     */
    method: Method;
    /**
     * The parameters to pass to the method.
     */
    params?: Params;
}
export interface JsonRpcRequestObject {
    /**
     * The JSON-RPC version.
     */
    jsonrpc: Version;
    /**
     * The method to be invoked.
     */
    method: Method;
    /**
     * The parameters for the method.
     */
    params?: Params;
    /**
     * The request ID. This can be any valid JSON value.
     */
    id: ID;
}
export interface JsonRpcSuccessResponse<T extends any> {
    /**
     * The JSON-RPC version.
     */
    jsonrpc: Version;
    /**
     * The result of the method invocation.
     */
    result: T;
    /**
     * The request ID. This must be the same as the request ID in the corresponding request object.
     */
    id: ID;
}
export interface JsonRpcErrorResponse {
    /**
     * The JSON-RPC version.
     */
    jsonrpc: Version;
    /**
     * The error object.
     */
    error: JsonRpcError;
    /**
     * The request ID. This must be the same as the request ID in the corresponding request object.
     */
    id: ID;
}
interface JsonRpcError {
    /**
     * The error code.
     */
    code: ErrorCode;
    /**
     * The error message.
     */
    message: string;
    /**
     * Additional data about the error.
     */
    data?: any;
}
export declare type JsonRpcResponse<T extends any = any> = JsonRpcSuccessResponse<T> | JsonRpcErrorResponse;
export {};
//# sourceMappingURL=main.interface.d.ts.map