const getCookieArray = (): string[] => {
  return document.cookie.split('; ');
};

const compareCookie = (key: string) => {
  return (cookie: string) => cookie.trim().startsWith(key);
};

const checkCookieExistence = (key: string): boolean => {
  return getCookieArray().some(compareCookie(key));
};

const readCookie = (key: string): string | undefined => {
  const cookie = getCookieArray().find(compareCookie(key))?.split('=');

  if (cookie) {
    const [, value] = cookie;
    return value;
  }
};

const deleteCookie = (key: string): void => {
  document.cookie = `${key}=`;
};

const setCookie = (key: string, value: string): void => {
  document.cookie = `${key}=${value}`;
};

export { checkCookieExistence, readCookie, deleteCookie, setCookie };
