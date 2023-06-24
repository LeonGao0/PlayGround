const HTTPRequestMethod = {
    GET: 'GET',
    POST: 'POST',
} as const;

type ValuesOf<T> = T[keyof T];
type typeOfRequestMethod = typeof HTTPRequestMethod;
type HTTPRequestMethodType = ValuesOf<typeOfRequestMethod>;

async function fetchJSON(url: string, method: HTTPRequestMethodType) {
    const response = await fetch(url, { method });
    return response.json();
}

fetchJSON('https://example.com/', HTTPRequestMethod.GET).then(data => {});
