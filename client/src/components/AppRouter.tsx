import React, { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MAIN_ROUTE } from "../utils/consts";
import { publicRoutes } from "../routes";

const AppRouter: FC = () => {
    return (
        <Routes>
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;
