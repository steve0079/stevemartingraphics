import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import masAd from '../../../images/masAd.jpg'


const MasModal = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={showModal} Display Modal><img src={masAd} alt="" className="modalButton" /></button>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Malaysia Airlines</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={masAd} alt="" className="titleImage" /></Modal.Body>
                {/* <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default MasModal;
