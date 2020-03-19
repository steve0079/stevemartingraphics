import React from 'react'

//cssImports
import './portfolio.css'

//modalImports
import NkRetouchModal from '../components/modals/retouch/NkRetouchModal'
import OcRetouchModal from '../components/modals/retouch/OcRetouchModal'
import HiOxRetouchModal from '../components/modals/retouch/HiOxRetouchModal'
import AofP3RetouchModal from '../components/modals/retouch/AofP3RetouchModal'
import MitsuRetouchModal from '../components/modals/retouch/MitsuRetouchModal'
import MbRetouchModal from '../components/modals/retouch/MbRetouchModal'
import PlcRetouchModal from '../components/modals/retouch/PlcRetouchModal'
import Plc2RetouchModal from '../components/modals/retouch/Plc2RetouchModal'


//logoImports
import oliveCrestLogo from '../images/logo/reverse_logo/oliveCrestLogo.png'
import nkLogo from '../images/logo/reverse_logo/nkLogo.png'
import hiOxLogo from '../images/logo/reverse_logo/novusMedicalLogo.png'
import aqLogo from '../images/logo/reverse_logo/aquariumPacificLogo.png'
import mitsuLogo from '../images/logo/reverse_logo/mitsuLogo.png'
import mbLogo from '../images/logo/reverse_logo/mbLogo.png'
import plcLogo from '../images/logo/reverse_logo/plcLogo.png'


const Retouching = () => {

  return (
    <div className="retouch_container">
      <h1 className="title">The Work:</h1>
      <div className="portfolio">

        <div className="portfolio_container">
          <div className="theCard">
            <div className="theFront">
              <img src={nkLogo} alt="" className="theLogo" />
              <h2>Image Retouching</h2>
            </div>
            <div className="theBack">
              <NkRetouchModal />
            </div>
          </div>
        </div>

        <div className="portfolio_container">
          <div className="theCard">
            <div className="theFront">
              <img src={hiOxLogo} alt="" className="theLogo" />
              <h2>Image Retouching</h2>
            </div>
            <div className="theBack">
              <HiOxRetouchModal />
            </div>
          </div>
        </div>

        <div className="portfolio_container">
          <div className="theCard">
            <div className="theFront">
              <img src={oliveCrestLogo} alt="" className="theLogo" />
              <h2>Image Retouching</h2>
            </div>
            <div className="theBack">
              <OcRetouchModal />
            </div>
          </div>
        </div>

        <div className="portfolio_container">
          <div className="theCard">
            <div className="theFront">
              <img src={aqLogo} alt="" className="theLogo" />
              <h2>Image Manipulation</h2>
            </div>
            <div className="theBack">
              <AofP3RetouchModal />
            </div>
          </div>
        </div>

        <div className="portfolio_container">
          <div className="theCard">
            <div className="theFront">
              <img src={plcLogo} alt="" className="theLogo" />
              <h2>Image Manipulation</h2>
            </div>
            <div className="theBack">
              <Plc2RetouchModal />
            </div>
          </div>
        </div>

        <div className="portfolio_container">
          <div className="theCard">
            <div className="theFront">
              <img src={mitsuLogo} alt="" className="theLogo" />
              <h2>Image Manipulation</h2>
            </div>
            <div className="theBack">
              <MitsuRetouchModal />
            </div>
          </div>
        </div>

        <div className="portfolio_container">
          <div className="theCard">
            <div className="theFront">
              <img src={mbLogo} alt="" className="theLogo" />
              <h2>Image Creation</h2>
            </div>
            <div className="theBack">
              <MbRetouchModal />
            </div>
          </div>
        </div>

        <div className="portfolio_container">
          <div className="theCard">
            <div className="theFront">
              <img src={plcLogo} alt="" className="theLogo" />
              <h2>Image Manipulation</h2>
            </div>
            <div className="theBack">
              <PlcRetouchModal />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Retouching
