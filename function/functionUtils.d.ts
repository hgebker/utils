export declare type UniFunction<R> = (param: R) => R;

export declare function pipe<R>(...functions: Array<UniFunction<R>>): UniFunction<R>;

export declare function compose<R>(...functions: Array<UniFunction<R>>): UniFunction<R>;
