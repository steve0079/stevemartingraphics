import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import jwst from '../../../images/JWST_BRO.png'

const JwstModal = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <div onClick={showModal} Display Modal><img src={jwst} alt="" className="modalButton" /></div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>James Webb Space Telescope</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={jwst} alt="" className="titleImage" /></Modal.Body>
                {/* <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default JwstModal;