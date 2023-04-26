import { ITrainRoute } from "../store/route";

export interface ITrainRoutesItemProps {
    route: ITrainRoute;
    key: number;
    isMain: boolean;
}

export interface ITrainRoutesListProps {
    routes: ITrainRoute[];
    isMain: boolean;
}
