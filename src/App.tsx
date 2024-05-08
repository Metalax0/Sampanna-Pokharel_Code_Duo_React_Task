import React, { useCallback, useMemo } from "react";
import "./App.css";
import { NotificationProps } from "./types/notificationTypes";
import { Provider } from "react-redux";
import { AppRoutes } from "./routes/app-routes";
import store from "./state-management/store";
import { notification } from "antd";

export const NotificationContext = React.createContext<NotificationProps>({
    openNotification: () => {},
});

function App() {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = useCallback(
        (
            title: string,
            message: string,
            type: "success" | "info" | "warning" | "error"
        ) => {
            api[type]({
                message: title,
                description: `${message}!`,
            });
        },
        [api]
    );

    const contextValue = useMemo(
        () => ({
            openNotification,
        }),
        [openNotification]
    );

    return (
        <NotificationContext.Provider value={contextValue}>
            {contextHolder}
            <Provider store={store}>
                <AppRoutes />
            </Provider>
        </NotificationContext.Provider>
    );
}

export default App;
