import React, { FC, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { IModalProps } from "../../../types/modals/modal";

const CreateTripType: FC<IModalProps> = ({ show, handleClose }) => {
    const [value, setValue] = useState("");

    const addType = () => {
        setValue("");
        handleClose();
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавить тип поездки</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            placeholder="Введите тип поездки"
                            value={value}
                            onChange={(event) => setValue(event.target.value)}
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={handleClose}>
                        Закрыть
                    </Button>
                    <Button variant="outline-success" onClick={addType}>
                        Добавить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CreateTripType;
