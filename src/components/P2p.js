import React, { useState, useEffect } from 'react'
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
import { createPair, ablcPrice } from '../sdk/p2p';
export default function P2p() {
    const [tokeA, setTokenA] = useState("0x557a09f2a257e7ea0C9EdD45F4ABc1F5Eca05dfF");
    const [tokenB, setTokenB] = useState("0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56");
    const [baseAmount, setBaseAmount] = useState();
    const [quoteAmount, setQuoteAmount] = useState();
    const [mode, setMode] = useState("buy");

    const Buy = async () => {
        //buy 1 for 0.04
        const cPrice = await ablcPrice()
        const quoteAmountToGet = parseFloat(baseAmount) * cPrice
        await createPair("buy", tokeA.toString(), tokenB.toString(), baseAmount.toString(), quoteAmountToGet.toString())
            .then((res) => console.log({ res }))
            .catch((err) => console.log({ err }))
    }
    const Sell = async () => {
        //buy 0.04 for 1
        const cPrice = await ablcPrice()
        const baseAmountToGet = parseFloat(baseAmount) / cPrice
        await createPair("sell", tokenB.toString(), tokeA.toString(), quoteAmount.toString(), baseAmountToGet.toString())
            .then((res) => console.log({ res }))
            .catch((err) => console.log({ err }))
    }
    const TransactOrder = async () => {
        if (tokeA || tokenB || baseAmount || quoteAmount) {
            console.log({ tokeA, tokenB, baseAmount, quoteAmount })
            if (mode === "buy") {
                await Buy()
            } else {
                await Sell()
            }
        } else {
            alert("INVALID INPUT VALUES")
        }
    }

    return (
        <>
            <div className="token-info token-info-s1 p-0" >
                <div className="token-info-item token-info-item-s1 p-0" >
                    <div className="token-info-item-list w-100">
                        <div id="options" className='mb-4'>
                            <div className='d-flex justify-content-between'>
                                <p className="buytext mb-1">Base Token</p>
                                <p className="btcamount mb-1">1ABLC =0.04 USD</p>
                            </div>

                            <div className="selin mb-3">
                                <input onChange={async (e) => {

                                    const cPrice = await ablcPrice()
                                    const bPrice = parseFloat(e.target.value) * cPrice;
                                    if (parseFloat(e.target.value) < 1) {
                                        alert("Minimum ablc to trade is 1")
                                    } else {
                                        setBaseAmount(e.target.value)
                                        setQuoteAmount(bPrice)
                                    }

                                }} className="secin" placeholder="Enter Quantity" />
                                <select onChange={(e) => {
                                    setTokenA(e.target.value)
                                }} name="" id="list2" >
                                    <option value="0x557a09f2a257e7ea0C9EdD45F4ABc1F5Eca05dfF">ABLC<img className="logodesign" src={logo} /></option>
                                </select>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className="buytext mb-1">Quote Token</p>
                                <p className="btcamount mb-1 usd">≅0 USD</p>
                            </div>
                            <div className="selin">
                                <input onChange={async (e) => {
                                    setQuoteAmount(e.target.value)

                                }} className="secin" value={quoteAmount} placeholder="Enter Quantity" />
                                <select onChange={(e) => {
                                    setTokenB(e.target.value)
                                    console.log(e.target.value)
                                }} name="" id="list2" >
                                    <option value="0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56">BUSD <img src={busd} /></option>
                                    <option value="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c">BNB<img src={bnb} /></option>
                                    <option value="0x55d398326f99059fF775485246999027B3197955">USDT<img src={bnb} /></option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mb-3 ps-4 m-text-center">
                    <a  href="#overview">OrderBook</a>
                </div>
                <div className='m-text-center'>
                    <button onClick={() => {
                        setMode("buy")
                        TransactOrder()
                    }} 
                     className="btns me-3 mb-3"  >BUY ORDER</button>
                    <button onClick={() => {
                        setMode("sell")
                        TransactOrder()
                    }} style={{
                        marginRight: 5
                    }} className="btns">SELL ORDER</button>
                </div>

            </div>

        </>
    )
}
