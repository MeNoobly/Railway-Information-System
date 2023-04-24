import { makeAutoObservable } from "mobx";
import { ITrainRoute } from "../../types/store/route";

export default class TrainRoutesStore {
    private _routes: ITrainRoute[] = [
        {
            dateOfTrip: "21 августа",
            exitTime: "00:20",
            comingTime: "00:40",
            exitCity: "Москва",
            comingCity: "Санкт-Петербург",
            exitStation: "Казанский вокзал",
            comingStation: "Центр",
            travelTime: "2 часа",
            price: [
                {
                    typeOfTrip: "Купе",
                    price: 1000,
                },
                {
                    typeOfTrip: "Плацкарт",
                    price: 500,
                },
            ],
            trainInfo: {
                number: "123",
                name: "Ласточка",
            },
        },
    ];

    constructor() {
        makeAutoObservable(this);
    }

    get routes() {
        return this._routes;
    }

    set routes(routes: ITrainRoute[]) {
        this._routes = routes;
    }
}
