export declare type SortingDirection = 'asc' | 'desc';

export declare interface SortingDetail {
	sortedBy?: string;
	fieldName?: string;
	sortDirection: 'asc' | 'desc';
}

export declare const ASCENDING: SortingDirection = 'asc';
export declare const DESCENDING: SortingDirection = 'desc';

export declare function sortBy<T>(field: string, reverse: 1 | -1, primer: (item: T) => T);

export declare function sortDataByDetail<T>(
	data: T[],
	detail: SortingDetail,
	mindCharacterCase: boolean
): [T[], SortingDirection, string];
