export type SortingDirection = 'asc' | 'desc';

export interface SortingDetail {
	sortedBy?: string;
	fieldName?: string;
	sortDirection: 'asc' | 'desc';
}

export const ASCENDING: SortingDirection = 'asc';
export const DESCENDING: SortingDirection = 'desc';

export function sortBy<T>(field: string, reverse: 1 | -1, primer: (item: T) => T);

export function sortDataByDetail<T>(
	data: T[],
	detail: SortingDetail,
	mindCharacterCase: boolean
): [T[], SortingDirection, string];
