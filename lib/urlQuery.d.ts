type Query = {
    [key: string]: any;
};
declare const parseQueryString: (url: string) => Query;
declare const stringfyQueryString: (obj: Query) => string;
export { parseQueryString, stringfyQueryString };
