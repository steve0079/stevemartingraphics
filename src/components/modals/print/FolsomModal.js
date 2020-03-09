import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import folsom from '../../../images/Folsom1.jpg'
import calParks from '../../../images/calStateParksLogo.png'



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
            <div onClick={showModal} Display Modal><img src={folsom} alt="" className="modalButton" /></div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Folsom Water Museum</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={folsom} alt="" className="titleImage" /></Modal.Body>
                {/* <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default FolsomModal;
