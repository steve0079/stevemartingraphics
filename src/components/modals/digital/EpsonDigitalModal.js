import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import epsonLanding from '../../../images/digital/epsonLanding.jpg'


const EpsonDigitalModal = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <h2 className="horizontal">Landing Page</h2>
            <div onClick={showModal} Display Modal>
                <img src={epsonLanding} alt="" className="modalButton" />
            </div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Epson Projectors</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={epsonLanding} alt="" className="titleImage" />
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EpsonDigitalModal;
