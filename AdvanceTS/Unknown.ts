function assert(condition: boolean, message: string): asserts condition {
    if (!condition) {
        throw Error(message);
    }
}

function assertIsNumber(value: unknown, name: string): asserts value is number {
    if (typeof value !== 'number') {
        throw Error(`Expected ${name} to be a number`);
    }
}

function range(from: number, to: number): number[];
function range(from: unknown, to: unknown): number[] {
    assert(typeof from === 'number' && typeof to === 'number', 'assert');
    // assertIsNumber(from, 'from');
    // assertIsNumber(to, 'to');

    let numArr: number[] = [];
    for (let indexNum = from; indexNum < to; indexNum++) {
        numArr.push(indexNum);
    }
    return numArr;
}

let numArr: number[] = range('A' as any, 'F' as any);
console.log(numArr);
