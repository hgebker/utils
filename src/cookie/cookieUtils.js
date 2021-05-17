export function getCookieArray() {
	return document.cookie.split('; ');
}

export function compareCookie(key) {
	return cookie => cookie.trim().startsWith(key);
}

export function checkCookieExistence(key) {
	return getCookieArray().some(compareCookie(key));
}

export function readCookie(key) {
	const cookie = getCookieArray().find(compareCookie(key))?.split('=');

	if (cookie) {
		const [, value] = cookie;
		return value;
	}
}

export function deleteCookie(key) {
	document.cookie = `${key}=`;
}

export function setCookie(key, value) {
	document.cookie = `${key}=${value}`;
}
