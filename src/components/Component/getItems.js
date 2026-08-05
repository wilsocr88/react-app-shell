import { fetchClient } from "../../api/fetchClient";

/**
 * Fetches a list of items from an API.
 * @returns {Promise<FetchResponseConfig>} A promise that resolves to the response configuration.
 * FetchResponseConfig: {
 *   status: number,
 *   headers: Headers,
 *   data: any,
 *   response: Response,
 * }
 */
export function getItems() {
    return fetchClient({
        url: "/items",
        method: "GET",
    });
}
