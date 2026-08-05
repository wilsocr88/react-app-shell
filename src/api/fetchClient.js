import { createFetchClient } from "react-fetch-utils";

export const fetchClient = createFetchClient({
    baseUrl: window.runConfig.apiUrl,
    timeoutMs: window.runConfig.timeoutMs || 30000,
    getAuthToken: async () => {
        // Implement your logic to retrieve the auth token here
        // For example, you might get it from localStorage or a cookie
        return localStorage.getItem("authToken");
    },
});
