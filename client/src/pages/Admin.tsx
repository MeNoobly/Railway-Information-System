import React, { FC, useState } from "react";
import { Button, Container } from "react-bootstrap";

import style from "../style/Admin.module.css";
import CreateTrainType from "../components/modals/CreateTrainType";
import CreateTripType from "../components/modals/CreateTripType";
import CreateRoute from "../components/modals/CreateRoute";

const Admin: FC = () => {
    const [trainTypeVisible, setTrainTypeVisible] = useState(false);
    const [tripTypeVisible, setTripTypeVisible] = useState(false);
    const [routeVisible, setRouteVisible] = useState(false);

    return (
        <Container>
            <div className={style.ButtonGroup}>
                <Button
                    variant="success"
                    onClick={() => setTrainTypeVisible(true)}
                >
                    Добавить тип поезда
                </Button>
                <Button
                    variant="success"
                    onClick={() => setTripTypeVisible(true)}
                >
                    Добавить тип поездки
                </Button>
                <Button variant="success" onClick={() => setRouteVisible(true)}>
                    Добавить маршрут
                </Button>
                <CreateTrainType
                    show={trainTypeVisible}
                    handleClose={() => setTrainTypeVisible(false)}
                />
                <CreateTripType
                    show={tripTypeVisible}
                    handleClose={() => setTripTypeVisible(false)}
                />
                <CreateRoute
                    show={routeVisible}
                    handleClose={() => setRouteVisible(false)}
                />
            </div>
        </Container>
    );
};

export default Admin;
