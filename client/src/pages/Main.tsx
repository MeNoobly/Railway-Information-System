import React, { FC } from "react";
import TrainRoutesList from "../components/TrainRoutesList";
import { Container } from "react-bootstrap";

const Main: FC = () => {
    return (
        <Container className="mt-3">
            <TrainRoutesList />
        </Container>
    );
};

export default Main;
