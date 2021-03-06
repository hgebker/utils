/**
 * Pipelines n functions and returns a new function, that applies these n functions for a given param
 * @param functions n functions to be applied for the given param from LEFT to RIGHT
 * @return A new function, that can be called with a single param, to apply all functions on it
 */
export function pipe(...functions) {
	return param => functions.reduce((result, func) => func(result), param);
}

/**
 * Composes n functions and returns a new function, that applies these n functions for a given param
 * @param functions n functions to be applied for the given param from RIGHT to LEFT
 * @return A new function, that can be called with a single param, to apply all functions on it
 */
export function compose(...functions) {
	return param => functions.reduceRight((result, func) => func(result), param);
}
