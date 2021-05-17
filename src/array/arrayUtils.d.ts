declare module '@utils/array' {
	declare function partitionArrayByCondition<T>(array: T[], condition: (item: T) => boolean): [T[], T[]];
}
