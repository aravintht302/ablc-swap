import React from 'react'
import logo from "../components/assets/Logo.png";
import "../components/assets/css/theme.css";
import "../components/assets/css/rtl.css";
import "../components/assets/css/style-azalea.css";
import "../components/assets/css/style-dark.css";
import "../components/assets/css/style-jasmine.css";
import "../components/assets/css/style-lavender.css";
import "../components/assets/css/style-lobelia.css";
import "../components/assets/css/style-lungwort.css";
import "../components/assets/css/style-muscari.css";
import "../components/assets/css/style-salvia.css";
import "../components/assets/css/style-zinnia.css";
import "../components/assets/css/style.css";
import "../components/assets/css/vendor.bundle.bs4.css";
import "../components/assets/css/vendor.bundle.css";
import "../components/bybarter/assets/css/site/site.min.css";
import "../components/bybarter/assets/fontawesome/css/all.min.css";
import { ConnectButton } from '@rainbow-me/rainbowkit';


export default function Terms() {
    return (

        <body id="mainbody" className="nk-body body-wider theme-dark mode-onepage">
            <div className="nk-wrap">
                <header className="nk-header page-header is-transparent is-sticky is-shrink" id="header">

                    <div className="header-main">
                        <div className="container">
                            <div className="header-wrap">

                                <div className="header-logo logo">
                                    <a href="./" className="logo-link">
                                        <img className="logo-dark" id="logo" src={logo} srcset="images/logo2x.png 2x" alt="logo" />
                                        <img className="logo-light" id="logo" src={logo}
                                            srcset="images/logo-full-white2x.png 2x" alt="logo" />
                                    </a>
                                </div>

                                <div className="header-nav-toggle">
                                    <a href="#" className="navbar-toggle" data-menu-toggle="header-menu">
                                        <div className="toggle-line">
                                            <span></span>
                                        </div>
                                    </a>
                                </div>

                                <div className="header-navbar header-navbar-s2">
                                    <nav className="header-menu justify-content-between" id="header-menu">
                                        <ul className="menu">
                                            <li id="lpd" className="menu-item lightpap"><a className="menu-link nav-link" href="#about">Light Paper</a></li>
                                            <li id="lpd" className="menu-item "><a className="menu-link nav-link" href="#overview">Docs</a></li>
                                            <li className="menu-item cnctwal"><ConnectButton /></li>
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
                            </div>
                        </div>
                    </div>

                    <section class="testimonial-area page-background">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="page-title">
                                        <h2>Disclaimer</h2>
                                        {/* <!-- <div class="separator"></div> --> */}
                                        <p>Millions have already successfully used ABLC and they have had a lot of nice things to say about us. Here's what our users think about ABLC, in their own words.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="page-title">
                                        <h2>Participant Warning</h2>
                                        {/* <!-- <div class="separator"></div> --> */}
                                        <p>Participation in a cryptocurrencies and token offering carries high risks. It is highly speculative and before participating in any project about which information is given, prospective participants are strongly advised to seek appropriate professional advice; The information contained on this website including its Whitepaper has been prepared by or on behalf of the Company. ABLC absolves itself of any liability thereof.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="page-title">
                                        <h2>Prominent Statements</h2>
                                        {/* <!-- <div class="separator"></div> --> */}
                                        <p>The information contained on this website and including the Whitepaper about the proposed business opportunity is not intended to be the only information on which a decision is to be made and is not a substitute for a disclosure document, or any other notice that may be required under law. Detailed information may be needed to make a token participation decision; Prospective participants should be aware that no established market exists for the trading of any tokens that may be offered.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="page-title">
                                        <h2>Future Statements</h2>
                                        {/* <!-- <div class="separator"></div> --> */}
                                        <p>Except for historical information, there may be matters on this website including the Whitepaper that are forward-looking statements. Such statements are only predictions and are subject to inherent risks and uncertainty. Forward-looking statements, which are based on assumptions and estimates and describe the Company’s future plans, strategies, and expectations are generally identifiable by the use of the words ‘anticipate’, ‘will’, ‘believe’, ‘estimate’, ‘plan’, ‘expect’, ‘intend’, ‘seek’, or similar expressions. Participants are cautioned not to place undue reliance on forward-looking statements. By its nature, forward-looking information involves numerous assumptions, inherent risks and uncertainties both general and specific that contribute to the possibility that those predictions, forecasts, projections and other forward-looking statements will not occur. Those risks and uncertainties include factors and risks specific to the industry in which the Company operates as well as general economic conditions. Actual performance or events may be materially different from those expressed or implied in those statements. All forward-looking statements attributable to the Company or persons acting on behalf of the Company are expressly qualified in their entirety by the cautionary statements in this section. Except as expressly required by law, the Company undertakes no obligation to publicly update or revise any forward-looking statements provided on this website including the Whitepaper whether as a result of new information, future events or otherwise, or the risks affecting this information. None of the Company, its officers or any person named on this website including the Whitepaper with their consent, or any person involved in the preparation of this website including the Whitepaper, makes any representation or warranty (express or implied) as to the accuracy or likelihood of fulfilment of any forward-looking statement except to the extent required by law. The forward-looking statements reflect the views held only as at the date of publication of this website including the Whitepaper.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="page-title">
                                        <h2>Value Risks</h2>
                                        {/* <!-- <div class="separator"></div> --> */}
                                        <p>Tokens issued by ABLC may drop substantially in value, or may remain illiquid for long periods of time or indefinitely. ABLC cannot guarantee an active secondary market for the exchange of tokens purchased in the token sale. Not all disclosures or statements are being made in this disclaimer section. Participants should review the token sale agreement in its entirety and seek the professional advice of legal counsel and investment professionals. ABLC tokens may change in value based on a number of factors that are outside our control. There is no guarantee or expectation that ABLC tokens will increase in value, provide a return, or have sufficient adoption and liquidity on exchanges. Owning these tokens does not constitute a share of equity or ownership in the company. The token economy is new and exciting. Regulatory circumstances may require that token mechanics be changed or altered. ABLC tokens do not have any rights, uses, purpose, attributes, functionalities or features, express or implied, including, without limitation, any uses, purpose, attributes, functionalities or features on the ABLC platform. Company does not guarantee and is not representing in any way that the ABLC tokens have any rights, uses, purpose, attributes, functionalities or features. ABLC tokens may have no value. The company reserves the right to refuse or cancel ABLC token purchase requests at any time at its sole discretion.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="page-title">
                                        <h2>Not a Security</h2>
                                        {/* <!-- <div class="separator"></div> --> */}
                                        <p>It is important to note that any tokens issued on ABLC’s platform are not intended to be securities, and this website and documents found on it is not a prospectus, offering document or a solicitation for investment in a share or equity offering. Tokens issued on our platform as referenced in this document do not confer any type of ownership or debt within ABLC’s ecosystem. Tokens currently trading or issued in the future are non-refundable. ABLC will not guarantee any value, secondary market, or commitments to the value of such tokens. Buyer and owners shall participate in each economy at their sole risk.
                                        </p>
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
                                                    <li><a href="https://bybarter.exchange/fees">Fees</a></li>
                                                    <li><a href="https://bybarter.exchange/terms-of-service" id="termms">Terms of Service</a></li>
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
                                            <div class="footer-content">
                                                <ul>
                                                    <li><a href="p2pablc@ablc.io">Contact Us</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                        <div class="footer-box">
                                            <div class="footer-title">
                                                <h3 class="theme-title">Services</h3>
                                            </div>
                                            <div class="footer-content">
                                                <ul>
                                                    <li><a href="https://bybarter.exchange/trade">Create an Offer</a></li>
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
                                            <div class="email-box">
                                                <ul class="clearfix">
                                                    <li class="email"><a href="JavaScript:void(0)"><i class="mr-1 far fa-envelope"></i> <span class="__cf_email__" data-cfemail="c6a8a9ebb4a3b6aabf86a4bfa4a7b4b2a3b4e8a3bea5aea7a8a1a3">p2pablc@ablc.io</span></a></li>
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


    )
}

