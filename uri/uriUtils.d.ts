export function queryToParams(query: string): URLSearchParams;

export function paramsToQuery(params: Record<string, unknown>, delimiter: string): string;

export type LocationKey = 'hash' | 'search';

export interface ResponseType {
	name: string;
	locationKey: string;
	dataKey: string;
}

export const RESPONSE_TYPES: Record<string, ResponseType> = {
	CODE: {
		name: 'code',
		locationKey: 'search',
		dataKey: 'code'
	},
	TOKEN: {
		name: 'token',
		locationKey: 'hash',
		dataKey: 'access_token'
	}
};
