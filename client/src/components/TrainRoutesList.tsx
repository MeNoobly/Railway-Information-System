import React, { FC, useContext } from "react";
import { Context } from "..";
import TrainRoutesItem from "./TrainRoutesItem";

const TrainRoutesList: FC = () => {
    const { routes } = useContext(Context);

    return (
        <div>
            {routes.routes.map((item) => (
                <TrainRoutesItem route={item} />
            ))}
        </div>
    );
};

export default TrainRoutesList;
