import { Method } from "../blockchain";
import { Params } from "../jsonRpc";
export declare type Address = string;
export declare type Formatter = (value: any) => any;
export interface RequestObject {
    method: Method;
    params: Params;
    formatter: Formatter;
}
//# sourceMappingURL=main.interface.d.ts.map