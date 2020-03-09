import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import airFlite from '../../../images/AirFliteMailer.png'

const AirMailModal = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <div onClick={showModal} Display Modal><img src={airFlite} alt="" className="modalButton" /></div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>AirFlite Direct Mail</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={airFlite} alt="" className="titleImage" /></Modal.Body>
                {/* <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default AirMailModal;
