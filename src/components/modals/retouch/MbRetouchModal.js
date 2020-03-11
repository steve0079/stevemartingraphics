import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import mbBefore from '../../../images/retouch/mbShoppingCartBefore.png'
import mbAfter from '../../../images/retouch/mbShoppingCartAfter.png'


const MbRetouchModal = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <h2 className="horizontal">Image Creation</h2>
            <div onClick={showModal} Display Modal><img src={mbBefore} alt="" className="modalButton" /></div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Melfred Borzall</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={mbAfter} alt="" className="titleImage" /></Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MbRetouchModal;
