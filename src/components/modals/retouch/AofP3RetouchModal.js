import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import AofP3_Before from '../../../images/retouch/AofP3_Before.png'
import AofP3_After from '../../../images/retouch/AofP3_After.png'


const HiOxRetouchModal = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <h2 className="horizontal">Image Manipulation</h2>
            <div onClick={showModal} Display Modal><img src={AofP3_Before} alt="" className="modalButton" /></div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Aquarium of the Pacific</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={AofP3_After} alt="" className="titleImage" /></Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default HiOxRetouchModal;
