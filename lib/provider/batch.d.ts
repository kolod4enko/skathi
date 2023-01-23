import { RequestObject } from "../interfaces/request";
import * as req from "../services/requests";
import { BaseProvider } from './base';
export declare class Batch extends BaseProvider {
    requests: req.Requests;
    private _requests;
    /** Adds a request to the pool */
    add(request: RequestObject): void;
    /** Clears the request pool */
    clear(): void;
    /** Executes the requests in the pool */
    execute(): Promise<any[]>;
    execute(requests: RequestObject[]): Promise<any[]>;
}
//# sourceMappingURL=batch.d.ts.map