import { AbiItem } from "web3-utils";

const abi: AbiItem[] = [
  {
    constant: true,
    inputs: [],
    name: "player2Choice",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "player1Choice",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    constant: true,
    inputs: [],
    name: "getWinner",
    outputs: [
      {
        name: "x",
        type: "int256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "choice",
        type: "string",
      },
    ],
    name: "play",
    outputs: [
      {
        name: "w",
        type: "int256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getMyBalance",
    outputs: [
      {
        name: "amount",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getContractBalance",
    outputs: [
      {
        name: "amount",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "register",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "AmIPlayer1",
    outputs: [
      {
        name: "x",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "AmIPlayer2",
    outputs: [
      {
        name: "x",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "checkBothNotNull",
    outputs: [
      {
        name: "x",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  }
]

export default abi

