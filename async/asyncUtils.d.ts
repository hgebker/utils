export declare type Callback<T> = (prevValue: T, current: T, index: number) => Promise<T>;

export declare function reducePromises<T>(promiseArray: T[], callback: Callback<T>, initialValue: T): Promise<T>;
