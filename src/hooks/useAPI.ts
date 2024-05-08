import { useContext, useState } from "react";
import { callAPI } from "../api/axios";
import { NotificationContext } from "../App";

const isIgnoreSuccessMessage = (res: { message: string }) => {
    switch (res.message) {
        case "Media List.":
            return true;

        case undefined:
            return true;

        default:
            false;
    }
};

export const useAPI = () => {
    const [data, setData] = useState<any>({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);
    const { openNotification } = useContext(NotificationContext);

    const API = async (
        method: "GET" | "POST" | "DELETE" | "PATCH",
        url: string,
        data: any = null
    ) => {
        setIsLoading(true);
        try {
            const response = await callAPI(method, url, data);
            setData(response);
            if (!isIgnoreSuccessMessage(response))
                openNotification("Success", response.message, "success");
        } catch (err: any) {
            setError(err);
            openNotification("Error", err.response.data.message, "error");
        }
        setIsLoading(false);
    };

    return { API, data, isLoading, error };
};
