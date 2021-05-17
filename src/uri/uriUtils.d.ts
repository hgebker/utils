declare module '@utils/uri' {
	declare function queryToParams(query: string): URLSearchParams;

	declare function paramsToQuery(params: Record<string, unknown>, delimiter: string): string;

	declare type LocationKey = 'hash' | 'search';

	declare interface ResponseType {
		name: string;
		locationKey: string;
		dataKey: string;
	}

	declare const RESPONSE_TYPES: Record<string, ResponseType> = {
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
}
