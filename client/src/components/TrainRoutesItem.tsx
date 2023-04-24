import React, { FC } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { ITrainRoutesItemProps } from "../../types/props/train";

const TrainRoutesItem: FC<ITrainRoutesItemProps> = ({ route }) => {
    return (
        <Card body className="mb-3 ">
            <Col md={4}>1</Col>
            <Col md={8}>1</Col>
        </Card>
    );
};

export default TrainRoutesItem;
