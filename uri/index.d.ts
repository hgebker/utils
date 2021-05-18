export declare function queryToParams(query: string): URLSearchParams;

export declare function paramsToQuery(params: Record<string, unknown>, delimiter: string): string;

export declare type LocationKey = 'hash' | 'search';

export declare interface ResponseType {
	name: string;
	locationKey: string;
	dataKey: string;
}

export declare const RESPONSE_TYPES: Record<string, ResponseType> = {
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
