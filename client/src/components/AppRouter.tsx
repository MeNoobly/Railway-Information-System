import React, { FC, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MAIN_ROUTE } from "../utils/consts";
import { adminRoutes, authRoutes, publicRoutes } from "../routes";
import { Context } from "..";

const AppRouter: FC = () => {
    const { user } = useContext(Context);

    return (
        <Routes>
            {user.isAuth &&
                authRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            {user.isAdmin &&
                adminRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;
