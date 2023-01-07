import React, { useEffect, useState } from 'react'
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
import { ethers } from 'ethers';
import { getAmountsOut, converter, getAmountsOutAblc, ablc, approve, PancakeRouter, SwapperMain } from '../sdk/swap';
import {
    usePrepareContractWrite,
    useContractWrite,
    useWaitForTransaction,
} from 'wagmi'
import { useAccount } from 'wagmi'
import abi from "./abi.json"
import RouterAbi from "../sdk/abis/router.json"
import { getAccount } from '@wagmi/core'

export default function Swapper() {
    const [showSell, setShowSell] = React.useState(false)
    const [amounts, setAmounts] = React.useState([1, 0.04])
    const [buyAmountsIn, setBuyAmountsIn] = React.useState(0);
    const [ABLCToTokenAmount, setABLCToTokenAmount] = React.useState(0);
    const [buyToken, setBuyToken] = React.useState()
    const [ABLCToToken, setABLCToToken] = React.useState("busd")
    const [tokenToApprove, setTokenToApprove] = React.useState();
    const [dataUse, setDataUse] = useState({
        amountOutMin: 0,
        path: [ablc, "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"]
    })
    const { address, isConnecting, isDisconnected } = useAccount()


    // const datap = sellAmountsOut(ABLCToTokenAmount, ABLCToToken);
    // console.log(ABLCToTokenAmount, ABLCToToken)
    const sellAmountsOut = async (value, token) => {
        console.log({ value, token })
        const amountToBuy = parseInt(value);
        const outAmounts = await getAmountsOutAblc(amountToBuy)
        let path = []
        if (token === "busd") {
            path = [ablc, "0x55d398326f99059fF775485246999027B3197955"]
            return {
                amountOutMin: outAmounts.amountsBusd[1],
                path
            }
        }
        if (token === "bnb") {
            path = [ablc, "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"]
            return {
                amountOutMin: outAmounts.amountsBnb[1],
                path
            }
        }
    }


    const {
        config,
        error: prepareError,
        isError: isPrepareError,
    } = usePrepareContractWrite({
        address: ablc,
        abi: abi,
        functionName: 'approve',
        args: [PancakeRouter, buyAmountsIn.toString() + "0000000000000000000"],
    })

    const { data, error, isError, write } = useContractWrite(config)

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })




    const amountSetter = async () => {
        return await getAmountsOut(1)
    }
    useEffect(() => {
        amountSetter().then(res => setAmounts(res))
            .catch(err => console.log({ err }))
        // console.log(me)
        // setAmounts()
        //console.log(getAmountsOut(200))
    }, [showSell]);

    const returnBuy = () => {
        return <>
            <p className="buytext">Buy</p>
            <p className="btcamount">{amounts[0]}ABLC ={converter(amounts[1])}USD</p>
            <select name="" id="list1" >
                <option value="">ABLC<img className="logodesign" src={logo} /></option>
            </select>
            <p className="buytext">with</p>
            <p className="btcamount usd">≅0 USD</p>
            <div className="selin">
                <input onChange={(e) => {
                    setBuyAmountsIn(e.target.value)
                }} className="secin" placeholder="Enter Quantity" />
                <select name="" onChange={(e) => {
                    setBuyToken(e.target.value)
                    console.log(e.target.value)
                }} id="list2" >
                    <option value="busd">BUSD <img src={busd} /></option>
                    <option value="bnb">BNB<img src={bnb} /></option>
                </select>
            </div>
        </>
    }
    const returnSell = () => {
        return <>
            <p className="buytext">Buy</p>
            <p className="btcamount">{amounts[0]}ABLC ={converter(amounts[1])}USD</p>
            <select onChange={(e) => {
                setABLCToToken(e.target.value)
                console.log(e.target.value)
            }} name="" id="list1" >
                <option value="busd">BUSD<img className="logodesign" src={logo} /></option>
                <option value="bnb">BNB<img className="logodesign" src={logo} /></option>
            </select>
            <p className="buytext">With</p>
            <p className="btcamount usd">≅0 ABLC</p>
            <div className="selin">
                <input onChange={(e) => {
                    setABLCToTokenAmount(e.target.value)
                    console.log(e.target.value)
                }} className="secin" placeholder="Enter Quantity" />
                <select name="" id="list2" >
                    <option value="">ABLC<img className="logodesign" src={logo} /></option>
                </select>
            </div>
        </>
    }
    return (
        <div className="token-info token-info-s1" >
            <div className="token-info-item token-info-item-s1" >
                <div className="token-info-item-list">
                    <div id="options">
                        <button onClick={() => {
                            setShowSell(true)
                            setTokenToApprove(ablc)
                        }} className=" buybtn" id={showSell === true ? "buy" : "sellNow"} >SELL NOW</button>
                        <button onClick={() => setShowSell(false)} className=" selbtn" id={showSell === false ? "buy" : "sellNow"}>BUY NOW</button>
                    </div>
                    {showSell === false ? returnBuy() : returnSell()}
                </div>
                <div className="token-info-item-list">
                </div>
            </div>
            <div>
                <br />
                <br />
                <button onClick={async () => {
                    if (ABLCToTokenAmount) {
                        if (showSell === true) {
                            let nowInMs = Date.now();
                            let nowInSecond = Math.round(nowInMs / 1000);
                            const toUse = await sellAmountsOut(ABLCToTokenAmount.toString() + "00000000", ABLCToToken);
                            console.log({ ABLCToTokenAmount, a: toUse.amountOutMin, p: toUse.path, address, d: (nowInSecond + 12000).toString() })
                            await SwapperMain(PancakeRouter, toUse.path[0], toUse.path[1], ABLCToTokenAmount.toString() + "00000000", toUse.amountOutMin)
                        }
                    } else {
                        alert("INVALID INPUT")
                    }
                    if (showSell === false) {
                        alert("Pair Contract Does not Exist")
                    }
                }} className="bn29 " id="styledbtn">Swap</button>
            </div>

            {isError ? <>{error}</> : <></>}
        </div>
    )
}
