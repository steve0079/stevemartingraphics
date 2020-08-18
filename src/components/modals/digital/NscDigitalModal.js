import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'


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
                <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/digital/nsc_web.jpg" alt="" className="modalButton" />
            </div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Novel Spirits Collection</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Link to="//stevemartingraphics.com/novel_spirits_4" target="_blank">
                        <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/digital/nsc_web.jpg" alt="" className="titleImage" />
                    </Link>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default NscDigitalModal;
