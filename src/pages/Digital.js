import React from 'react'

//modalImports
import MasDigitalModal from '../components/modals/digital/MasDigitalModal'
import NscDigitalModal from '../components/modals/digital/NscDigitalModal'
import LppDigitalModal from '../components/modals/digital/LppDigitalModal'
import VcrDigitalModal from '../components/modals/digital/VcrDigitalModal'
import BrsDigitalModal from '../components/modals/digital/BrsDigitalModal'
import McDigitalModal from '../components/modals/digital/McDigitalModal'
import EpsonDigitalModal from '../components/modals/digital/EpsonDigitalModal'
import DcDigitalModal from '../components/modals/digital/DcDigitalModal'
import DlinkDigitalModal from '../components/modals/digital/DlinkDigitalModal'
import ThirtyOneLabsDigitalModal from '../components/modals/digital/ThirtyOneLabsDigitalModal'


//cssImports
import './portfolio.css'

//logoImports
import vcrLogo from '../images/logo/vcrLogo.png'
import brsLogo from '../images/logo/brsLogo.png'
import mcLogo from '../images/logo/mcLogo.png'
import masLogo from '../images/logo/masLogo.png'
import nscLogo from '../images/logo/nscLogo.png'
import lppLogo from '../images/logo/lppLogo.png'
import dlinkLogo from '../images/logo/dlinkLogo.png'
import devConnectLogo from '../images/logo/devConnectLogo.png'
import epsonLogo from '../images/logo/epsonLogo.png'
import thirtyOneLogo from '../images/logo/31labs_logo_horz.png'


const Digital = () => {

    return (
        <div className="digital_container">
            <h1 className="title">The Work:</h1>
            <div className="portfolio">

                <div className="portfolio_container">
                    <div className="theCard">
                        <div className="theFront">
                            <img src={thirtyOneLogo} alt="" className="theLogo" />
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
                            <img src={nscLogo} alt="" className="theLogo" />
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
                            <img src={masLogo} alt="" className="theLogo" />
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
                            <img src={lppLogo} alt="" className="theLogo" />
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
                            <img src={devConnectLogo} alt="" className="theLogo" />
                            <h2>Websites</h2>
                        </div>
                        <div className="theBack">
                            <DcDigitalModal />
                        </div>
                    </div>
                </div>

                <div className="portfolio_container">
                    <div className="theCard">
                        <div className="theFront">
                            <img src={epsonLogo} alt="" className="theLogo" />
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
                            <img src={dlinkLogo} alt="" className="theLogo" />
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
                            <img src={vcrLogo} alt="" className="theLogo" />
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
                            <img src={mcLogo} alt="" className="theLogo" />
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
                            <img src={brsLogo} alt="" className="theLogo" />
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
