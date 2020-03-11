import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import devConnectWeb from '../../../images/digital/devConnectWeb.jpg'


const DcDigitalModal = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <h2 className="horizontal">Websites</h2>
            <div onClick={showModal} Display Modal>
                <img src={devConnectWeb} alt="" className="modalButton" />
            </div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Developer Connector</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={devConnectWeb} alt="" className="titleImage" />
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DcDigitalModal;
