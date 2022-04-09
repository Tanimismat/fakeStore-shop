import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ReactModal = ({ product }) => {
    console.log(product)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="info text-white" onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <img className='w-25' src={product.image} alt="" />
                    <Modal.Title>{product.title}</Modal.Title>

                </Modal.Header>
                <h6>${product.price}</h6>
                <Modal.Body>{product.description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ReactModal;