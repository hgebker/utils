declare module '@utils/function' {
	declare type UniFunction<R> = (param: R) => R;

	declare function pipe<R>(...functions: Array<UniFunction<R>>): UniFunction<R>;

	declare function compose<R>(...functions: Array<UniFunction<R>>): UniFunction<R>;
}
