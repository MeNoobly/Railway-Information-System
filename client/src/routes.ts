import Admin from "./pages/Admin";
import Favourites from "./pages/Favourites";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";
import {
    ADMIN_ROUTE,
    FAVOURITES_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    PROFILE_ROUTE,
    REGISTRATION_ROUTE,
} from "./utils/consts";

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
];

export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: Profile,
    },
    {
        path: FAVOURITES_ROUTE,
        Component: Favourites,
    },
];

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration,
    },
    {
        path: MAIN_ROUTE,
        Component: Main,
    },
];
