import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import epsonCedia from '../../../images/epson_Cedia.png'
import epsonLogo from '../../../images/epsonLogo.png'


const EpsonCediaModal = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <div onClick={showModal} Display Modal><img src={epsonCedia} alt="" className="modalButton" /></div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Epson Cedia Brochure</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={epsonCedia} alt="" className="titleImage" /></Modal.Body>
                {/* <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default EpsonCediaModal;
