import format from 'date-fns/format';

/**
 * Converts a Date to a string using the pattern 'dd.MM.yyyy hh:mm:ss'.
 * @param date The date that should be converted to a string.
 */
export function dateToString(date) {
	return format(new Date(date), 'yyyy/MM/dd HH:mm:ss');
}

export const dateIsEqual = (date, dateToCompare) => {
	return new Date(date).getTime() === new Date(dateToCompare).getTime();
};

export const dateIsAfter = (date, dateToCompare) => {
	return new Date(date).getTime() > new Date(dateToCompare).getTime();
};

export const dateIsBefore = (date, dateToCompare) => {
	return new Date(date).getTime() < new Date(dateToCompare).getTime();
};

export const dateIsWithinInterval = (date, interval) => {
	return dateIsAfter(date, interval.start) && dateIsBefore(date, interval.end);
};
