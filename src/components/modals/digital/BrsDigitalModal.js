import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import brsDigitalAd from '../../../images/digital/brsDigitalAd.jpg'


const BrsDigitalModal = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <h2 className="horizontal">Digital Advertising</h2>
            <div onClick={showModal} Display Modal>
                <img src={brsDigitalAd} alt="" className="modalButton" />
            </div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Angel Oak Restaurant at Bacara Resort</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={brsDigitalAd} alt="" className="titleImage" />
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default BrsDigitalModal;
