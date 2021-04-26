
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import memoize from 'fast-memoize'
// import { Contract } from 'web3-eth-contract'

const rawGetWeb3 = (url: string) => new Web3(new Web3.providers.HttpProvider(url))

const memoized = memoize(rawGetWeb3)
export const getWeb3 = (url: string) => memoized(url)

export const getContract = (url : string, address : string, abi : AbiItem[]) => {
    const web3 : Web3 = getWeb3(url)
    const ret = new web3.eth.Contract(abi, address)
    return ret;
}