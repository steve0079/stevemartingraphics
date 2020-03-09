import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import trac from '../../../images/TRAC_mailer.png'
import toyotaLogo from '../../../images/toyotaLogo.png'


const TracModal = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <div onClick={showModal} Display Modal><img src={trac} alt="" className="modalButton" /></div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Toyota Rent-a-Car</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={trac} alt="" className="titleImage" /></Modal.Body>
                {/* <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default TracModal;
