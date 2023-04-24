import React, { FC } from "react";
import { Container, Button, Form } from "react-bootstrap";

const Registration: FC = () => {
    return (
        <>
            <Container>
                <Form className="mt-4">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Введите логин"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Введите пароль"
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="formBasicPasswordConfirm"
                    >
                        <Form.Label>Подтверждение пароля</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Подтвердите пароль"
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Зарегистрироваться
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default Registration;
