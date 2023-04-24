import { makeAutoObservable } from "mobx";

export default class UserStore {
    private _isAuth = true;
    private _isAdmin = true;
    private _user = {};

    constructor() {
        makeAutoObservable(this);
    }

    get isAuth(): boolean {
        return this._isAuth;
    }

    set isAuth(isAuth: boolean) {
        this._isAuth = isAuth;
    }

    get isAdmin(): boolean {
        return this._isAdmin;
    }

    set isAdmin(isAdmin: boolean) {
        this._isAdmin = isAdmin;
    }

    get user() {
        return this._user;
    }

    set isUser(user: any) {
        this._user = user;
    }
}
