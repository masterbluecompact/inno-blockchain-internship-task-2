import { useEffect, useState } from "react";
// import { Contract } from "web3-eth-contract";
import { useWallet} from 'use-wallet'

export const usePlayerState = (rps: any) => {
  const [playerId, setPlayerId] = useState(-1)
  const [registered, setRegistered] = useState(false)
  const [playersFull, setFull] = useState(false)
  const [result, setResult] = useState(-1)
  const [gameState, setGameState] = useState("loading...")
  const [rpsBalance, setBalance] = useState(-1)
  const [connected, setConnected] = useState(false)
  const wallet = useWallet()

  useEffect(() => {
    if(wallet.status === 'connected'){
      // setRps(getContract(RPC_URL_RINKEBY, RPS_CONTRACT_ADDRESS_RINKEBY, RPS_ABI))
      const setbal = async () => {
        setBalance(await rps.methods.getContractBalance().call())
      }
      setbal()
      setConnected(true)
    }
  }, [wallet.status]);

  useEffect(() => {
    if(!connected) return;
    if(result !== -1){
      if(result === 0){
        setGameState("it's a Draw")
      }
      else if(result === playerId){
        setGameState("You win!")
      }
    }
  }, [result, connected, playerId]);

  useEffect(() => {
    if(!connected) return;
    if(!registered && playersFull && playerId === -1){
      setGameState("You can't play, all the seats are taken")
    }
  }, [result, registered, playersFull, playerId, connected]);

  useEffect(() => {
    if(!connected) return;
    if(!registered && !playersFull && playerId === -1){
      const reg = async () => {
        await rps.methods.register().send({"from" : wallet.account, "value":5}) // TODO: see issue
        const p1 = await rps.methods.AmIPlayer1().call();
        const p2 = await rps.methods.AmIPlayer2().call();
        console.log([p1, p2])
        if(p1 || p2) {
          setRegistered(true)
          setPlayerId(p1? 1 : 2)
          setGameState("You are registered as player " + playerId.toString())
        } else {
          setFull(true)
        }
      };
      reg();

    }
  }, [registered, playersFull, playerId, connected, wallet.account]);


  return {
    gameState,
    rpsBalance
  };
};
