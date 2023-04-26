import React, { FC, useContext } from "react";
import TrainRoutesList from "../components/TrainRoutesList";
import { Container } from "react-bootstrap";
import { Context } from "..";

const Main: FC = () => {
    const { routes } = useContext(Context);

    return (
        <Container className="mt-3">
            <TrainRoutesList routes={routes.routes} isMain={true} />
        </Container>
    );
};

export default Main;
