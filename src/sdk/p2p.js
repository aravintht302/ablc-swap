import { ethers } from "ethers";
import axios from 'axios';
import { updateOrder } from "./apiSDK";

const address = "0xC10f0646d7eFCB2af06c781f0A9dbd611193d187";


//approve
async function approve(amount, token) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const abi = [
        "function approve(address spender, uint256 amount) returns (bool)"
    ];
    const contract = new ethers.Contract(token, abi, signer);
    const tx = await contract.functions.approve("0xC10f0646d7eFCB2af06c781f0A9dbd611193d187", amount);

    const receipt = await tx.wait();
    console.log("receipt", receipt);
}


//create Order
async function CreateOrder(orderType, tokenA, tokenB, baseAmount, quoteAmount) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const abi = [
        "function CreateOrder(string _orderType, address _tokenA, address _tokenB, uint256 _baseAmount, uint256 _quoteAmount) payable"
    ];
    const contract = new ethers.Contract("0xC10f0646d7eFCB2af06c781f0A9dbd611193d187", abi, signer);
    const tx = await contract.functions.CreateOrder(orderType.toString(), tokenA.toString(), tokenB.toString(), baseAmount.toString(), quoteAmount.toString());

    const receipt = await tx.wait();
    console.log("receipt", receipt);
}

export const createPair = async (orderType, tokenA, tokenB, baseAmount, quoteAmount) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    alert("approving Token")
    await approve("10000000000000000000000000000", tokenA).then(async (res) => {
        alert("creating Order")
        await CreateOrder(orderType, tokenA, tokenB, ethers.utils.parseUnits(baseAmount, 8), ethers.utils.parseUnits(quoteAmount, 18));
    })

}

export async function ablcPrice() {
    const abi = [
        "function ablcPrice() view returns (uint256)"
    ];
    const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed4.binance.org");
    const contract = new ethers.Contract(address, abi, provider);
    const result = await contract.functions.ablcPrice();
    console.log("result", parseFloat(result[0].toString()) / 1000000000000000000);
    const cPrice = parseFloat(result[0].toString()) / 1000000000000000000;
    return cPrice;
}

//Cancel Order
async function cancelOrder(Oid) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const abi = [
        "function cancelOrder(uint256 id)"
    ];
    const contract = new ethers.Contract(address, abi, signer);
    const tx = await contract.functions.cancelOrder(Oid);

    const receipt = await tx.wait();
    console.log("receipt", receipt[0]);
}


//Exchnage



export async function Exchange(wallet, id, tokenB, quoteAmount) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    alert("Approving Token")
    await approve("1000000000000000000000000000", tokenB).then(async (res) => {
        alert("Exchanging")
        const abi = [
            "function Exchange(address _wallet, uint256 id)"
        ];
        const contract = new ethers.Contract("0xC10f0646d7eFCB2af06c781f0A9dbd611193d187", abi, signer);
        const tx = await contract.functions.Exchange(wallet, id);

        const receipt = await tx.wait();
        console.log("receipt", receipt);

    })

}


//get orders
