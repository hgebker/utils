/**
 * Partitions an array of generic type T into two seperate arrays, determined by a given condition function.
 * @param array Array of T to be partitioned
 * @param condition Takes an item of type T and checks a boolean condition
 * @return Array with two type T arrays; can be accessed by destructuring the result in [matching, nonMatching]
 */
export function partitionArrayByCondition(array, condition) {
	return array.reduce(
		([match, rest], item) => {
			return condition(item) ? [[...match, item], rest] : [match, [...rest, item]];
		},
		[[], []]
	);
}
