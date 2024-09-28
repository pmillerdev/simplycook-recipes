type Fetcher<T = unknown> = (
  input: RequestInfo | URL,
  init?: RequestInit
) => Promise<T>;

const fetcher: Fetcher = (...args) => fetch(...args).then((res) => res.json());

const apiPath = `https://corsproxy.io/?${encodeURIComponent(
  "https://www.simplycook.com/api"
)}`;

export { fetcher, apiPath };
