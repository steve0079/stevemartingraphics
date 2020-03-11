import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import folsom from '../../../images/print/Folsom1.jpg'



const FolsomModal = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <h2 className="horizontal">Displays</h2>
            <div onClick={showModal} Display Modal><img src={folsom} alt="" className="modalButton" /></div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Folsom Water Museum</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={folsom} alt="" className="titleImage" /></Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default FolsomModal;
