import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import tps from '../../../images/print/toyotaOilPoster.jpg'



const TpsModal = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <h2 className="horizontal">Posters</h2>
            <div onClick={showModal} Display Modal><img src={tps} alt="" className="modalButton" /></div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Toyota Parts & Service</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={tps} alt="" className="titleImage" /></Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default TpsModal;
