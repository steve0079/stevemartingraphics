import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import ocBefore from '../../../images/retouch/OC_Before.jpg'
import ocAfter from '../../../images/retouch/OC_After.png'


const OcRetouchModal = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <h2 className="horizontal">Image Retouching</h2>
            <div onClick={showModal} Display Modal><img src={ocBefore} alt="" className="modalButton" /></div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Olive Crest</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={ocAfter} alt="" className="titleImage" /></Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default OcRetouchModal;
