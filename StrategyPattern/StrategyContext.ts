import { CalParam, DebateStrategy, NormalStrategy, ReturnStrategy, Strategy } from './Strategy';

export class StrategyContext {
    private _strategy: Strategy = null!;

    constructor(strategy: string) {
        if (strategy == 'normal') {
            this._strategy = new NormalStrategy();
        } else if (strategy == 'return') {
            this._strategy = new ReturnStrategy();
        } else if (strategy == 'debate') {
            this._strategy = new DebateStrategy();
        }
    }

    calculate(prize: number, param: CalParam): number {
        return this._strategy.doOperation(prize, param);
    }
}
