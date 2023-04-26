import React, { FC, useContext } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { ITrainRoutesItemProps } from "../../types/props/train";
import style from "../style/TrainRouteItem.module.css";
import { Context } from "..";

const TrainRoutesItem: FC<ITrainRoutesItemProps> = ({ route, isMain }) => {
    const { user } = useContext(Context);

    return (
        <>
            {isMain && user.isAdmin && (
                <div className={style.ButtonGroups}>
                    <Button variant="primary">Изменить маршрут</Button>
                    <Button variant="danger">Удалить маршрут</Button>
                </div>
            )}

            <Card body className="mb-3">
                <Row>
                    <Col md={3}>
                        <div className={style.TrainNumber}>
                            {route.trainInfo.number}
                        </div>
                        <div className={style.TrainTime}>{route.exitTime}</div>
                        <div className={style.Place}>
                            {route.exitCity}, {route.exitStation}
                        </div>
                    </Col>
                    <Col md={3}>
                        <div
                            className={`${style.TrainTime} ${style.TrainTimeExit}`}
                        >
                            {route.comingTime}
                        </div>
                        <div className={style.Place}>
                            {route.comingCity}, {route.comingStation}
                        </div>
                    </Col>
                    <Col md={3} style={{ borderRight: "1px solid lightgray" }}>
                        <div className={style.TimeTypeAndFavourite}>
                            <div className={style.TravelTimeAndType}>
                                <div>{route.travelTime}</div>
                                <div className={style.TrainType}>
                                    {route.trainInfo.name}
                                </div>
                            </div>
                            {isMain ? (
                                <Button variant="success" className="mt-3">
                                    Добавить в избранное
                                </Button>
                            ) : (
                                <Button variant="danger" className="mt-3">
                                    Удалить из избранного
                                </Button>
                            )}
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={style.Price}>
                            {route.price.map((item) => (
                                <div key={item.id} className={style.PriceItem}>
                                    <span>{item.typeOfTrip}</span>
                                    <span>
                                        ~ <b>{item.price} ₽</b>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Card>
        </>
    );
};

export default TrainRoutesItem;
