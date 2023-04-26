import { makeAutoObservable } from "mobx";
import { ITrainRoute } from "../../types/store/route";

export default class TrainRoutesStore {
    private _routes: ITrainRoute[] = [
        {
            id: 1,
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
                    id: 1,
                    typeOfTrip: "Купе",
                    price: 1000,
                },
                {
                    id: 2,
                    typeOfTrip: "Плацкарт",
                    price: 500,
                },
            ],
            trainInfo: {
                number: "030Y",
                name: "Ласточка",
            },
        },
        {
            id: 2,
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
                    id: 1,
                    typeOfTrip: "Купе",
                    price: 1000,
                },
                {
                    id: 2,
                    typeOfTrip: "Плацкарт",
                    price: 500,
                },
            ],
            trainInfo: {
                number: "030Y",
                name: "Ласточка",
            },
        },
    ];

    private _favouritesRoutes: ITrainRoute[] = [
        {
            id: 1,
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
                    id: 1,
                    typeOfTrip: "Купе",
                    price: 1000,
                },
                {
                    id: 2,
                    typeOfTrip: "Плацкарт",
                    price: 500,
                },
            ],
            trainInfo: {
                number: "030Y",
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

    get favouriteRoutes() {
        return this._favouritesRoutes;
    }

    set favouriteRoutes(routes: ITrainRoute[]) {
        this._favouritesRoutes = routes;
    }
}
