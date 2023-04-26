import React, { FC } from "react";
import TrainRoutesItem from "./TrainRoutesItem";
import { ITrainRoutesListProps } from "../../types/props/train";

const TrainRoutesList: FC<ITrainRoutesListProps> = ({ routes, isMain }) => {
    return (
        <div>
            {routes.map((item) => (
                <TrainRoutesItem route={item} key={item.id} isMain={isMain} />
            ))}
        </div>
    );
};

export default TrainRoutesList;
