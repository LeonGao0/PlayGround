import { OperationFactory, Operation } from './FactoryOperation';

let countNum1: number = 123;
let countNum2: number = 22;

let calSymbol: string = '+';
let operation: Operation = OperationFactory.newOperation(calSymbol);
let result = operation.operation(countNum1, countNum2);
console.log('result = ', result);
