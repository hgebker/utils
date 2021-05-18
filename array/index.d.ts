export declare type ConditionFunction<T> = (item: T) => boolean;

export declare function partition<T>(
	array: T[],
	condition: ConditionFunction<T>,
	...additionalConditions: ConditionFunction<T>[]
): T[][];

export declare function intersection<T>(arrA: T[], arrB: T[]): T[];

export declare function union<T>(arrA: T[], arrB: T[]): T[];

export declare function difference<T>(arrA: T[], arrB: T[]): T[];

export declare function symmetricalDifference<T>(arrA: T[], arrB: T[]): T[];
