export interface NotificationProps {
    openNotification: (
        title: string,
        message: string,
        type: "success" | "info" | "warning" | "error"
    ) => void;
}
