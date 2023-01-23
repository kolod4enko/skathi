import { JsonRpcCallParams, JsonRpcResponse } from "../interfaces/jsonRpc";
import { RequestObject } from "../interfaces/request";
export declare class JsonRpc {
    readonly provider: string;
    constructor(provider: string);
    call<T>(params: JsonRpcCallParams): Promise<JsonRpcResponse<T>>;
    call(params: JsonRpcCallParams[]): Promise<JsonRpcResponse[]>;
    private toRequestObject;
}
export declare const jsonRpcBatchCall: (provider: string, requests: RequestObject[]) => Promise<JsonRpcResponse<any>[]>;
//# sourceMappingURL=jsonRpc.d.ts.map