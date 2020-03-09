import React from 'react'

//modalImports
import MasModal from '../components/modals/print/MasModal'
import MasOutdoorModal from '../components/modals/print/MasOutdoorModal'
import VcrModal from '../components/modals/print/VcrModal'
import KkrModal from '../components/modals/print/KkrModal'
import TannersModal from '../components/modals/print/TannersModal'
import TracModal from '../components/modals/print/TracModal'
import TpsModal from '../components/modals/print/TpsModal'
import AirMailModal from '../components/modals/print/AirMailModal'
import JwstModal from '../components/modals/print/JwstModal'
import EpsonCediaModal from '../components/modals/print/EpsonCediaModal'
import FolsomModal from '../components/modals/print/FolsomModal'

//cssImports
import './portfolio.css'

//logoImports
import masLogo from '../images/masLogo.png'
import ngLogo from '../images/northropGrummanLogo.png'
import vcrLogo from '../images/vcrLogo.png'
import kkrLogo from '../images/kkrLogo.png'
import tannersLogo from '../images/tannersLogo.png'
import calParks from '../images/calStateParksLogo.png'
import afLogo from '../images/airFliteLogo.png'
import toyotaLogo from '../images/toyotaLogo.png'
import epsonLogo from '../images/epsonLogo.png'


const Print = (props) => {

  return (
    <div className="print_container">
      <h1 className="title">The Work:</h1>
      <div className="portfolio">
        <div className="portfolio_container mas">
          <div className="theCard">
            <div className="theFront">
              <img src={masLogo} alt="" className="theLogo" />
              <h2>Advertising</h2>
            </div>
            <div className="theBack">
              <MasModal />
            </div>
          </div>
        </div>

        <div className="portfolio_container jwst">
          <div className="theCard">
            <div className="theFront">
              <img src={ngLogo} alt="" className="theLogo" />
              <h2>Brochures</h2>
            </div>
            <div className="theBack">
              <JwstModal />
            </div>
          </div>
        </div>

        <div className="portfolio_container vcr">
          <div className="theCard">
            <div className="theFront">
              <img src={vcrLogo} alt="" className="theLogo" />
              <h2>Advertising</h2>
            </div>
            <div className="theBack">
            <VcrModal />
            </div>
          </div>
        </div>

        <div className="portfolio_container kkr">
          <div className="theCard">
            <div className="theFront">
              <img src={kkrLogo} alt="" className="theLogo" />
              <h2>Displays</h2>
            </div>
            <div className="theBack">
              <KkrModal />
            </div>
          </div>
        </div>

        <div className="portfolio_container tanners">
          <div className="theCard">
            <div className="theFront">
              <img src={tannersLogo} alt="" className="theLogo" />
              <h2>Displays</h2>
            </div>
            <div className="theBack">
              <TannersModal />
            </div>
          </div>
        </div>

        <div className="portfolio_container tps">
          <div className="theCard">
            <div className="theFront">
              <img src={toyotaLogo} alt="" className="theLogo" />
              <h2>Posters</h2>
            </div>
            <div className="theBack">
              <TpsModal />
            </div>
          </div>
        </div>

        <div className="portfolio_container masBB">
          <div className="theCard">
            <div className="theFront">
              <img src={masLogo} alt="" className="theLogo" />
              <h2>Outdoor</h2>
            </div>
            <div className="theBack">
              <MasOutdoorModal />
            </div>
          </div>
        </div>

        <div className="portfolio_container folsom">
          <div className="theCard">
            <div className="theFront">
              <img src={calParks} alt="" className="theLogo" />
              <h2>Displays</h2>
            </div>
            <div className="theBack">
              <FolsomModal />
            </div>
          </div>
        </div>

        <div className="portfolio_container airFlite">
          <div className="theCard">
            <div className="theFront">
              <img src={afLogo} alt="" className="theLogo" />
              <h2>Direct Mail</h2>
            </div>
            <div className="theBack">
              <AirMailModal />
            </div>
          </div>
        </div>

        <div className="portfolio_container trac">
          <div className="theCard">
            <div className="theFront">
              <img src={toyotaLogo} alt="" className="theLogo" />
              <h2>Direct Mail</h2>
            </div>
            <div className="theBack">
              <TracModal />
            </div>
          </div>
        </div>

        <div className="portfolio_container epsonCedia">
          <div className="theCard">
            <div className="theFront">
              <img src={epsonLogo} alt="" className="theLogo" />
              <h2>Brochures</h2>
            </div>
            <div className="theBack">
              <EpsonCediaModal />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Print;