import React, { useEffect, useState } from 'react'
import "./assets/css/orderbook.css"
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
import { updateOrder } from '../sdk/apiSDK'
import { busd, ablc } from '../sdk/swap'
import axios from 'axios'
import { Exchange } from '../sdk/p2p'
import truncateEthAddress from 'truncate-eth-address'
import { ethers } from 'ethers';

export default function Orderbook() {
    const [table, setTable] = useState()
    const [showOrder, setShowOrderBookType] = useState(false)

    const identifyToken = (address) => {
        if (address === busd) {
            return "BUSD"
        }
        if (address === "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c") {
            return "WBNB"
        }
        if (address === "0x55d398326f99059fF775485246999027B3197955") {
            return "USDT"
        }
        if (address === ablc) {
            return "ABLC"
        }
    }
    const tokenPaire = (base, quote) => {
        const TokenA = identifyToken(base);
        const tokenB = identifyToken(quote);

        return TokenA + "/" + tokenB
    }
    function buy(walletAddress, tokenA, tokenB, Base, quote, Oid, TxId) {
        const pair = tokenPaire(tokenA, tokenB)
        return <>
            <tr key={TxId}>
                <td> <span className='title'>Wallet ID</span> {truncateEthAddress(walletAddress)}</td>
                <td> <span className='title'>Token Pair</span> {pair}</td>
                <td> <span className='title'>Base</span> {Base}</td>
                <td> <span className='title'>Quote</span> {quote}</td>
                <td> <span className='title'>TX</span> <button onClick={() => {
                    const converted = (parseFloat(quote) * 1000000000000000000).toString()
                    console.log(TxId)
                    Exchange(walletAddress, Oid, tokenB, converted).then((res) => {
                        updateOrder(TxId)
                        alert("Tx Successful")
                    }).catch((err) => {
                        console.log(err)
                        alert("Tx Error")
                    })
                }
                } className="bn29 " id="">Buy</button></td>
            </tr>
        </>
    }
    function sell(walletAddress, tokenA, tokenB, Base, quote, Oid, TxId, key) {
        const pair = tokenPaire(tokenA, tokenB)
        return (
            <tr>
                <td key={key + TxId}> <span className='title'>Wallet ID</span> {truncateEthAddress(walletAddress)}</td>
                <td key={key + Oid}> <span className='title'>Token Pair</span> {pair}</td>
                <td key={key + key}> <span className='title'>Base</span> {Base}</td>
                <td key={key + Base}> <span className='title'>Quote</span> {quote}</td>
                <td ><button onClick={() => {
                    Exchange(walletAddress, Oid, tokenB, quote).then((res) => {
                        updateOrder(TxId)
                        alert("Tx Successful")
                    }).catch((err) => {
                        console.log(err)
                        alert("Tx Error")
                    })
                }
                } className="bn29 " id="">Sell</button></td>
            </tr>
        )
    }
    useEffect(() => {
        const baseUrl = "https://ablc.onrender.com/v1/indexer/data/ord"
        const options = {
            method: 'GET',
            url: baseUrl,
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
            }
        };
        axios
            .request(options)
            .then(function (response) {
                setTable(response.data)
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            })

        console.log(table)
    }, [])
    return (
        <>
            <div className='container' >
                <div className='m-text-center' >
                    <button onClick={() => setShowOrderBookType(true)} className="bn29 me-3 mb-3 " id="">Buy Orders</button>
                    <button onClick={() => setShowOrderBookType(false)}  className="bn29 " id="">Sell Orders</button>
                </div>

                <div className='footer-table table-responsive'>
                    <table className='w-100'>
                        <thead>
                            <tr>
                                <th>Wallet ID</th>
                                <th>Token Pair</th>
                                <th>Base</th>
                                <th>Quote</th>
                                <th>TX</th>
                            </tr>
                        </thead>



                        {!table ? <>NO Trade yet</> : <tbody>
                            {
                                table.map((el, i) => {
                                    if (el.tx === "false") {
                                        // console.log({ id: el.id, Oid: el.Oid, i })
                                        if (showOrder === false) {
                                            if (el.orderType === "sell") {
                                                return <>
                                                    {
                                                        sell(el.creator, el.tokenA, el.tokenB, el.baseAmount, el.quoteAmount, el.Oid, el.id)
                                                    }
                                                </>
                                            }
                                        }
                                        else {
                                            if (el.orderType === "buy") {
                                                return <>
                                                    {
                                                        buy(el.creator, el.tokenA, el.tokenB, el.baseAmount, el.quoteAmount, el.Oid, el.id)
                                                    }
                                                </>
                                            }
                                        }
                                    }

                                })
                            }

                        </tbody>}



                    </table>

                </div>
            </div>
        </>
    )
}

// // Oid: "11"
// // ​​
// // baseAmount: "0.00000000000000001"
// // ​​
// // date: "2022-12-26T08:44:48.221Z"
// // ​​
// // id: "63a95f0090ee2f0599f8423a"
// // ​​
// // quoteAmount: "0.00000000000000002"
// // ​​
// // tokenA: "0x557a09f2a257e7ea0C9EdD45F4ABc1F5Eca05dfF"
// // ​​
// // tokenB: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"




