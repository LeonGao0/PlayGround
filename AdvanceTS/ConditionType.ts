// type NonNullush<T> = T extends null | undefined ? never : T;

type A = NonNullable<string>;
type B = NonNullable<string | null>;
type C = NonNullable<string | null | undefined>;
type D = NonNullable<null>;
type E = NonNullable<null | undefined>;

type ReturnTypeOf<T extends (...args: any) => any> = T extends (...arg: any) => infer U ? U : any;

type F = ReturnType<() => string>;
type G = ReturnType<typeof Math.random>;
type H = ReturnType<typeof Array.isArray>;
// type I = ReturnType<string>;
