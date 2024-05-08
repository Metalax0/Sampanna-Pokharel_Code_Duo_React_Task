import axios, {
    AxiosRequestConfig,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from "axios";

// Create an Axios instance with default configuration
const api = axios.create({
    baseURL: "https://www.dnd5eapi.co",
    timeout: 10000,
});

// REQUEST INTERCEPTORS
api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // Request interception code here
        return config;
    },
    (error) => {
        // Navigate to Error page and send error message
        console.error("Request Error Interceptor:", error);
        return Promise.reject(error);
    }
);

// RESPONSE INTERCEPTORS
api.interceptors.response.use(
    (response: AxiosResponse) => {
        // Response interception code here
        return response;
    },
    (error) => {
        // Navigate to Error page and send error message
        console.error("Response Error Interceptor:", error);
        return Promise.reject(error);
    }
);

// Fn that calls api
export const callAPI = async (
    method: "GET" | "POST" | "DELETE" | "PATCH",
    url: string,
    data: unknown = null,
    params: AxiosRequestConfig["params"] = null
) => {
    try {
        const response =
            method != "DELETE"
                ? await api({
                      method,
                      url,
                      data,
                      params,
                  })
                : await api({
                      method,
                      url,
                  });

        return response.data; // Return the response data
    } catch (error) {
        // Handle errors (e.g., network issues, server errors)
        if (axios.isAxiosError(error)) {
            // Axios Errors
            console.error(
                "Request Error:",
                error.message,
                error.response?.data
            );
        } else {
            // Non Axios Errors
            console.error("Request Error:", (error as Error).message);
        }
        throw error;
    }
};
