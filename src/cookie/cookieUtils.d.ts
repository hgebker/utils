declare module '@utils/cookie' {
	declare function getCookieArray(): string[];

	declare function compareCookie(key: string): (cookie: string) => boolean;

	declare function checkCookieExistence(key: string): boolean;

	declare function readCookie(key: string): string | undefined;

	declare function deleteCookie(key: string): void;

	declare function setCookie(key: string, value: string): void;
}
