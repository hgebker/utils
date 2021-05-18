/**
 * Partitions an array of generic type T into at least two seperate arrays, determined by a given condition function.
 * @param array Array of T to be partitioned
 * @param condition Takes an item of type T and checks a boolean condition
 * @param additionalConditions Optional additional conditions to match; earlier conditions have the highest priority
 * @return Array with at least two type T arrays; can be accessed by destructuring the result in [matching, nonMatching]
 */
export function partition(array, condition, ...additionalConditions) {
	const [match, fail] = array.reduce(
		([match, rest], item) => {
			return condition(item) ? [[...match, item], rest] : [match, [...rest, item]];
		},
		[[], []]
	);

	const restMatches = additionalConditions.length ? partition(fail, ...additionalConditions) : [fail];

	return [match, ...restMatches];
}

export function intersection(arrA, arrB) {
	return arrA.filter(element => arrB.includes(element));
}

export function difference(arrA, arrB) {
	return arrA.filter(element => !arrB.includes(element));
}

export function union(arrA, arrB) {
	return [...new Set([...arrA, ...arrB])];
}

export function symmetricalDifference(arrA, arrB) {
	return [...difference(arrA, arrB), ...difference(arrB, arrA)];
}
