import React, { FC } from "react";
import { Button, Container } from "react-bootstrap";

import style from "../style/Admin.module.css";

const Admin: FC = () => {
    return (
        <Container>
            <div className={style.ButtonGroup}>
                <Button variant="success">Добавить тип поезда</Button>
                <Button variant="success">Добавить тип поездки</Button>
                <Button variant="success">Добавить маршрут</Button>
            </div>
        </Container>
    );
};

export default Admin;
