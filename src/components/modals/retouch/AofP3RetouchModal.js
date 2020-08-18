import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modals.css'

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
            <div onClick={showModal} Display Modal><img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/retouch/AofP3_Before.png" alt="" className="modalButton" /></div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Aquarium of the Pacific</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/retouch/AofP3_After.png" alt="" className="titleImage" /></Modal.Body>
                <Modal.Footer>
                    <p className='modalBody'>The top six images have been used to create the final image below. Each of the six images came from the origin RAW image and color corrected / balanced for each specific area. Then, each image was layered upon each other, masked out, retouched and flattened to make the final composed image.</p>
                    <button onClick={hideModal}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default HiOxRetouchModal;
