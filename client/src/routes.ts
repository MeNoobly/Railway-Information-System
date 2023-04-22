import Auth from "./pages/Auth";
import Main from "./pages/Main";
import { AUTH_ROUTE, MAIN_ROUTE } from "./utils/consts";

export const authRoutes = [];

export const publicRoutes = [
    {
        path: AUTH_ROUTE,
        Component: Auth,
    },
    {
        path: MAIN_ROUTE,
        Component: Main,
    },
];
