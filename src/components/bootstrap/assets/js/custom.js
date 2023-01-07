"use strict";
const contract = {
    contractAddressToken: String,
    dynamic_address: String,
    chainId: '',
    contractAbi: String,
    token_rate: Number
};

const purchasing = {
    price_in_busd: Number,
    price_in_ablc: Number
};


const message = {
    msgType: 'Oops',
    msgContent: String,
    errorType: 'error'
}

const userDetails = {
    userBalance: Number,
    userAccountAddress: String,
    selected_currency: Number
}
const secure = {
    __csrfToken: String,
    wallet_type: 0
}
const running_network = {
    testNet: 97,
    mainNet: 56,
    chainId: Number
}


$(document).ready(function () {
    //----------check wallet address-----------/////
    // function check_wallet_address(wallet_address) {
    //     return new Promise((res, rej) => {
    //         $.ajax({
    //             url: window.location.origin + '/shop/check_wallet_address',
    //             dataType: 'json',
    //             type: 'GET',
    //             data: {
    //                 wallet_address: wallet_address
    //             },
    //             success: function(data) {
    //                 if (data) {
    //                     return res(data);
    //                 } else {
    //                     return rej('something went wrong');
    //                 }
    //             }
    //         });

    //     })
    // }


    ///////////------------User Wallet  Connect-------------///////
    var url = window.location.href;

    if (window.ethereum !== 'undefined' && window.location.origin + '/register' == url) {
        ethereum.request({
            method: 'eth_requestAccounts'
        }).then(async function (accounts) {
            var user_wallet_address = accounts[0];
            $('#wallet_address').val(user_wallet_address);
            if (user_wallet_address) {
                $('#wallet_connected').css('display', 'block');
                $('#wallet_connect').css('display', 'none');
            } else {
                $('#wallet_connect').css('display', 'block');
                $('#wallet_connected').css('display', 'none');
            }
        })
    }


    $('#wallet_connect').on('click', function () {
        ethereum.request({
            method: 'eth_requestAccounts'
        }).then(async function (accounts) {
            var user_wallet_address = accounts[0];
            $('#wallet_address').val(user_wallet_address);
            if (user_wallet_address) {
                $('#wallet_connected').css('display', 'block');
                $('#wallet_connect').css('display', 'none');
            } else {
                $('#wallet_connect').css('display', 'block');
                $('#wallet_connected').css('display', 'none');
            }
        }).catch((err) => {
            swal('Oops', 'Please Check Your DApp for Access...!', 'error');
        })
    })

    ////////////------send otp and register number------///////////////////

    $('#send_otp_register').on('click', function () {
        var phone_number = $('#phone_number').val();
        const country_code = $('#country_code').val();
        if (country_code == '91') {
            if (phone_number) {
                if (phone_number.length >= 8) {
                    phone_number = '+' + country_code + phone_number;
                    $('#send_otp_register').css('display', 'none');
                    $('#resend_otp_register').css('display', 'block');

                    var wallet_address = $('#wallet_address').val();
                    $.ajax({
                        url: window.location.origin + '/shop/validate_phone',
                        type: 'POST',
                        data: { phone_number: phone_number },
                        success: function (data) {
                            data = JSON.parse(data)
                            if (data[0] == '1') {
                                $('#phone_number').prop("readonly", true);
                                swal('Success', 'OTP Sent on your phone number...OTP =  ' + data[1], 'success');
                            } else if (data[0] == '2') {
                                $('#phone_number').prop("readonly", true);
                                swal('Verification Pending', 'Please Verify Your Phone by entering an OTP!', 'warning');

                            } else if (data[0] == '0') {
                                $('#send_otp_register').css('display', 'block');
                                $('#resend_otp_register').css('display', 'none');
                                swal('Failed', 'Phone number already exists!', 'error');
                            } else {
                                swal('Oops', 'something went wrong!', 'error');
                            }
                        }
                    });
                } else {
                    swal('Failed', 'Phone Number Must Be At Least 8 Characters Long!', 'error');
                }
            } else {
                swal('Failed', 'Please Input a valid Phone number!', 'error');
            }
        } else {
            swal('Failed', 'Sorry, You are not matching eligible criteria to register!', 'error');
        }

    });


    ///---------------------------Re-send OTP-------------------------//

    $('#resend_otp_register').on('click', function () {
        var phone_number = $('#phone_number').val();
        const country_code = $('#country_code').val();
        if (country_code == '91') {
            if (phone_number) {
                phone_number = '+' + country_code + phone_number;
                $('#resend_otp_register').prop('disabled', true);
                $.ajax({
                    url: window.location.origin + '/shop/resend_otp',
                    type: 'POST',
                    data: { phone_number: phone_number },
                    success: function (data) {
                        data = JSON.parse(data);
                        if (data[0] == '1') {
                            swal('Success', 'OTP Sent Successfully!', 'success');
                        } else if (data[0] == '2') {
                            swal('Failed', 'Phone number does not exists!', 'error');
                        } else if (data[0] == '0') {
                            swal('Failed', 'Phone number already exists!', 'error');
                        } else {
                            swal('Failed', 'Something went wrong!', 'error');
                        }
                    }
                });
            } else {
                swal('Failed', 'Please Input a valid Phone number!', 'error');
            }
        } else {
            swal('Failed', 'Sorry, You are not matching eligible criteria to register!', 'error');
        }
    });

    /////////////////--------ICO ABLC Token Purchase-----------//////////


    // $('#buy_ablc_old').on('click', async function () {

    //     userDetails.selected_currency = $('#price_in_busd').data('currency');

    //     if (userDetails.selected_currency == '0') {
    //         contract.contractAddressToken = '0xe9e7cea3dedca5984780bafc599bd69add087d56';
    //     } else {
    //         contract.contractAddressToken = '0x55d398326f99059ff775485246999027b3197955';
    //     }

    //     purchasing.price_in_busd = $('#price_in_busd').val();
    //     purchasing.price_in_ablc = $('#price_in_ablc').val();

    //     if (purchasing.price_in_busd >= 20) {
    //         if (window.ethereum.networkVersion == '56') {
    //             if (window.ethereum !== 'undefined') {
    //                 running_network.chainId = window.ethereum.chainId;
    //                 if (running_network.chainId != running_network.mainNet) {
    //                     $('#buy_ablc').slideDown();
    //                     message.msgContent = 'Please Change Your Node To Another Network and refresh the page';
    //                     errorExecute(message);
    //                 } else {
    //                     $('#buy_ablc').slideUp();
    //                 }
    //             }

    //             ethereum.request({
    //                 method: 'eth_requestAccounts'
    //             }).then(async function (accounts) {
    //                 userDetails.userAccountAddress = accounts[0];
    //                 // var addr = userDetails.userAccountAddress;

    //                 await getUserBalance()
    //                     .then(async res => {
    //                         userDetails.userBalance = res / 1e18;
    //                         console.log('user balance  ' + userDetails.userBalance)

    //                         if (Number(userDetails.userBalance) > Number(purchasing.price_in_busd)) {

    //                             await fetchContractAbi()
    //                                 .then(res => {
    //                                     contract.contractAbi = res
    //                                     // console.log(res)
    //                                 })
    //                                 .catch(err => {
    //                                     $('#buy_ablc').slideDown();
    //                                     message.msgContent = err;
    //                                     errorExecute(message);
    //                                 });

    //                             let web3 = new Web3(window.ethereum);

    //                             const myContract = new web3.eth.Contract(
    //                                 JSON.parse(contract.contractAbi),
    //                                 contract.contractAddressToken
    //                             );
    //                             // console.log(myContract)

    //                             let tokensValue = purchasing.price_in_busd;
    //                             // tokensValue = 0.1;//for testing
    //                             tokensValue = tokensValue * 1e18;

    //                             // console.log(tokensValue);

    //                             tokensValue = tokensValue.toLocaleString('fullwide', { useGrouping: false })
    //                             const tx = myContract.methods.transfer('0xE2e1C5c188048b27d3B1c6854a69fB9798aA9651', tokensValue);

    //                             // 0x45FD0Abb31d5f41e20A4976E133e2A0062e038a6

    //                             const transactionParameters = {
    //                                 nonce: '0x00', // ignored by MetaMask
    //                                 to: contract.contractAddressToken, // Required except during contract publications.
    //                                 from: userDetails.userAccountAddress, // must match user's active address.
    //                                 chainId: '56',
    //                                 gasPrice: 0, // customizable by user during MetaMask confirmation.
    //                                 gas: 0, // customizable by user during MetaMask confirmation.
    //                                 data: tx.encodeABI()
    //                             };


    //                             const txHash = ethereum.request({
    //                                 method: 'eth_sendTransaction',
    //                                 params: [transactionParameters],
    //                             }).then(txHash => {

    //                                 if (txHash) {
    //                                     console.log(txHash)
    //                                     var stop = 0;
    //                                     $('#preloader1').show();
    //                                     var timerForConfirmation = setInterval(() => {
    //                                         try {
    //                                             const Result = web3.eth.getTransactionReceipt(txHash).then(message => {
    //                                                 // console.log(txHash)
    //                                                 // console.log(Result)
    //                                                 //  console.log(message)
    //                                                 if (message.status == true && stop == 0) {
    //                                                     clearInterval(timerForConfirmation);
    //                                                     stop = 1;
    //                                                     var token = $('#csrf_token').val();
    //                                                     $('#preloader1').hide();
    //                                                     $.ajax({
    //                                                         url: window.location.origin + '/shop/purchase_token',
    //                                                         type: 'POST',
    //                                                         data: {
    //                                                             token: token,
    //                                                             user_token: userDetails.userAccountAddress,
    //                                                             amount_in_busd: purchasing.price_in_busd,
    //                                                             amount_in_ablc: purchasing.price_in_ablc,
    //                                                             trans_hash: txHash,
    //                                                             txn_type: userDetails.selected_currency
    //                                                         },
    //                                                         success: function (data) {
    //                                                             data = JSON.parse(data);
    //                                                             if (data.data[0] == true) {
    //                                                                 swal('Great', 'You Successfully purchased ABLC tokens!', 'success');
    //                                                             } else {
    //                                                                 swal('Error', data.data[1], 'error');
    //                                                             }
    //                                                         }
    //                                                     });
    //                                                 } else if (stop == 0 && message.status === false) {
    //                                                     clearInterval(timerForConfirmation);
    //                                                     stop = 1;
    //                                                     $('#preloader1').hide();
    //                                                     data = JSON.parse(data);
    //                                                     document.write(data);
    //                                                     // swal('Oops', 'Transaction Reverted and Error By BscScan', 'error');
    //                                                 }
    //                                             });
    //                                         } catch (error) {
    //                                             document.write(error);
    //                                         }


    //                                     },
    //                                         4000);
    //                                 }
    //                                 var btn = document.getElementById('buy_tokens');
    //                                 document.getElementById('tokens_buy').value = '0';
    //                                 // document.getElementById('myInput').value = ''
    //                                 btn.disabled = false;
    //                                 btn.innerText = 'Buy Now!';
    //                                 swal("Transaction successful !", "Your Tokens Will be Credited Shortly.", "success");

    //                             }).catch((error) => {
    //                                 if (error.message == 'MetaMask Tx Signature: User denied transaction signature.') {
    //                                     $('#buy_ablc').slideDown();

    //                                     swal('Oops', 'Confirmation Declined By The User', 'error')
    //                                     $('#buy_ablc').removeAttr('disabled')
    //                                     $('#buy_ablc').slideDown();
    //                                 }
    //                             });

    //                         } else {
    //                             $('#buy_ablc').slideDown();
    //                             message.msgContent = 'Insufficient Balance to make this transaction!';
    //                             errorExecute(message);
    //                         }
    //                     })
    //                     .catch(err => {
    //                         $('#buy_ablc').slideDown();
    //                         message.msgContent = err;
    //                         errorExecute(message);
    //                     });
    //             });
    //         } else {
    //             swal('Oop!', "Please Change Your Network to BNB Mainnet", 'error');
    //         }

    //     } else {
    //         swal('Oops!', 'You must purchase ABLC token at least of 20BUSD', 'error')
    //     }



    // });
    $('#buy_ablc').on('click', async function () {
        //web3 model code 
        const providerOptions = {
            walletconnect: {
                package: WalletConnectProvider.default, // required
                options: {
                    rpc: {
                        56: "https://binance.nodereal.io",
                        97: "https://data-seed-prebsc-1-s3.binance.org:8545"
                    },
                }
            }

        };
        const Web3Modal = window.Web3Modal.default;

        const web3Modal = new Web3Modal({
            network: "mainnet",
            cacheProvider: true,
            providerOptions,
            theme: "light"
        });

        const provider = await web3Modal.connect();

        console.log(provider);


        web3 = window.web3 = new Web3(provider);


        //web3 model code end

        userDetails.selected_currency = $('#price_in_busd').data('currency');

        if (userDetails.selected_currency == '0') {
            contract.contractAddressToken = '0xe9e7cea3dedca5984780bafc599bd69add087d56';
        } else {
            contract.contractAddressToken = '0x55d398326f99059ff775485246999027b3197955';
        }

        purchasing.price_in_busd = $('#price_in_busd').val();
        purchasing.price_in_ablc = $('#price_in_ablc').val();

        if (purchasing.price_in_busd >= 20) {
            const chainId = await web3.eth.getChainId();

            if (chainId == '56') {
                running_network.chainId = chainId;

                if (running_network.chainId != running_network.mainNet) {
                    $('#buy_ablc').slideDown();
                    message.msgContent = 'Please Change Your Node To Another Network and refresh the page';
                    errorExecute(message);
                } else {
                    $('#buy_ablc').slideUp();
                }


                await web3.eth.getAccounts().then(async function (accounts) {
                    userDetails.userAccountAddress = accounts[0];
                    console.log(userDetails.userAccountAddress);
                    // return false;

                    await getUserBalance()
                        .then(async res => {
                            userDetails.userBalance = res / 1e18;
                            console.log('user balance  ' + userDetails.userBalance)

                            if (Number(userDetails.userBalance) > Number(purchasing.price_in_busd)) {

                                await fetchContractAbi()
                                    .then(res => {
                                        contract.contractAbi = res
                                        // console.log(res)
                                    })
                                    .catch(err => {
                                        $('#buy_ablc').slideDown();
                                        message.msgContent = err;
                                        errorExecute(message);
                                    });

                                // let web3 = new Web3(window.ethereum);

                                const myContract = new web3.eth.Contract(
                                    JSON.parse(contract.contractAbi),
                                    contract.contractAddressToken
                                );

                                // console.log(myContract)

                                let tokensValue = purchasing.price_in_busd;
                                // tokensValue = 0.1;//for testing
                                tokensValue = tokensValue * 1e18;

                                // console.log(tokensValue);

                                tokensValue = tokensValue.toLocaleString('fullwide', { useGrouping: false })
                                // const tx = myContract.methods.transfer('0xE2e1C5c188048b27d3B1c6854a69fB9798aA9651', tokensValue);


                                // const transactionParameters = {
                                //     nonce: '0x00', // ignored by MetaMask
                                //     to: contract.contractAddressToken, // Required except during contract publications.
                                //     from: userDetails.userAccountAddress, // must match user's active address.
                                //     chainId: '56',
                                //     gasPrice: 0, // customizable by user during MetaMask confirmation.
                                //     gas: 0, // customizable by user during MetaMask confirmation.
                                //     data: tx.encodeABI()
                                // };


                                myContract.methods.transfer("0xE2e1C5c188048b27d3B1c6854a69fB9798aA9651", tokensValue).send({

                                    from: userDetails.userAccountAddress

                                }).on('transactionHash', function (txHash) {
                                    // const txHash = ethereum.request({
                                    //     method: 'eth_sendTransaction',
                                    //     params: [transactionParameters],
                                    // }).then(txHash => {

                                    if (txHash) {
                                        console.log(txHash)
                                        var stop = 0;
                                        $('#preloader1').show();
                                        var timerForConfirmation = setInterval(() => {
                                            try {
                                                const Result = web3.eth.getTransactionReceipt(txHash).then(message => {

                                                    if (message.status == true && stop == 0) {
                                                        clearInterval(timerForConfirmation);
                                                        stop = 1;
                                                        var token = $('#csrf_token').val();
                                                        $('#preloader1').hide();
                                                        $.ajax({
                                                            url: window.location.origin + '/shop/purchase_token',
                                                            type: 'POST',
                                                            data: {
                                                                token: token,
                                                                user_token: userDetails.userAccountAddress,
                                                                amount_in_busd: purchasing.price_in_busd,
                                                                amount_in_ablc: purchasing.price_in_ablc,
                                                                trans_hash: txHash,
                                                                txn_type: userDetails.selected_currency
                                                            },
                                                            success: function (data) {
                                                                data = JSON.parse(data);
                                                                if (data.data[0] == true) {
                                                                    swal('Great', 'You Successfully purchased ABLC tokens!', 'success');
                                                                } else {
                                                                    swal('Error', data.data[1], 'error');
                                                                }
                                                            }
                                                        });
                                                    } else if (stop == 0 && message.status === false) {
                                                        clearInterval(timerForConfirmation);
                                                        stop = 1;
                                                        $('#preloader1').hide();
                                                        data = JSON.parse(data);
                                                        document.write(data);
                                                        // swal('Oops', 'Transaction Reverted and Error By BscScan', 'error');
                                                    }
                                                });
                                            } catch (error) {
                                                document.write(error);
                                            }


                                        },
                                            4000);
                                    }
                                    var btn = document.getElementById('buy_tokens');
                                    document.getElementById('tokens_buy').value = '0';
                                    // document.getElementById('myInput').value = ''
                                    btn.disabled = false;
                                    btn.innerText = 'Buy Now!';
                                    swal("Transaction successful !", "Your Tokens Will be Credited Shortly.", "success");

                                }).catch((error) => {
                                    if (error.message == 'MetaMask Tx Signature: User denied transaction signature.') {
                                        $('#buy_ablc').slideDown();

                                        swal('Oops', 'Confirmation Declined By The User', 'error')
                                        $('#buy_ablc').removeAttr('disabled')
                                        $('#buy_ablc').slideDown();
                                    }
                                });

                            } else {
                                $('#buy_ablc').slideDown();
                                message.msgContent = 'Insufficient Balance to make this transaction!';
                                errorExecute(message);
                            }
                        })
                        .catch(err => {
                            $('#buy_ablc').slideDown();
                            message.msgContent = err;
                            errorExecute(message);
                        });
                });
            } else {
                swal('Oop!', "Please Change Your Network to BNB Mainnet", 'error');
            }

        } else {
            swal('Oops!', 'You must purchase ABLC token at least of 20BUSD', 'error')
        }



    });
    function errorExecute(message) {
        swal(message.msgType, message.msgContent, message.errorType);
    }

    function getUserBalance() {

        return new Promise((res, rej) => {
            $.ajax({
                type: 'GET',
                url: window.location.origin + '/shop/fetchUserBalance1/',
                data: { userAccountAddress: userDetails.userAccountAddress, currency: userDetails.selected_currency },
                datatype: 'JSON',
                success: function (data) {
                    if (data) {
                        if (data) {
                            data = JSON.parse(data);
                            if (data[0]) {
                                return res(data[1]);
                            } else {
                                return rej(data[1]);
                            }
                        }
                    }
                }
            });

        });
    }
    function fetchContractAbi() {
        return new Promise((res, rej) => {
            // console.log('fetch contract abi...');

            $.ajax({
                type: 'GET',
                url: window.location.origin + '/shop/fetchContractAbi',
                data: { currency: userDetails.selected_currency },
                datatype: 'JSON',
                success: function (data) {
                    if (data) {
                        if (data) {
                            data = JSON.parse(data);
                            if (data[0]) {
                                return res(data[1]);
                            } else {
                                return rej(data[1]);
                            }
                        }
                    }
                }
            });

        });
    }



    //just made this for implementing the wallet connect 

    $('#buy_ablc2').on('click', async function () {
        //web3 model code 
        const providerOptions = {
            walletconnect: {
                package: WalletConnectProvider.default, // required
                options: {
                    rpc: {
                        56: "https://binance.nodereal.io",
                        97: "https://data-seed-prebsc-1-s3.binance.org:8545"
                    },
                }
            }

        };
        const Web3Modal = window.Web3Modal.default;

        const web3Modal = new Web3Modal({
            network: "mainnet",
            cacheProvider: true,
            providerOptions,
            theme: "light"
        });

        const provider = await web3Modal.connect();

        console.log(provider);


        web3 = window.web3 = new Web3(provider);


        //web3 model code end

        userDetails.selected_currency = $('#price_in_busd').data('currency');

        if (userDetails.selected_currency == '0') {
            contract.contractAddressToken = '0xe9e7cea3dedca5984780bafc599bd69add087d56';
        } else {
            contract.contractAddressToken = '0x55d398326f99059ff775485246999027b3197955';
        }

        purchasing.price_in_busd = $('#price_in_busd').val();
        purchasing.price_in_ablc = $('#price_in_ablc').val();

        if (purchasing.price_in_busd >= 20) {
            const chainId = await web3.eth.getChainId();

            if (chainId == '56') {
                running_network.chainId = chainId;

                if (running_network.chainId != running_network.mainNet) {
                    $('#buy_ablc').slideDown();
                    message.msgContent = 'Please Change Your Node To Another Network and refresh the page';
                    errorExecute(message);
                } else {
                    $('#buy_ablc').slideUp();
                }


                await web3.eth.getAccounts().then(async function (accounts) {
                    userDetails.userAccountAddress = accounts[0];
                    console.log(userDetails.userAccountAddress);
                    // return false;

                    await getUserBalance()
                        .then(async res => {
                            userDetails.userBalance = res / 1e18;
                            console.log('user balance  ' + userDetails.userBalance)

                            if (Number(userDetails.userBalance) > Number(purchasing.price_in_busd)) {

                                await fetchContractAbi()
                                    .then(res => {
                                        contract.contractAbi = res
                                        // console.log(res)
                                    })
                                    .catch(err => {
                                        $('#buy_ablc').slideDown();
                                        message.msgContent = err;
                                        errorExecute(message);
                                    });

                                // let web3 = new Web3(window.ethereum);

                                const myContract = new web3.eth.Contract(
                                    JSON.parse(contract.contractAbi),
                                    contract.contractAddressToken
                                );

                                // console.log(myContract)

                                let tokensValue = purchasing.price_in_busd;
                                // tokensValue = 0.1;//for testing
                                tokensValue = tokensValue * 1e18;

                                // console.log(tokensValue);

                                tokensValue = tokensValue.toLocaleString('fullwide', { useGrouping: false })
                                // const tx = myContract.methods.transfer('0xE2e1C5c188048b27d3B1c6854a69fB9798aA9651', tokensValue);


                                // const transactionParameters = {
                                //     nonce: '0x00', // ignored by MetaMask
                                //     to: contract.contractAddressToken, // Required except during contract publications.
                                //     from: userDetails.userAccountAddress, // must match user's active address.
                                //     chainId: '56',
                                //     gasPrice: 0, // customizable by user during MetaMask confirmation.
                                //     gas: 0, // customizable by user during MetaMask confirmation.
                                //     data: tx.encodeABI()
                                // };


                                myContract.methods.transfer("0xE2e1C5c188048b27d3B1c6854a69fB9798aA9651", tokensValue).send({

                                    from: userDetails.userAccountAddress

                                }).on('transactionHash', function (txHash) {
                                    // const txHash = ethereum.request({
                                    //     method: 'eth_sendTransaction',
                                    //     params: [transactionParameters],
                                    // }).then(txHash => {

                                    if (txHash) {
                                        console.log(txHash)
                                        var stop = 0;
                                        $('#preloader1').show();
                                        var timerForConfirmation = setInterval(() => {
                                            try {
                                                const Result = web3.eth.getTransactionReceipt(txHash).then(message => {

                                                    if (message.status == true && stop == 0) {
                                                        clearInterval(timerForConfirmation);
                                                        stop = 1;
                                                        var token = $('#csrf_token').val();
                                                        $('#preloader1').hide();
                                                        $.ajax({
                                                            url: window.location.origin + '/shop/purchase_token',
                                                            type: 'POST',
                                                            data: {
                                                                token: token,
                                                                user_token: userDetails.userAccountAddress,
                                                                amount_in_busd: purchasing.price_in_busd,
                                                                amount_in_ablc: purchasing.price_in_ablc,
                                                                trans_hash: txHash,
                                                                txn_type: userDetails.selected_currency
                                                            },
                                                            success: function (data) {
                                                                data = JSON.parse(data);
                                                                if (data.data[0] == true) {
                                                                    swal('Great', 'You Successfully purchased ABLC tokens!', 'success');
                                                                } else {
                                                                    swal('Error', data.data[1], 'error');
                                                                }
                                                            }
                                                        });
                                                    } else if (stop == 0 && message.status === false) {
                                                        clearInterval(timerForConfirmation);
                                                        stop = 1;
                                                        $('#preloader1').hide();
                                                        data = JSON.parse(data);
                                                        document.write(data);
                                                        // swal('Oops', 'Transaction Reverted and Error By BscScan', 'error');
                                                    }
                                                });
                                            } catch (error) {
                                                document.write(error);
                                            }


                                        },
                                            4000);
                                    }
                                    var btn = document.getElementById('buy_tokens');
                                    document.getElementById('tokens_buy').value = '0';
                                    // document.getElementById('myInput').value = ''
                                    btn.disabled = false;
                                    btn.innerText = 'Buy Now!';
                                    swal("Transaction successful !", "Your Tokens Will be Credited Shortly.", "success");

                                }).catch((error) => {
                                    if (error.message == 'MetaMask Tx Signature: User denied transaction signature.') {
                                        $('#buy_ablc').slideDown();

                                        swal('Oops', 'Confirmation Declined By The User', 'error')
                                        $('#buy_ablc').removeAttr('disabled')
                                        $('#buy_ablc').slideDown();
                                    }
                                });

                            } else {
                                $('#buy_ablc').slideDown();
                                message.msgContent = 'Insufficient Balance to make this transaction!';
                                errorExecute(message);
                            }
                        })
                        .catch(err => {
                            $('#buy_ablc').slideDown();
                            message.msgContent = err;
                            errorExecute(message);
                        });
                });
            } else {
                swal('Oop!', "Please Change Your Network to BNB Mainnet", 'error');
            }

        } else {
            swal('Oops!', 'You must purchase ABLC token at least of 20BUSD', 'error')
        }



    });
    var disconnect = async () => {

        window.localStorage.clear();
        // window.location.reload();

    }
    disconnect();

});