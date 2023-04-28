import axios, { AxiosRequestConfig } from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
});

const config: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
};

const $authHost = axios.create(config);

export { $host, $authHost };
