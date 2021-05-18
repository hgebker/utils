export type UniFunction<R> = (param: R) => R;

export function pipe<R>(...functions: Array<UniFunction<R>>): UniFunction<R>;

export function compose<R>(...functions: Array<UniFunction<R>>): UniFunction<R>;
