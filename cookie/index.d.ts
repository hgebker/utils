export declare function getCookieArray(): string[];

export declare function compareCookie(key: string): (cookie: string) => boolean;

export declare function checkCookieExistence(key: string): boolean;

export declare function readCookie(key: string): string | undefined;

export declare function deleteCookie(key: string): void;

export declare function setCookie(key: string, value: string): void;
