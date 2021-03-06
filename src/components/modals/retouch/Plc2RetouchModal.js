import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

const Plc2RetouchModal = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <h2 className="horizontal">Image Manipulation</h2>
            <div onClick={showModal} Display Modal><img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/retouch/plc2InteriorBefore.jpg" alt="" className="modalButton" /></div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Pacific Logistics Corporation</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/retouch/plc2InteriorAfter.png" alt="" className="titleImage" /></Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Plc2RetouchModal;
