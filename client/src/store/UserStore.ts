import { makeAutoObservable } from "mobx";

export default class UserStore {
    private _isAuth = true;
    private _isAdmin = true;
    private _login = "login";

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

    get login() {
        return this._login;
    }

    set login(login: string) {
        this._login = login;
    }
}
