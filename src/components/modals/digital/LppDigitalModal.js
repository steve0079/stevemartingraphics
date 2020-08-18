import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'


const LppDigitalModal = (props) => {

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
                <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/digital/lpp_web.jpg" alt="" className="modalButton" />
            </div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>La Punta Papagayo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/digital/lpp_web.jpg" alt="" className="titleImage" />
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default LppDigitalModal;
