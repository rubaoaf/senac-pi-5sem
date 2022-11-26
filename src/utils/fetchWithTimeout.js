const DEFAULT_TIMEOUT = 12000;

function fetchApi(url, opt) {
  return fetch(url, opt).then(async (response) => {
    if (!response.ok) {
      const data = await response.json();
      const errorObj = {
        data,
        response,
      };
      throw errorObj;
    }
    const contentType = response.headers.get("content-type");

    if (contentType?.includes("application/json")) {
      return response.json();
    }
    return response.text();
  });
}

const fetchWithTimeout = (url, opt, params, timeout = DEFAULT_TIMEOUT) => {
  const controller = new AbortController();
  const { signal } = controller;

  params?.forEach((value, name) => {
    if (!value) params.delete(name);
    if (value === "undefined") params.delete(name);
  });

  setTimeout(() => controller.abort(), timeout);
  return fetchApi(
    `${url}${params?.toString().length ? `?${params.toString()}` : ""}`,
    { ...opt, signal }
  );
};

export { fetchWithTimeout };
