import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import vcr from '../../../images/VC_BayAreaNewspaper_Ad.jpg'
import vcrLogo from '../../../images/vcrLogo.png'


const VcrModal = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <div onClick={showModal} Display Modal><img src={vcr} alt="" className="modalButton" /></div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Vista Collina Resort</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={vcr} alt="" className="titleImage" /></Modal.Body>
                {/* <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default VcrModal;
