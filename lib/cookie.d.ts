declare const setCookie: (name: string, value: string, days: number) => void;
declare const getCookie: (name: string) => string;
declare const removeCookie: (name: string) => void;
export { getCookie, setCookie, removeCookie };
