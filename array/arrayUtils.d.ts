declare module '@hgebker/utils/array' {
	export function partitionArrayByCondition<T>(array: T[], condition: (item: T) => boolean): [T[], T[]];
}
