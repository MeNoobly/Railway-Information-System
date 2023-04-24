import { makeAutoObservable } from "mobx";

export default class TrainStore {
    private _trainNumber = "";
    private _trainName = "";

    constructor() {
        makeAutoObservable(this);
    }

    get trainNumber() {
        return this._trainNumber;
    }

    set trainNumber(number: string) {
        this._trainNumber = number;
    }

    get trainName() {
        return this._trainName;
    }

    set trainName(name: string) {
        this._trainName = name;
    }
}
