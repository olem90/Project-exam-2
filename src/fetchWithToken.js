export async function fetchWithToken(url, options = {}) {
    const accessToken = localStorage.getItem("accessToken");

    const authHeaders = {
        Authorization: `Bearer ${accessToken}`,
    };

    options.headers = {
        ...authHeaders,
        ...options.headers,
    };

    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`API returned an error: ${response.status} ${response.statusText}`);
    }

    console.log("HTTP Response:", response);

    return response;
}

