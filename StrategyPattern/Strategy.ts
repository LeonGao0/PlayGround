type ReturnData = {
    threshold: number;
    ret: number;
};

export interface CalParam {
    debate?: number;
    return?: ReturnData;
}

export abstract class Strategy {
    abstract doOperation(prize: number, param: CalParam): number;
}

/** 原价策略 */
export class NormalStrategy extends Strategy {
    doOperation(prize: number, param: CalParam): number {
        return prize;
    }
}

/** 打折策略 */
export class DebateStrategy extends Strategy {
    doOperation(prize: number, param: CalParam): number {
        return prize * (param.debate as number);
    }
}

/** 满减策略 */
export class ReturnStrategy extends Strategy {
    doOperation(prize: number, param: CalParam): number {
        let retData: ReturnData = param.return as ReturnData;
        if (prize >= retData.threshold) {
            return (prize -= retData.ret);
        }
        return prize;
    }
}
