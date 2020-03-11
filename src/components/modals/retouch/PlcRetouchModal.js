import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import plc_Before from '../../../images/retouch/plInteriorBefore.jpg'
import plc_After from '../../../images/retouch/plInteriorAfter.png'


const PlcRetouchModal = (props) => {

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
            <div onClick={showModal} Display Modal><img src={plc_Before} alt="" className="modalButton" /></div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Pacific Logistics Corporation</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={plc_After} alt="" className="titleImage" /></Modal.Body>
                {/* <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default PlcRetouchModal;
