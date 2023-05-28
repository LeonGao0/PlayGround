export interface Operation {
    operation(num1: number, num2: number): number;
}

class PlusOperation implements Operation {
    operation(num1: number, num2: number): number {
        return num1 + num2;
    }
}
class SubOperation implements Operation {
    operation(num1: number, num2: number): number {
        return num1 - num2;
    }
}
class MulOperation implements Operation {
    operation(num1: number, num2: number): number {
        return num1 * num2;
    }
}
class DevOperation implements Operation {
    operation(num1: number, num2: number): number {
        return num1 / num2;
    }
}
export class OperationFactory {
    public static newOperation(symbol: string): Operation {
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
