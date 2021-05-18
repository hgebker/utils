export const ASCENDING = 'asc';
export const DESCENDING = 'desc';

/**
 * Returns callback function for "sort()" specified by element field and order.
 * Applies the primer to the elements for sorting complex types.
 *
 * @param {String} field Fieldname of the column to sort by
 * @param {Integer} reverse 1 for ascending order, -1 for descending order
 * @param {Function} [primer] Function to be applied to the fields
 */
export function sortBy(field, reverse, primer) {
	const key = primer ? x => primer(x[field]) : x => x[field];

	return (a, b) => {
		a = key(a);
		b = key(b);
		return reverse * ((a > b) - (b > a));
	};
}

function convertToLowerCase(element) {
	return isNaN(element) ? element.toLowerCase() : element;
}

/**
 * Sorts an array of objects (datatable entries) by the selected row, determining the fieldName and direction to order by.
 *
 * @param {Array<Object>} data Array of objects (datatable entries) to sort
 * @param {Object} [detail] Details from "event.detail" after calling the sort handler method, or a custom JS Object with sortedBy and direction.
 														Defaults to 'title' in ascending order.
 * @param {Boolean} [mindCharacterCase] Specifies, if characters/strings will be differentiated based on lower-/uppercase. Defaults to true.
 */
export function sortDataByDetail(
	data,
	detail = { sortedBy: 'title', sortDirection: ASCENDING },
	mindCharacterCase = true
) {
	const { fieldName, sortedBy, sortDirection } = detail;
	const sortedData = [...data];
	const direction = sortDirection === ASCENDING ? 1 : -1;
	const primer = mindCharacterCase && convertToLowerCase;

	sortedData.sort(sortBy(sortedBy || fieldName, direction, primer));

	return [sortedData, sortDirection, sortedBy];
}
