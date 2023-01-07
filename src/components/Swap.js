import React, { useState } from 'react'
import logo from "./assets/Logo.png";
import llight from "./images/logo-full-white.png";
import bnb from "./assets/bnb.png";
import busd from "./assets/busd.png";
import secure from "./images/secure1.png"
import "./assets/css/theme.css";
import "./assets/css/rtl.css";
import "./assets/css/style-azalea.css";
import "./assets/css/style-dark.css";
import "./assets/css/style-jasmine.css";
import "./assets/css/style-lavender.css";
import "./assets/css/style-lobelia.css";
import "./assets/css/style-lungwort.css";
import "./assets/css/style-muscari.css";
import "./assets/css/style-salvia.css";
import "./assets/css/style-zinnia.css";
import "./assets/css/style.css";
import "./assets/css/vendor.bundle.bs4.css";
import "./assets/css/vendor.bundle.css";
import "../assets/about.css";
import "./assets/css/swap-button.css"
import particlesConfig from "../assets/particlesConfig.json";
import Particle from "react-particles-js";
import { BUDDY } from "ci-info";
import "./bybarter/assets/css/site/site.min.css";
import "./bybarter/assets/fontawesome/css/all.min.css";
import Swapper from './Swapper';
import P2p from './P2p';
import Orderbook from './Orderbook';
export default function Swap() {
    const [showp2p, setShowp2p] = useState(true)
    return (
        <div className="header-banner bg-theme-grad-s2" >

            <div className="nk-banner" id="carddiv">
                <div className="banner banner-fs banner-single banner-s1 banner-s1-overlay">
                    <div className="banner-wrap">
                        <div className="container" id="carddiv" >
                            <div
                                className="row align-items-center ">


                                <div className="col-lg-6 text-center text-lg-start">
                                    <div className="banner-caption tc-light">
                                        <div className="cpn-head mt-0">
                                            <h1 className="title title-thin title-xl-2">Arabella (ABLC) <br></br> A P2P DEX Platform Where are you can Buy ABLC, BNB, BUSD & USDT Coins.</h1>
                                            {/* <h1 className="title title-thin title-xl-2">A Dex P2P Platform Where are you can </h1>
                                                            <h1 className="title title-thin title-xl-2">Buy Arbella, BNB & BUSD Coins.</h1> */}

                                        </div>
                                        {/* <div className="cpn-text cpn-text-s2">
                                                            <p className="lead-s2 lead-light">Full transparency. More trust, Minimize
                                                    risk, maximize rewards.</p>
                                                        </div> */}
                                        {/* <div className="cpn-btns">
                                                            <ul className="btn-grp">
                                                                <li><a className="btn btn-md btn-primary btn-outline" href="#">White
                                                            Paper</a></li>
                                                                <li><a className="btn btn-md btn-primary btn-outline" href="#">One
                                                            Pager</a></li>
                                                            </ul>
                                                        </div> */}

                                    </div>
                                </div>
                                <div className="col-lg-5 mx-auto">
                                    <div className='pdb mgx m-text-center'>
                                        <button onClick={() => setShowp2p(true)} className='p2p-button'>
                                            P2P
                                        </button>
                                    </div>
                                    <div className="token-status  round bg-theme tc-light" id="wset">
                                        {showp2p === false ? <Swapper /> : <P2p />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nk-ovm shape-q">

            </div>

            <div id="particles-bg" className="particles-container particles-bg" data-pt-base="#00c0fa"
                data-pt-base-op=".3" data-pt-line="#2b56f5" data-pt-line-op=".5" data-pt-shape="#00c0fa"
                data-pt-shape-op=".2">
                <Particle params={particlesConfig} className="App-particles__container" />

            </div>
            <>
                <Orderbook />
            </>
        </div>
    )
}
