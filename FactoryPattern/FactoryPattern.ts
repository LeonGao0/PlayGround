import { OperationFactory, Operation } from './FactoryOperation';

let countNum1: number = 123;
let countNum2: number = 22;

let calSymbol: string = '*';
let operation: Operation = OperationFactory.getOperation(calSymbol);
let result = operation.calculate(countNum1, countNum2);
console.log('result = ', result);
