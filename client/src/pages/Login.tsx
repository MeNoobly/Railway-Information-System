import React, { FC } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { ILoginFields } from "../../types/rhf/login";

const Login: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ILoginFields>({ mode: "onChange" });

    const onSumbit: SubmitHandler<ILoginFields> = (data) => {
        reset();
    };

    return (
        <>
            <Container>
                <Form className="mt-4" onSubmit={handleSubmit(onSumbit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите логин"
                            {...register("login", {
                                required: "Login is require field!",
                                pattern: {
                                    value: /^[a-zA-Z0-9_]+$/,
                                    message: "Please enter valid login!",
                                },
                            })}
                        />
                    </Form.Group>
                    {errors.login && (
                        <div style={{ color: "red" }} className="mb-3">
                            {errors.login.message}
                        </div>
                    )}
                    <Form.Group className="mb-3">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Введите пароль"
                            {...register("password", {
                                required: "Password is require field!",
                                pattern: {
                                    value: /^[a-zA-Z0-9_]+$/,
                                    message: "Please enter valid password!",
                                },
                            })}
                        />
                    </Form.Group>
                    {errors.password && (
                        <div style={{ color: "red" }} className="mb-3">
                            {errors.password.message}
                        </div>
                    )}
                    <Button variant="primary" type="submit">
                        Войти
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default Login;
