import { CalParam } from './Strategy';
import { StrategyContext } from './StrategyContext';
/**
 * 銀行收銀系統，有不用的打折策略
 * 1、原價收銀
 * 2、打折收銀
 * 3、滿減
 */
let prize: number = 100;
let strategy = new StrategyContext('return');
let param: CalParam = {
    debate: 0.8,
    return: {
        ret: 30,
        threshold: 200,
    },
};
let result: number = strategy.calculate(prize, param);
console.log(`result = ${result}`);
