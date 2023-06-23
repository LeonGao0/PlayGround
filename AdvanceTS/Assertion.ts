function assertIsNonNull<T>(value: T, message: string): asserts value is NonNullable<T> {
    if (value === null || value === undefined) {
        throw `${typeof value} ${message}}`;
    }
}

const root = document.getElementById('root');
assertIsNonNull(root, 'root expected nonNull');

type test = HTMLElement | null | undefined;
type mytest = NonNullable<test>;

// if (root == null || root == undefined) {
//     throw 'root expected nonNull type';
// }

root.addEventListener('click', () => {});
