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


const Retouching = () => {

  return (
    <div className="retouch_container">
      <h1 className="title">The Work:</h1>
      <div className="portfolio">

        <div className="portfolio_container">
          <div className="theCard">
            <div className="theFront">
              <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/logo/reverse_logo/nkLogo.png" alt="" className="theLogo" />
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
              <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/logo/reverse_logo/novusMedicalLogo.png" alt="" className="theLogo" />
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
              <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/logo/reverse_logo/oliveCrestLogo.png" alt="" className="theLogo" />
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
              <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/logo/reverse_logo/aquariumPacificLogo.png" alt="" className="theLogo" />
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
              <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/logo/reverse_logo/plcLogo.png" alt="" className="theLogo" />
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
              <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/logo/reverse_logo/mitsuLogo.png" alt="" className="theLogo" />
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
              <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/logo/reverse_logo/mbLogo.png" alt="" className="theLogo" />
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
              <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/logo/reverse_logo/plcLogo.png" alt="" className="theLogo" />
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
