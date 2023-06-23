function range(from: number, to: number): number[];
function range(from: unknown, to: unknown): number[] {
    if (typeof from !== 'number' || typeof to !== 'number') {
        throw Error('createArr expects exactly 2 numbers');
    }
    let numArr: number[] = [];
    for (let indexNum = from; indexNum < to; indexNum++) {
        numArr.push(indexNum);
    }
    return numArr;
}

let numArr: number[] = range(1, 10);
console.log(numArr);
