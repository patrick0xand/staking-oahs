/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { ETH, ETHInterface } from "../../../contracts/Staking.sol/ETH";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060408051808201825260038082526208aa8960eb1b60208084018290528451808601909552828552840152909190610049838261016b565b506004610056828261016b565b50505061006f61006a61007460201b60201c565b610078565b61022a565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806100f457607f821691505b60208210810361011457634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115610166576000816000526020600020601f850160051c810160208610156101435750805b601f850160051c820191505b818110156101625782815560010161014f565b5050505b505050565b81516001600160401b03811115610184576101846100ca565b6101988161019284546100e0565b8461011a565b602080601f8311600181146101cd57600084156101b55750858301515b600019600386901b1c1916600185901b178555610162565b600085815260208120601f198616915b828110156101fc578886015182559484019460019091019084016101dd565b508582101561021a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610d83806102396000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d714610209578063a9059cbb1461021c578063dd62ed3e1461022f578063f2fde38b1461024257600080fd5b806370a08231146101b5578063715018a6146101de5780638da5cb5b146101e657806395d89b411461020157600080fd5b8063313ce567116100d3578063313ce5671461016b578063395093511461017a57806340c10f191461018d57806342966c68146101a257600080fd5b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014657806323b872dd14610158575b600080fd5b61010d610255565b60405161011a9190610aa1565b60405180910390f35b610136610131366004610b0c565b6102e7565b604051901515815260200161011a565b6002545b60405190815260200161011a565b610136610166366004610b36565b610301565b6040516012815260200161011a565b610136610188366004610b0c565b610325565b6101a061019b366004610b0c565b610347565b005b6101a06101b0366004610b72565b61036a565b61014a6101c3366004610b8b565b6001600160a01b031660009081526020819052604090205490565b6101a0610377565b6005546040516001600160a01b03909116815260200161011a565b61010d61038b565b610136610217366004610b0c565b61039a565b61013661022a366004610b0c565b61041a565b61014a61023d366004610bad565b610428565b6101a0610250366004610b8b565b610453565b60606003805461026490610be0565b80601f016020809104026020016040519081016040528092919081815260200182805461029090610be0565b80156102dd5780601f106102b2576101008083540402835291602001916102dd565b820191906000526020600020905b8154815290600101906020018083116102c057829003601f168201915b5050505050905090565b6000336102f58185856104c9565b60019150505b92915050565b60003361030f8582856105ee565b61031a858585610668565b506001949350505050565b6000336102f58185856103388383610428565b6103429190610c30565b6104c9565b610366826103576012600a610d27565b6103619084610d36565b61080c565b5050565b61037433826108cb565b50565b61037f6109f5565b6103896000610a4f565b565b60606004805461026490610be0565b600033816103a88286610428565b90508381101561040d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61031a82868684036104c9565b6000336102f5818585610668565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b61045b6109f5565b6001600160a01b0381166104c05760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610404565b61037481610a4f565b6001600160a01b03831661052b5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610404565b6001600160a01b03821661058c5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610404565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b60006105fa8484610428565b9050600019811461066257818110156106555760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610404565b61066284848484036104c9565b50505050565b6001600160a01b0383166106cc5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610404565b6001600160a01b03821661072e5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610404565b6001600160a01b038316600090815260208190526040902054818110156107a65760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610404565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610662565b6001600160a01b0382166108625760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610404565b80600260008282546108749190610c30565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b6001600160a01b03821661092b5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610404565b6001600160a01b0382166000908152602081905260409020548181101561099f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610404565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91016105e1565b6005546001600160a01b031633146103895760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610404565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60006020808352835180602085015260005b81811015610acf57858101830151858201604001528201610ab3565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610b0757600080fd5b919050565b60008060408385031215610b1f57600080fd5b610b2883610af0565b946020939093013593505050565b600080600060608486031215610b4b57600080fd5b610b5484610af0565b9250610b6260208501610af0565b9150604084013590509250925092565b600060208284031215610b8457600080fd5b5035919050565b600060208284031215610b9d57600080fd5b610ba682610af0565b9392505050565b60008060408385031215610bc057600080fd5b610bc983610af0565b9150610bd760208401610af0565b90509250929050565b600181811c90821680610bf457607f821691505b602082108103610c1457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156102fb576102fb610c1a565b600181815b80851115610c7e578160001904821115610c6457610c64610c1a565b80851615610c7157918102915b93841c9390800290610c48565b509250929050565b600082610c95575060016102fb565b81610ca2575060006102fb565b8160018114610cb85760028114610cc257610cde565b60019150506102fb565b60ff841115610cd357610cd3610c1a565b50506001821b6102fb565b5060208310610133831016604e8410600b8410161715610d01575081810a6102fb565b610d0b8383610c43565b8060001904821115610d1f57610d1f610c1a565b029392505050565b6000610ba660ff841683610c86565b80820281158282048414176102fb576102fb610c1a56fea264697066735822122037a3d585a8c6f5188b81575ad8e70ba50897fd2939a19d86d934bf43155cffdb64736f6c63430008190033";

type ETHConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ETHConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ETH__factory extends ContractFactory {
  constructor(...args: ETHConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      ETH & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ETH__factory {
    return super.connect(runner) as ETH__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ETHInterface {
    return new Interface(_abi) as ETHInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ETH {
    return new Contract(address, _abi, runner) as unknown as ETH;
  }
}