import React, { FC } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegistrationFields } from "../../types/rhf/registration";

const Registration: FC = () => {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IRegistrationFields>({ mode: "onChange" });

    const onSumbit: SubmitHandler<IRegistrationFields> = (data) => {
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
                    <Form.Group className="mb-3 mt-2">
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
                    <Form.Group className="mb-3">
                        <Form.Label>Подтверждение пароля</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Подтвердите пароль"
                            {...register("repeatPassword", {
                                required: "Password is require field!",
                                pattern: {
                                    value: /^[a-zA-Z0-9_]+$/,
                                    message: "Please enter valid password!",
                                },
                                validate: (item: string) => {
                                    if (watch("password") !== item) {
                                        return "Your passwords don't match";
                                    }
                                },
                            })}
                        />
                    </Form.Group>
                    {errors.repeatPassword && (
                        <div style={{ color: "red" }} className="mb-3 mt-2">
                            {errors.repeatPassword.message}
                        </div>
                    )}
                    <Button variant="primary" type="submit">
                        Зарегистрироваться
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default Registration;
