import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import UserStore from "./store/UserStore";
import TrainStore from "./store/TrainStore";
import TrainRoutesStore from "./store/TrainRoutesStore";

const defaultStateOfContext = {
    user: new UserStore(),
    trains: new TrainStore(),
    routes: new TrainRoutesStore(),
};

export const Context = createContext(defaultStateOfContext);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <Context.Provider value={defaultStateOfContext}>
            <App />
        </Context.Provider>
    </React.StrictMode>
);
