/**
 * Parses given URI params to an object form
 * @param query Query string
 * @return Object with params as key, value pairs
 */
export function queryToParams(query) {
	return new URLSearchParams(query);
}

/**
 * Parses a given param object into uri form
 * @param params Object wth params to parse to query
 * @param delimiter Character that defines the divider between two URI params
 * @return The string form of the given params
 */
export function paramsToQuery(params, delimiter = '&') {
	const keys = Object.keys(params);

	return keys.reduce((str, key, index) => {
		let query = `${str}${key}=${params[key]}`;

		if (index < keys.length - 1) {
			query += delimiter;
		}

		return query;
	}, '');
}

export const RESPONSE_TYPES = {
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
