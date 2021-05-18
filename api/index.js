/* eslint-disable no-console */

/**
 * Logs an error from a backed call to the console
 * @param error The error thrown in the request process
 */
export function logError(error) {
	const { response, request, message } = error;

	console.error(message);

	if (response) {
		console.error(response.status);
		console.error(response.data);
	} else if (request) {
		console.error(request);
	}
}
