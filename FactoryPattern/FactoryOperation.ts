export interface Operation {
    calculate(num1: number, num2: number): number;
}

class PlusOperation implements Operation {
    calculate(num1: number, num2: number): number {
        return num1 + num2;
    }
}
class SubOperation implements Operation {
    calculate(num1: number, num2: number): number {
        return num1 - num2;
    }
}
class MulOperation implements Operation {
    calculate(num1: number, num2: number): number {
        return num1 * num2;
    }
}
class DevOperation implements Operation {
    calculate(num1: number, num2: number): number {
        return num1 / num2;
    }
}
export class OperationFactory {
    public static getOperation(symbol: string): Operation {
        let operation: Operation = null!;
        switch (symbol) {
            case '+':
                operation = new PlusOperation();
                break;
            case '-':
                operation = new SubOperation();
                break;
            case '*':
                operation = new MulOperation();
                break;
            case '/':
                operation = new DevOperation();
                break;
        }
        return operation;
    }
}
