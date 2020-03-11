import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import nscWeb from '../../../images/digital/nsc_web.jpg'


const NscDigitalModal = (props) => {

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
                <img src={nscWeb} alt="" className="modalButton" />
            </div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Novel Spirits Collection</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={nscWeb} alt="" className="titleImage" />
                </Modal.Body>
                {/* <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default NscDigitalModal;
