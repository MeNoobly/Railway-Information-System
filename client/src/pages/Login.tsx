import React, { FC } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Login: FC = () => {
    return (
        <>
            <Container>
                <Form className="mt-4">
                    <Form.Group className="mb-3">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Введите логин"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Введите пароль"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Войти
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default Login;
