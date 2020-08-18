import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

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
            <div onClick={showModal} Display Modal><img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/retouch/Mitsu_Before.jpg" alt="" className="modalButton" /></div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Mitsubishi Electric</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/retouch/Mitsu_After.png" alt="" className="titleImage" /></Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MitsuRetouchModal;
