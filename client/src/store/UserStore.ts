import { makeAutoObservable } from "mobx";

export default class UserStore {
    private isAuth = false;
    private isAdmin = false;
    private user = {};

    constructor() {
        makeAutoObservable(this);
    }

    public setIsAuth(isAuth: boolean) {
        this.isAuth = isAuth;
    }

    public setIsAdmin(isAdmin: boolean) {
        this.isAdmin = isAdmin;
    }

    public setIsUser(user: any) {
        this.user = user;
    }
}
