import React from 'react'
import MasModal from '../components/modals/print/MasModal'
import VcrModal from '../components/modals/print/VcrModal'
import './portfolio.css'

import masLogo from '../images/masLogo.png'
import jwst from '../images/JWST_BRO.png'
import ngLogo from '../images/northropGrummanLogo.png'
import vcrLogo from '../images/vcrLogo.png'
import kkr from '../images/KKR_Wall_Banner.jpg'
import kkrLogo from '../images/kkrLogo.png'
import tanners from '../images/PHS_Tanners_Tradeshow_Banner.jpg'
import tannersLogo from '../images/tannersLogo.png'
import tps from '../images/toyotaOilPoster.jpg'
import masBB from '../images/MASoutdoor.jpg'
import folsom from '../images/Folsom1.jpg'
import calParks from '../images/calStateParksLogo.png'
import airFlite from '../images/AirFliteMailer.png'
import afLogo from '../images/airFliteLogo.png'
import trac from '../images/TRAC_mailer.png'
import toyotaLogo from '../images/toyotaLogo.png'
import epsonCedia from '../images/epson_Cedia.png'
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
              <img src={jwst} alt="" className="theImage" />
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
              <img src={kkr} alt="" className="theImage" />
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
              <img src={tanners} alt="" className="theImage" />
            </div>
          </div>
        </div>

        <div className="portfolio_container tps">
          <div className="theCard">
            <div className="theFront">
              <img src={toyotaLogo} alt="" className="theLogo" />
              <h2>Outdoor</h2>
            </div>
            <div className="theBack">
              <img src={tps} alt="" className="theImage" />
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
              <img src={masBB} alt="" className="theImage" />
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
              <img src={folsom} alt="" className="theImage" />
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
              <img src={airFlite} alt="" className="theImage" />
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
              <img src={trac} alt="" className="theImage" />
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
              <img src={epsonCedia} alt="" className="theImage" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Print;