/**
 * Reduces an array similar to the standard "reduce", but to a single promise by scheduling the given callback for every entry in the given array.
 * @param {any[]} promiseArray Array on which the callback function shall be applied
 * @param {(prevValue: any, current: any, index: number) => Promise<any>} callback Promise-returning callback. Structure is the same as for a standard reduce. Will be called for every array entry after the previous promise has resolved.
 * @param {any?} initialValue Optional initial value for the first callback
 * @return The master promise with a "then" executing the given callback function for every array entry
 */
export function reducePromises(promiseArray, callback, initialValue) {
	return promiseArray.reduce((masterPromise, current, index) => {
		return masterPromise.then(prevValue => {
			return callback(prevValue, current, index);
		});
	}, Promise.resolve(initialValue));
}
