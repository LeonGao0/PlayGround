function swap<T, U>(tuple: readonly [T, U]): [U, T] {
    const [t, u] = tuple;
    return [u, t];
}

const tuple: readonly [number, string] = [1, 'one'];
let afterSwap = swap(tuple);
console.log(afterSwap);
