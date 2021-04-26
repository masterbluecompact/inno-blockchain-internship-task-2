// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {RPC_URL_RINKEBY} from './constants'


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {RPC_URL_RINKEBY}
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import { useWallet, UseWalletProvider } from 'use-wallet'
import { usePlayerState } from './state/usePlayerState'
import { getContract } from './utils'
import { RPC_URL_RINKEBY, RPS_CONTRACT_ADDRESS_RINKEBY } from './constants'
import { RPS_ABI } from './abi'

function App() {
  const wallet = useWallet()
  const rps = getContract(RPC_URL_RINKEBY, RPS_CONTRACT_ADDRESS_RINKEBY, RPS_ABI)
  const {gameState, rpsBalance} = usePlayerState(rps)

  return (
    <>
      <h1>Wallet</h1>
      {wallet.status === 'connected' ? (
        <div>
          <div>Account: {wallet.account}</div>
          <div>Balance: {wallet.balance}</div>
          {/* <div>Game State : {gameState}</div>
          <div>RPS Balance : {rpsBalance}</div> */}
          <button onClick={() => wallet.reset()}>Disconnect</button>
        </div>
      ) : (
        <div>
          Connect:
          <button onClick={() => wallet.connect('injected')}>Connect 🦊</button>
        </div>
      )}
    </>
  )
}

// Wrap everything in <UseWalletProvider />
export default () => (
  <UseWalletProvider
    chainId={4}
    connectors={{
      // // This is how connectors get configured
      // portis: { dAppId: 'my-dapp-id-123-xyz' },
    }}
  >
    <App />
  </UseWalletProvider>
)