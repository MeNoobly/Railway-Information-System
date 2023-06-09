import React, { FC, useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { ILoginFields } from "../../types/rhf/login";
import { useNavigate } from "react-router-dom";
import { login } from "../http/userAPI";
import { MAIN_ROUTE } from "../utils/consts";
import { Context } from "..";

const Login: FC = () => {
    const navigate = useNavigate();
    const { user } = useContext(Context);

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        reset,
        setError,
    } = useForm<ILoginFields>({ mode: "onChange" });

    const loginHandler = async () => {
        try {
            const values = getValues();
            const data = await login(values.login, values.password);
            user.isAuth = true;
            reset();
            navigate(MAIN_ROUTE);
        } catch (error: Error | unknown) {
            setError("password", {
                type: "custom",
                message: "Invalid password entered",
            });
        }
    };

    const onSumbit: SubmitHandler<ILoginFields> = (data) => {
        loginHandler();
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
