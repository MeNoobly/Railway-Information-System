import React, { FC, useState } from "react";
import { IModalProps } from "../../../types/modals/modal";
import { Modal, Button, Form } from "react-bootstrap";

const CreateTrainType: FC<IModalProps> = ({ show, handleClose }) => {
    const [value, setValue] = useState("");

    const addType = () => {
        setValue("");
        handleClose();
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавить тип поезда</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            placeholder="Введите тип поезда"
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

export default CreateTrainType;
