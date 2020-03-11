import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import nkBefore from '../../../images/retouch/NK_Before.jpg'
import nkAfter from '../../../images/retouch/NK_After.png'


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
            <div onClick={showModal} Display Modal><img src={nkBefore} alt="" className="modalButton" /></div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Nihon Koden Monitoring System</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={nkAfter} alt="" className="titleImage" /></Modal.Body>
                {/* <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default OcRetouchModal;
