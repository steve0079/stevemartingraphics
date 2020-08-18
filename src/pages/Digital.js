import React from 'react'

//modalImports
import MasDigitalModal from '../components/modals/digital/MasDigitalModal'
import NscDigitalModal from '../components/modals/digital/NscDigitalModal'
import LppDigitalModal from '../components/modals/digital/LppDigitalModal'
import VcrDigitalModal from '../components/modals/digital/VcrDigitalModal'
import BrsDigitalModal from '../components/modals/digital/BrsDigitalModal'
import McDigitalModal from '../components/modals/digital/McDigitalModal'
import EpsonDigitalModal from '../components/modals/digital/EpsonDigitalModal'
import FicDigitalModal from '../components/modals/digital/FicDigitalModal'
import DlinkDigitalModal from '../components/modals/digital/DlinkDigitalModal'
import ThirtyOneLabsDigitalModal from '../components/modals/digital/ThirtyOneLabsDigitalModal'


//cssImports
import './portfolio.css'

const Digital = () => {

    return (
        <div className="digital_container">
            <h1 className="title">The Work:</h1>
            <div className="portfolio">

            <div className="portfolio_container">
                    <div className="theCard">
                        <div className="theFront">
                            <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/logo/ficLogo.jpg" alt="" className="theLogo" />
                            <h2>Websites</h2>
                        </div>
                        <div className="theBack">
                            <FicDigitalModal />
                        </div>
                    </div>
                </div>

                <div className="portfolio_container">
                    <div className="theCard">
                        <div className="theFront">
                            <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/logo/reverse_logo/31labs_logo_horz.png" alt="" className="theLogo" />
                            <h2>Websites</h2>
                        </div>
                        <div className="theBack">
                            <ThirtyOneLabsDigitalModal />
                        </div>
                    </div>
                </div>

                <div className="portfolio_container">
                    <div className="theCard">
                        <div className="theFront">
                            <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/logo/reverse_logo/nscLogo.png" alt="" className="theLogo" />
                            <h2>Websites</h2>
                        </div>
                        <div className="theBack">
                            <NscDigitalModal />
                        </div>
                    </div>
                </div>

                <div className="portfolio_container">
                    <div className="theCard">
                        <div className="theFront">
                            <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/logo/reverse_logo/masLogo.png" alt="" className="theLogo" />
                            <h2>Websites</h2>
                        </div>
                        <div className="theBack">
                            <MasDigitalModal />
                        </div>
                    </div>
                </div>

                <div className="portfolio_container">
                    <div className="theCard">
                        <div className="theFront">
                            <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/logo/reverse_logo/lppLogo.png" alt="" className="theLogo" />
                            <h2>Websites</h2>
                        </div>
                        <div className="theBack">
                            <LppDigitalModal />
                        </div>
                    </div>
                </div>

                <div className="portfolio_container">
                    <div className="theCard">
                        <div className="theFront">
                            <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/logo/reverse_logo/epsonLogo.png" alt="" className="theLogo" />
                            <h2>Landing Page</h2>
                        </div>
                        <div className="theBack">
                            <EpsonDigitalModal />
                        </div>
                    </div>
                </div>

                <div className="portfolio_container">
                    <div className="theCard">
                        <div className="theFront">
                            <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/logo/reverse_logo/dlinkLogo.png" alt="" className="theLogo" />
                            <h2>Landing Page</h2>
                        </div>
                        <div className="theBack">
                            <DlinkDigitalModal />
                        </div>
                    </div>
                </div>

                <div className="portfolio_container">
                    <div className="theCard">
                        <div className="theFront">
                            <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/logo/reverse_logo/vcrLogo.png" alt="" className="theLogo" />
                            <h2>Banner Ads</h2>
                        </div>
                        <div className="theBack">
                            <VcrDigitalModal />
                        </div>
                    </div>
                </div>

                <div className="portfolio_container">
                    <div className="theCard">
                        <div className="theFront">
                            <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/logo/reverse_logo/mcLogo.png" alt="" className="theLogo" />
                            <h2>Social Media</h2>
                        </div>
                        <div className="theBack">
                            <McDigitalModal />
                        </div>
                    </div>
                </div>

                <div className="portfolio_container">
                    <div className="theCard">
                        <div className="theFront">
                            <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/logo/reverse_logo/brsLogo.png" alt="" className="theLogo" />
                            <h2>Digital Advertising</h2>
                        </div>
                        <div className="theBack">
                            <BrsDigitalModal />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Digital
