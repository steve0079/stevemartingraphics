import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import kkr from '../../../images/print/KKR_Wall_Banner.jpg'



const KkrModal = (props) => {

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
            <div onClick={showModal} Display Modal><img src={kkr} alt="" className="modalButton" /></div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>K'oa Kea Resort & Hotel</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={kkr} alt="" className="titleImage" /></Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default KkrModal;
