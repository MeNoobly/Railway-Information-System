import React, { FC, useContext } from "react";
import style from "../style/Profile.module.css";
import { Context } from "..";
import { Button, Container, Form } from "react-bootstrap";

const Profile: FC = () => {
    const { user } = useContext(Context);

    return (
        <Container>
            <svg
                width="800px"
                height="800px"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                className={style.ProfileImg}
            >
                <path
                    fill="#000000"
                    d="M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"
                />
            </svg>
            <div className={style.ProfileLogin}>{user.login}</div>
            <Form className="mt-4">
                <Form.Group className="mb-3">
                    <Form.Label>Старый пароль</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Введите старый пароль"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Новый пароль</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Введите новый пароль"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Подтвердите новый пароль</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Подтвердите новый пароль"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Поменять пароль
                </Button>
            </Form>
        </Container>
    );
};

export default Profile;
