declare module '@utils/sort' {
	declare type SortingDirection = 'asc' | 'desc';

	declare interface SortingDetail {
		sortedBy?: string;
		fieldName?: string;
		sortDirection: 'asc' | 'desc';
	}

	declare const ASCENDING: SortingDirection = 'asc';
	declare const DESCENDING: SortingDirection = 'desc';

	declare function sortBy<T>(field: string, reverse: 1 | -1, primer: (item: T) => T);

	declare function sortDataByDetail<T>(
		data: T[],
		detail: SortingDetail,
		mindCharacterCase: boolean
	): [T[], SortingDirection, string];
}
