import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import Mitsu_Before from '../../../images/retouch/Mitsu_Before.jpg'
import Mitsu_After from '../../../images/retouch/Mitsu_After.png'


const MitsuRetouchModal = (props) => {

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
            <div onClick={showModal} Display Modal><img src={Mitsu_Before} alt="" className="modalButton" /></div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Mitsubishi Electric</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={Mitsu_After} alt="" className="titleImage" /></Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MitsuRetouchModal;
