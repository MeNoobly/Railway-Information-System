interface ITrainRoutePrice {
    typeOfTrip: string;
    price: number;
}

interface ITrain {
    number: string;
    name: string;
}

export interface ITrainRoute {
    dateOfTrip: string;
    exitTime: string;
    comingTime: string;
    exitCity: string;
    comingCity: string;
    exitStation: string;
    comingStation: string;
    travelTime: string;
    price: ITrainRoutePrice[];
    trainInfo: ITrain;
}
