import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import dLinkLanding from '../../../images/digital/dLinkLanding.jpg'


const DlinkDigitalModal = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <h2 className="horizontal">Landing Page</h2>
            <div onClick={showModal} Display Modal>
                <img src={dLinkLanding} alt="" className="modalButton" />
            </div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>D-Link Home Security</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={dLinkLanding} alt="" className="titleImage" />
                </Modal.Body>
                {/* <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default DlinkDigitalModal;
