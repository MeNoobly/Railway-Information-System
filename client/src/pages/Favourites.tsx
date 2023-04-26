import React, { FC, useContext } from "react";
import TrainRoutesList from "../components/TrainRoutesList";
import { Context } from "..";
import { Container } from "react-bootstrap";

const Favourites: FC = () => {
    const { routes } = useContext(Context);

    return (
        <>
            <Container className="mt-3">
                <TrainRoutesList
                    routes={routes.favouriteRoutes}
                    isMain={false}
                />
            </Container>
        </>
    );
};

export default Favourites;