// {<body id="mainbody" className="nk-body body-wider theme-dark mode-onepage">
//             <section class="testimonial-area" style={{
//                 backgroundColor: "#16a3fe"
//             }}>
//                 <div class="container">
//                     <div class="row">
//                         <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//                             <div class="page-title">
//                                 <h2>Disclaimer</h2>
//                                 {/* <!-- <div class="separator"></div> --> */}
//                                 <p>Millions have already successfully used ABLC and they have had a lot of nice things to say about us. Here's what our users think about ByBarter, in their own words.
//                                 </p>
//                             </div>
//                         </div>
//                         <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//                             <div class="page-title">
//                                 <h2>Participant Warning</h2>
//                                 {/* <!-- <div class="separator"></div> --> */}
//                                 <p>Participation in a cryptocurrencies and token offering carries high risks. It is highly speculative and before participating in any project about which information is given, prospective participants are strongly advised to seek appropriate professional advice; The information contained on this website including its Whitepaper has been prepared by or on behalf of the Company. ByBarter absolves itself of any liability thereof.
//                                 </p>
//                             </div>
//                         </div>
//                         <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//                             <div class="page-title">
//                                 <h2>Prominent Statements</h2>
//                                 {/* <!-- <div class="separator"></div> --> */}
//                                 <p>The information contained on this website and including the Whitepaper about the proposed business opportunity is not intended to be the only information on which a decision is to be made and is not a substitute for a disclosure document, or any other notice that may be required under law. Detailed information may be needed to make a token participation decision; Prospective participants should be aware that no established market exists for the trading of any tokens that may be offered.
//                                 </p>
//                             </div>
//                         </div>
//                         <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//                             <div class="page-title">
//                                 <h2>Future Statements</h2>
//                                 {/* <!-- <div class="separator"></div> --> */}
//                                 <p>Except for historical information, there may be matters on this website including the Whitepaper that are forward-looking statements. Such statements are only predictions and are subject to inherent risks and uncertainty. Forward-looking statements, which are based on assumptions and estimates and describe the Company’s future plans, strategies, and expectations are generally identifiable by the use of the words ‘anticipate’, ‘will’, ‘believe’, ‘estimate’, ‘plan’, ‘expect’, ‘intend’, ‘seek’, or similar expressions. Participants are cautioned not to place undue reliance on forward-looking statements. By its nature, forward-looking information involves numerous assumptions, inherent risks and uncertainties both general and specific that contribute to the possibility that those predictions, forecasts, projections and other forward-looking statements will not occur. Those risks and uncertainties include factors and risks specific to the industry in which the Company operates as well as general economic conditions. Actual performance or events may be materially different from those expressed or implied in those statements. All forward-looking statements attributable to the Company or persons acting on behalf of the Company are expressly qualified in their entirety by the cautionary statements in this section. Except as expressly required by law, the Company undertakes no obligation to publicly update or revise any forward-looking statements provided on this website including the Whitepaper whether as a result of new information, future events or otherwise, or the risks affecting this information. None of the Company, its officers or any person named on this website including the Whitepaper with their consent, or any person involved in the preparation of this website including the Whitepaper, makes any representation or warranty (express or implied) as to the accuracy or likelihood of fulfilment of any forward-looking statement except to the extent required by law. The forward-looking statements reflect the views held only as at the date of publication of this website including the Whitepaper.
//                                 </p>
//                             </div>
//                         </div>
//                         <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//                             <div class="page-title">
//                                 <h2>Value Risks</h2>
//                                 {/* <!-- <div class="separator"></div> --> */}
//                                 <p>Tokens issued by ByBarter may drop substantially in value, or may remain illiquid for long periods of time or indefinitely. ByBarter cannot guarantee an active secondary market for the exchange of tokens purchased in the token sale. Not all disclosures or statements are being made in this disclaimer section. Participants should review the token sale agreement in its entirety and seek the professional advice of legal counsel and investment professionals. ByBarter tokens may change in value based on a number of factors that are outside our control. There is no guarantee or expectation that ByBarter tokens will increase in value, provide a return, or have sufficient adoption and liquidity on exchanges. Owning these tokens does not constitute a share of equity or ownership in the company. The token economy is new and exciting. Regulatory circumstances may require that token mechanics be changed or altered. ByBarter tokens do not have any rights, uses, purpose, attributes, functionalities or features, express or implied, including, without limitation, any uses, purpose, attributes, functionalities or features on the ByBarter platform. Company does not guarantee and is not representing in any way that the ByBarter tokens have any rights, uses, purpose, attributes, functionalities or features. ByBarter tokens may have no value. The company reserves the right to refuse or cancel ByBarter token purchase requests at any time at its sole discretion.
//                                 </p>
//                             </div>
//                         </div>
//                         <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//                             <div class="page-title">
//                                 <h2>Not a Security</h2>
//                                 {/* <!-- <div class="separator"></div> --> */}
//                                 <p>It is important to note that any tokens issued on ByBarter’s platform are not intended to be securities, and this website and documents found on it is not a prospectus, offering document or a solicitation for investment in a share or equity offering. Tokens issued on our platform as referenced in this document do not confer any type of ownership or debt within ByBarter’s ecosystem. Tokens currently trading or issued in the future are non-refundable. ByBarter will not guarantee any value, secondary market, or commitments to the value of such tokens. Buyer and owners shall participate in each economy at their sole risk.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </body>}