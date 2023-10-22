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
        const dataError = await response.json();
        console.log("Api returned an error:", dataError);
    }
    return response.json();
};


