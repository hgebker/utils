import format from 'date-fns/format';

/**
 * Converts a Date to a string using the pattern 'dd.MM.yyyy hh:mm:ss'.
 * @param date The date that should be converted to a string.
 */
export function dateToString(date) {
	return format(new Date(date), 'yyyy/MM/dd HH:mm:ss');
}
