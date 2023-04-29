import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode";

export const registration = async (login: string, password: string) => {
    const { data } = await $host.post(
        `${process.env.REACT_APP_API_URL}/api/user/registration`,
        { login, password, role: "ADMIN" }
    );

    localStorage.setItem("token", data.token);

    return jwt_decode(data.token);
};

export const login = async (login: string, password: string) => {
    const { data } = await $host.post(
        `${process.env.REACT_APP_API_URL}/api/user/login`,
        { login, password }
    );

    localStorage.setItem("token", data.token);

    return jwt_decode(data.token);
};

export const check = async () => {
    const { data } = await $authHost.get(
        `${process.env.REACT_APP_API_URL}/api/user/auth`
    );

    localStorage.setItem("token", data.token);

    return jwt_decode(data.token);
};
