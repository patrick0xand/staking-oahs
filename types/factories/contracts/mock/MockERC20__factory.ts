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
import type {
  MockERC20,
  MockERC20Interface,
} from "../../../contracts/mock/MockERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610c0e380380610c0e83398101604081905261002f91610112565b8181600361003d8382610200565b50600461004a8282610200565b50505050506102bf565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261007b57600080fd5b81516001600160401b038082111561009557610095610054565b604051601f8301601f19908116603f011681019082821181831017156100bd576100bd610054565b81604052838152602092508660208588010111156100da57600080fd5b600091505b838210156100fc57858201830151818301840152908201906100df565b6000602085830101528094505050505092915050565b6000806040838503121561012557600080fd5b82516001600160401b038082111561013c57600080fd5b6101488683870161006a565b9350602085015191508082111561015e57600080fd5b5061016b8582860161006a565b9150509250929050565b600181811c9082168061018957607f821691505b6020821081036101a957634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156101fb576000816000526020600020601f850160051c810160208610156101d85750805b601f850160051c820191505b818110156101f7578281556001016101e4565b5050505b505050565b81516001600160401b0381111561021957610219610054565b61022d816102278454610175565b846101af565b602080601f831160018114610262576000841561024a5750858301515b600019600386901b1c1916600185901b1785556101f7565b600085815260208120601f198616915b8281101561029157888601518255948401946001909101908401610272565b50858210156102af5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610940806102ce6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806340c10f191161007157806340c10f191461014157806370a082311461015657806395d89b411461017f578063a457c2d714610187578063a9059cbb1461019a578063dd62ed3e146101ad57600080fd5b806306fdde03146100b9578063095ea7b3146100d757806318160ddd146100fa57806323b872dd1461010c578063313ce5671461011f578063395093511461012e575b600080fd5b6100c16101c0565b6040516100ce9190610789565b60405180910390f35b6100ea6100e53660046107f4565b610252565b60405190151581526020016100ce565b6002545b6040519081526020016100ce565b6100ea61011a36600461081e565b61026c565b604051601281526020016100ce565b6100ea61013c3660046107f4565b610290565b61015461014f3660046107f4565b6102b2565b005b6100fe61016436600461085a565b6001600160a01b031660009081526020819052604090205490565b6100c16102c0565b6100ea6101953660046107f4565b6102cf565b6100ea6101a83660046107f4565b61034f565b6100fe6101bb36600461087c565b61035d565b6060600380546101cf906108af565b80601f01602080910402602001604051908101604052809291908181526020018280546101fb906108af565b80156102485780601f1061021d57610100808354040283529160200191610248565b820191906000526020600020905b81548152906001019060200180831161022b57829003601f168201915b5050505050905090565b600033610260818585610388565b60019150505b92915050565b60003361027a8582856104ac565b610285858585610526565b506001949350505050565b6000336102608185856102a3838361035d565b6102ad91906108e9565b610388565b6102bc82826106ca565b5050565b6060600480546101cf906108af565b600033816102dd828661035d565b9050838110156103425760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6102858286868403610388565b600033610260818585610526565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166103ea5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610339565b6001600160a01b03821661044b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610339565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006104b8848461035d565b9050600019811461052057818110156105135760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610339565b6105208484848403610388565b50505050565b6001600160a01b03831661058a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610339565b6001600160a01b0382166105ec5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610339565b6001600160a01b038316600090815260208190526040902054818110156106645760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610339565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610520565b6001600160a01b0382166107205760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610339565b806002600082825461073291906108e9565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b60006020808352835180602085015260005b818110156107b75785810183015185820160400152820161079b565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146107ef57600080fd5b919050565b6000806040838503121561080757600080fd5b610810836107d8565b946020939093013593505050565b60008060006060848603121561083357600080fd5b61083c846107d8565b925061084a602085016107d8565b9150604084013590509250925092565b60006020828403121561086c57600080fd5b610875826107d8565b9392505050565b6000806040838503121561088f57600080fd5b610898836107d8565b91506108a6602084016107d8565b90509250929050565b600181811c908216806108c357607f821691505b6020821081036108e357634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561026657634e487b7160e01b600052601160045260246000fdfea26469706673582212206312ec119faa96268644777072eaf2461bc74c476984b824a579c20db01532f764736f6c63430008190033";

type MockERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockERC20__factory extends ContractFactory {
  constructor(...args: MockERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override deploy(
    name: string,
    symbol: string,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(name, symbol, overrides || {}) as Promise<
      MockERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MockERC20__factory {
    return super.connect(runner) as MockERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC20Interface {
    return new Interface(_abi) as MockERC20Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): MockERC20 {
    return new Contract(address, _abi, runner) as unknown as MockERC20;
  }
}
