import React, { FC } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar: FC = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        Railway Information System
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="/login">Войти</Nav.Link>
                        <Nav.Link href="/registration">
                            Зарегистрироваться
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
