export function getCookieArray(): string[];

export function compareCookie(key: string): (cookie: string) => boolean;

export function checkCookieExistence(key: string): boolean;

export function readCookie(key: string): string | undefined;

export function deleteCookie(key: string): void;

export function setCookie(key: string, value: string): void;
