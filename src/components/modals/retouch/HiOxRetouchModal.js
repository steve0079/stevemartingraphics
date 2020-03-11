import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import hiOxBefore from '../../../images/retouch/hiOx_Before.jpg'
import hiOxAfter from '../../../images/retouch/hiOx_After.png'


const HiOxRetouchModal = (props) => {

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
            <div onClick={showModal} Display Modal><img src={hiOxBefore} alt="" className="modalButton" /></div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Novus Medical HiOx Oxygen Masks</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={hiOxAfter} alt="" className="titleImage" /></Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default HiOxRetouchModal;
