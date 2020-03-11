import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import masAd from '../../../images/print/masAd.jpg'
// import masLogo from '../../../images/masLogo.png'



const MasModal = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <h2 className="horizontal">Advertising</h2>
            <div onClick={showModal} Display Modal>
                <img src={masAd} alt="" className="modalButton" />
            </div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Malaysia Airlines</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={masAd} alt="" className="titleImage" />
                </Modal.Body>
                {/* <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default MasModal;
