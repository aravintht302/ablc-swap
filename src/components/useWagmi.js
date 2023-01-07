import React from "react";
import { useContractWrite, prep } from "wagmi";
import { getAmountsOut, converter, getAmountsOutAblc, ablc, approve, PancakeRouter } from '../sdk/swap';
import {
    usePrepareContractWrite,
    useContractWrite,
    useWaitForTransaction,
} from 'wagmi'

export default function useWagmi(abi, address, functionName, args) {
    const {
        config,
        error: prepareError,
        isError: isPrepareError,
    } = usePrepareContractWrite({
        address: address,
        abi: abi,
        functionName: functionName,
        args: args,
    })

    const { data, error, isError, write } = useContractWrite(config)

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })

    return {
        data, error, isError, write,
        isLoading, isSuccess

    }

}