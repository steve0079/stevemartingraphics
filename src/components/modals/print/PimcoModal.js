import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import pimco from '../../../images/print/PimcoBook.png'
// import PimcoLogo from '../../../images/PimcoLogo.png'


const PimcoModal = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <h2 className="horizontal">Books</h2>
            <div onClick={showModal} Display Modal>
                <img src={pimco} alt="" className="modalButton" />
                </div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Pimco - The Beach</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={pimco} alt="" className="titleImage" /></Modal.Body>
                {/* <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default PimcoModal;
