import React, { Fragment } from 'react'
import './portfolio.css'

import masAd from '../images/MASawakenAd.jpg'
import jwst from '../images/JWST_BRO.jpg'
import vcr from '../images/VC_BayAreaNewspaper_Ad.jpg'
import kkr from '../images/KKR_Wall_Banner.jpg'
import tanners from '../images/PHS_Tanners_Tradeshow_Banner.jpg'
import tps from '../images/toyotaOil.jpg'
import masBB from '../images/MASoutdoor.jpg'
import folsom from '../images/Folsom1.jpg'
import airFlite from '../images/AirFliteMailer.jpg'
import trac from '../images/TRAC_mailer.jpg'
import epsonCedia from '../images/epson_Cedia.jpg'


const Print = () => {
  return (
    <Fragment>
      <h1 className="title">Print Samples:</h1>
      <div className="portfolio">

        <div className="portfolio_container">
          <div className="theCard">
            <div className="theFront">
              <img src={masAd} alt="" className="theImage" />
            </div>
            <div className="theBack">Malaysia Airlines – Print Advertising</div>
          </div>
        </div>

        <div className="portfolio_container">
          <div className="theCard">
            <div className="theFront">
              <img src={jwst} alt="" className="theImage" />
            </div>
            <div className="theBack">James Webb Space Telescope Brochure – Northrop Grumman</div>
          </div>
        </div>

        <div className="portfolio_container">
          <div className="theCard">
            <div className="theFront">
              <img src={vcr} alt="" className="theImage" />
            </div>
            <div className="theBack">Vista Collina Resort – Print Advertising</div>
          </div>
        </div>

        <div className="portfolio_container">
          <div className="theCard">
            <div className="theFront">
              <img src={kkr} alt="" className="theImage" />
            </div>
            <div className="theBack">Ko'a Kea Hotel & Resort – Tradeshow Display</div>
          </div>
        </div>

        <div className="portfolio_container">
          <div className="theCard">
            <div className="theFront">
              <img src={tanners} alt="" className="theImage" />
            </div>
            <div className="theBack">Tanner's Restaurant at Paséa Hotel – Pull-up Banner</div>
          </div>
        </div>

        <div className="portfolio_container">
          <div className="theCard">
            <div className="theFront">
              <img src={tps} alt="" className="theImage" />
            </div>
            <div className="theBack">Toyota Parts & Services – Billboard</div>
          </div>
        </div>

        <div className="portfolio_container">
          <div className="theCard">
            <div className="theFront">
              <img src={masBB} alt="" className="theImage" />
            </div>
            <div className="theBack">Malaysia Airlines – Billboard</div>
          </div>
        </div>

        <div className="portfolio_container">
          <div className="theCard">
            <div className="theFront">
              <img src={folsom} alt="" className="theImage" />
            </div>
            <div className="theBack">Folsom Power Plant Museum – Wall Display</div>
          </div>
        </div>

        <div className="portfolio_container">
          <div className="theCard">
            <div className="theFront">
              <img src={airFlite} alt="" className="theImage" />
            </div>
            <div className="theBack">AirFlite, a subsidiary of Toyota Motor Sales – Direct Mail</div>
          </div>
        </div>

        <div className="portfolio_container">
          <div className="theCard">
            <div className="theFront">
              <img src={trac} alt="" className="theImage" />
            </div>
            <div className="theBack">Toyota Rent-a-Car – Direct Mail</div>
          </div>
        </div>

        <div className="portfolio_container">
          <div className="theCard">
            <div className="theFront">
              <img src={epsonCedia} alt="" className="theImage" />
            </div>
            <div className="theBack">Epson Projectors – Product Information Brochure</div>
          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default Print
