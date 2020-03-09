import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

import tanners from '../../../images/PHS_Tanners_Tradeshow_Banner.jpg'


const TannersModal = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <div onClick={showModal} Display Modal><img src={tanners} alt="" className="modalButton" /></div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Tanner's Restaurant</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={tanners} alt="" className="titleImage" /></Modal.Body>
                {/* <Modal.Footer>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default TannersModal;
