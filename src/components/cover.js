import React, { useState } from "react";
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
import particlesConfig from "../assets/particlesConfig.json";
import Particle from "react-particles-js";
import { BUDDY } from "ci-info";
import "./bybarter/assets/css/site/site.min.css";
import "./bybarter/assets/fontawesome/css/all.min.css";
import Swap from "./Swap";
import { ConnectButton } from '@rainbow-me/rainbowkit';



















function Cover() {

    const [isActive, setActive] = useState(false);

    const showMenu = () => {
        setActive(!isActive);
    };



    //     function test() {
    //     let firstValue=document.getElementById("list1").value;
    //     let secValue=document.getElementById("list2").value;
    //     if (firstValue =="ABCL") {
    //         secValue=="BUSD";
    //     }
    //     else if (secValue=="BNB") {
    //         firstValue="BUSD";

    //     }


    //   }
    return (
        <>

            <body id="mainbody" className="nk-body body-wider theme-dark mode-onepage">
                <div className="nk-wrap">
                    <header className="nk-header page-header is-transparent is-sticky is-shrink" id="header">

                        <div className="header-main">
                            <div className="container">
                                <div className="header-wrap">
                                    <div>
                                        <div className="header-logo logo">
                                            <a href="./" className="logo-link">
                                                <img className="logo-dark" id="logo" src={logo} />
                                                <img className="logo-light" id="logo" src={logo}
                                                    alt="logo" />
                                            </a>
                                        </div>

                                        <div className="header-nav-toggle" onClick={showMenu} >
                                            <a href="#" className="navbar-toggle" data-menu-toggle="header-menu">
                                                <div className="toggle-line">
                                                    <span></span>
                                                </div>
                                            </a>
                                        </div>


                                    </div>
                                    <div className="m-me d-flex align-items-center">
                                        <div className={isActive ? 'm-menu-show header-navbar header-navbar-s2' : 'header-navbar header-navbar-s2'} >
                                            <nav className="header-menu justify-content-between" id="header-menu">
                                                <ul className="menu">
                                                    <li id="lpd" className="menu-item lightpap"><a className="menu-link nav-link" href="#about">Light Paper</a></li>
                                                    <li id="lpd" className="menu-item "><a className="menu-link nav-link" href="#overview">Docs</a></li>

                                                    {/* <li className="menu-item"><a className="menu-link nav-link" href="#works">How It Works</a>
                                                </li>
                                                <li className="menu-item"><a className="menu-link nav-link" href="#token">ICO Token</a></li>
                                                <li className="menu-item"><a className="menu-link nav-link" href="#roadmap">Roadmap</a></li>
                                                <li className="menu-item"><a className="menu-link nav-link" href="#team">Team</a></li>
                                                <li className="menu-item has-sub">
                                                    <a className="menu-link nav-link menu-toggle" href="#">More</a>
                                                    <ul className="menu-sub menu-drop">
                                                        <li className="menu-item"><a className="menu-link nav-link" href="#faq">Faq</a></li>
                                                        <li className="menu-item"><a className="menu-link nav-link"
                                                            href="#document">Document</a></li>
                                                    </ul>
                                                </li> */}
                                                </ul>
                                                {/* <ul className="menu-btns align-items-center">
                                                <li className="language-switcher language-switcher-s2 toggle-wrap">
                                                    
                                                    <ul className="toggle-className toggle-drop drop-list drop-list-mb">
                                                        <li><a href="#">Fr</a></li>
                                                        <li><a href="#">Ch</a></li>
                                                        <li><a href="#">Br</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#" className="btn btn-rg btn-secondary no-change"><span>Buy
                                                Token</span></a></li>
                                            </ul> */}
                                            </nav>
                                        </div>
                                        <ConnectButton />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Swap />


                        <div>
                            {/* <h2 className="choose">Why Choose ABLC</h2>
                            <p className="choosetxt">ABLC was built to ensure independent transfer of value between people. just the way
                              Satoshi Nakamoto wished.</p> 
                              <div>
                                  <div>
                                      <img className="scrimg" src={secure}/>
                                      <h3 className="sas">Safe and Secure</h3>
                                      <p>100% secured transactions with <br></br>
                                    encrypted connections.</p>
                                  </div>
                                  <div></div>
                                  <div></div>


                              </div> */}

                        </div>
                        <section class="secure-box page-background">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="page-title">
                                            <h2>Why Choose <span>ABLC</span></h2>
                                            {/* <!-- <div class="separator"></div> --> */}
                                            <p>ABLC was built to ensure independent transfer of value between people. just the way <br></br> Satoshi Nakamoto wished.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div class="secure-box-item">
                                            <div class="secure-icon"><img src="https://bybarter.exchange/assets/images/secure1.png" alt="secure-img" /></div>
                                            <div class="secure-title">
                                                <h3 class="theme-title">Safe and Secure</h3>
                                            </div>
                                            <p class="theme-content">100% secured transactions with <br></br> encrypted connections.</p>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div class="secure-box-item">
                                            <div class="secure-icon"><img src="https://bybarter.exchange/assets/images/instatnt1.png" alt="Exchange-img" />
                                            </div>
                                            <div class="secure-title">
                                                <h3 class="theme-title">Instant Exchange</h3>
                                            </div>
                                            <p class="theme-content">ABLC's unique platform enables Crypto Enthusiasts to exchange value independently from their self-custodial wallets.</p>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div class="secure-box-item">
                                            <div class="secure-icon"><img src="https://bybarter.exchange/assets/images/support1.png" alt="Support-img" />
                                            </div>
                                            <div class="secure-title">
                                                <h3 class="theme-title">Expert Support</h3>
                                            </div>
                                            <p class="theme-content">We offer all the resources you need to flow through the experience of buying and selling crypto 24/7.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section class="trade-box page-background" id="second_connect_div">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="page-title trade-main-box">
                                            <h2>Start exchanging On ABLC</h2>
                                            {/* <!-- <div class="separator"></div> --> */}
                                            <p>Connect you wallet now to immediately start buying or selling Crypto, hassle-free.</p>
                                            <div class="wallet-connect pt-2">
                                                <a className="yellow-btn btn btn-sm" href="javascript:void(0);" id="connect1">
                                                    <img src="#" alt="" /><span> Connect Tocs Wallet</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section class="with-bybarter-box page-background">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="page-title">
                                            <h2>With ABLC You Can</h2>
                                            {/* <!-- <div class="separator"></div> --> */}
                                            <p>Elevate your financial freedom to a higher plane with ABLC.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                        <div class="with-box-item">
                                            <div class="with-icon"><img src="https://bybarter.exchange/assets/images/buy-bitcoin-online.png" alt="buy-bitcoin-online" /></div>
                                            <div class="with-title">
                                                <h3 class="theme-title">Buy Crypto online</h3>
                                            </div>
                                            <p class="theme-content">Buy Crypto directly into your Metamask, Trustwallet and all major hot and cold wallets from the ABLC platform. Exchange your fiat to crypto directly with other users online.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                        <div class="with-box-item">
                                            <div class="with-icon"><img src="https://bybarter.exchange/assets/images/sell-bitcoin.png" alt="sell-bitcoin" />
                                            </div>
                                            <div class="with-title">
                                                <h3 class="theme-title">Sell Crypto</h3>
                                            </div>
                                            <p class="theme-content">Sell your Crypto at your chosen rate, and get paid in one of numerous payment methods.</p>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                        <div class="with-box-item">
                                            <div class="with-icon"><img src="https://bybarter.exchange/assets/images/secure-trade.png" alt="secure-trade" />
                                            </div>
                                            <div class="with-title">
                                                <h3 class="theme-title">Exchange with secure escrow</h3>
                                            </div>
                                            <p class="theme-content">Our Secure Escrow system protects users of our Platform to ensure seamless exchange of value.</p>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                        <div class="with-box-item">
                                            <div class="with-icon"><img src="https://bybarter.exchange/assets/images/free-wallet.png" alt="free-wallet" />
                                            </div>
                                            <div class="with-title">
                                                <h3 class="theme-title">Non-custodial Platform</h3>
                                            </div>
                                            <p class="theme-content">You are in charge of your funds! Buy and Sell your crypto directly from your hot and cold wallets and be on your way !</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section class="testimonial-area page-background">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="page-title">
                                            <h2>Testimonials</h2>
                                            {/* <!-- <div class="separator"></div> --> */}
                                            <p>Millions have already successfully used ABLC and they have had a lot of nice things to say about us. Here's what our users think about ABLC, in their own words.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="testimonial-box-slider">
                                            <div class="testimonial-box">
                                                <div class="user-box-img">
                                                    <div class="user-photo">
                                                        <img src="#" alt="profile-img" />
                                                    </div>
                                                </div>
                                                <div class="testimonial-databox">
                                                    <h3 class="theme-title">Thomas calc</h3>
                                                    <p class="theme-content">ABLC is my first Crypto experience. Started as your regular newbie first time Crypto buyer - asking legacy traders what is a wallet and why I need to follow verificati…
                                                    </p>
                                                </div>
                                                <i class="right-quote fas fa-quote-right" id="quote"></i>
                                                <i class="left-quote fas fa-quote-left" id="quote"></i>
                                            </div>
                                            {/* <div class="testimonial-box">
                                <div class="user-box-img">
                                    <div class="user-photo">
                                        <img src="https://bybarter.exchange/assets/images/testimonial-2.png" alt="profile-img"/>
                                    </div>
                                </div>
                                <div class="testimonial-databox">
                                    <h3 class="theme-title">marya kelvin</h3>
                                    <p class="theme-content">ABLC is my first Crypto experience. Started as your regular newbie first time Crypto buyer - asking legacy traders what is a wallet and why I need to follow verificati…
                                    </p>
                                </div>
                                <i class="right-quote fas fa-quote-right"></i>
                                <i class="left-quote fas fa-quote-left"></i>
                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <footer class="footer-main">
                            <div class="footer-top page-background">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                            <div class="footer-box">
                                                <div class="footer-title">
                                                    <h3 class="theme-title">About</h3>
                                                </div>
                                                <div class="footer-content">
                                                    <ul>
                                                        {/* <!-- <li><a href="https://bybarter.exchange/about">About us</a></li> --> */}
                                                        {/* <!-- <li><a href="#">Fees</a></li> --> */}
                                                        <li><a href="/terms-of-service" id="termms">Terms of Service</a></li>
                                                        {/* <!-- <li><a href="https://bybarter.exchange/privacy-policy">Privacy Policy</a></li> --> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                            <div class="footer-box">
                                                <div class="footer-title">
                                                    <h3 class="theme-title">Support</h3>
                                                </div>
                                                <div class="email-box">
                                                    <ul class="clearfix">
                                                        <li class="email"><a href="JavaScript:void(0)"><i class="mr-1 far fa-envelope"></i> <span class="__cf_email__" data-cfemail="c6a8a9ebb4a3b6aabf86a4bfa4a7b4b2a3b4e8a3bea5aea7a8a1a3">p2p@ablc.io</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                            <div class="footer-box">
                                                <div class="footer-title">
                                                    <h3 class="theme-title">Follow Us</h3>
                                                </div>
                                                <div class="footer-content">
                                                    <ul class="social-ico">
                                                        <li><a target="_blank" href="https://t.me/ablctelegram"><i class="fab fa-telegram-plane"></i></a></li>
                                                        <li><a target="_blank" href="https://twitter.com/ARABELLAablc"><i class="fab fa-twitter"></i></a></li>
                                                        <li><a target="_blank" href="https://www.instagram.com/ablc_arabella_official/"><i class="fab fa-instagram"></i></a></li>
                                                        <li><a target="_blank" href="https://www.instagram.com/ablc_arabella_official/"><i class="fab fa-facebook"></i></a></li>
                                                        <li><a target="_blank" href=" https://youtube.com/channel/UCOXe-ZHFQrDZDjoime0mU1A"><i class="fab fa-youtube"></i></a></li>
                                                        <li><a target="_blank" href="https://discord.gg/MfBpz63ehs"><i class="fab fa-discord"></i></a></li>
                                                        {/* <li><a target="_blank" href="https://www.linkedin.com/in/arabella-ablc-05b451234/"><i class="fab fa-linkedIn"></i></a></li> */}
                                                        <li><a target="_blank" href="https://www.reddit.com/user/ARABELLAablc"><i class="fab fa-reddit"></i></a></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="footer-bottom">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div class="copyright">
                                                <p>Copyright © 2022 <span class="color-yellow">ABLC</span> | All Rights Reserved</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </header>

                </div>

            </body>


        </>
    );
}
export default Cover;