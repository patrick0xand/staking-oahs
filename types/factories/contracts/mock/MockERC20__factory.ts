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
  "0x608060405234801561001057600080fd5b506040516119ce3803806119ce833981810160405281019061003291906101ef565b818181600390816100439190610488565b5080600490816100539190610488565b5050506100706714d23f783168d8de60c01b61007760201b60201c565b505061055a565b50565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6100e182610098565b810181811067ffffffffffffffff82111715610100576100ff6100a9565b5b80604052505050565b600061011361007a565b905061011f82826100d8565b919050565b600067ffffffffffffffff82111561013f5761013e6100a9565b5b61014882610098565b9050602081019050919050565b60005b83811015610173578082015181840152602081019050610158565b60008484015250505050565b600061019261018d84610124565b610109565b9050828152602081018484840111156101ae576101ad610093565b5b6101b9848285610155565b509392505050565b600082601f8301126101d6576101d561008e565b5b81516101e684826020860161017f565b91505092915050565b6000806040838503121561020657610205610084565b5b600083015167ffffffffffffffff81111561022457610223610089565b5b610230858286016101c1565b925050602083015167ffffffffffffffff81111561025157610250610089565b5b61025d858286016101c1565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806102b957607f821691505b6020821081036102cc576102cb610272565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026103347fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826102f7565b61033e86836102f7565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600061038561038061037b84610356565b610360565b610356565b9050919050565b6000819050919050565b61039f8361036a565b6103b36103ab8261038c565b848454610304565b825550505050565b600090565b6103c86103bb565b6103d3818484610396565b505050565b5b818110156103f7576103ec6000826103c0565b6001810190506103d9565b5050565b601f82111561043c5761040d816102d2565b610416846102e7565b81016020851015610425578190505b610439610431856102e7565b8301826103d8565b50505b505050565b600082821c905092915050565b600061045f60001984600802610441565b1980831691505092915050565b6000610478838361044e565b9150826002028217905092915050565b61049182610267565b67ffffffffffffffff8111156104aa576104a96100a9565b5b6104b482546102a1565b6104bf8282856103fb565b600060209050601f8311600181146104f257600084156104e0578287015190505b6104ea858261046c565b865550610552565b601f198416610500866102d2565b60005b8281101561052857848901518255600182019150602085019450602081019050610503565b868310156105455784890151610541601f89168261044e565b8355505b6001600288020188555050505b505050505050565b611465806105696000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806340c10f191161007157806340c10f19146101a357806370a08231146101bf57806395d89b41146101ef578063a457c2d71461020d578063a9059cbb1461023d578063dd62ed3e1461026d576100b4565b806306fdde03146100b9578063095ea7b3146100d757806318160ddd1461010757806323b872dd14610125578063313ce567146101555780633950935114610173575b600080fd5b6100c161029d565b6040516100ce9190610cd6565b60405180910390f35b6100f160048036038101906100ec9190610d91565b61032f565b6040516100fe9190610dec565b60405180910390f35b61010f610352565b60405161011c9190610e16565b60405180910390f35b61013f600480360381019061013a9190610e31565b61035c565b60405161014c9190610dec565b60405180910390f35b61015d61038b565b60405161016a9190610ea0565b60405180910390f35b61018d60048036038101906101889190610d91565b610394565b60405161019a9190610dec565b60405180910390f35b6101bd60048036038101906101b89190610d91565b6103cb565b005b6101d960048036038101906101d49190610ebb565b610415565b6040516101e69190610e16565b60405180910390f35b6101f761045d565b6040516102049190610cd6565b60405180910390f35b61022760048036038101906102229190610d91565b6104ef565b6040516102349190610dec565b60405180910390f35b61025760048036038101906102529190610d91565b610566565b6040516102649190610dec565b60405180910390f35b61028760048036038101906102829190610ee8565b610589565b6040516102949190610e16565b60405180910390f35b6060600380546102ac90610f57565b80601f01602080910402602001604051908101604052809291908181526020018280546102d890610f57565b80156103255780601f106102fa57610100808354040283529160200191610325565b820191906000526020600020905b81548152906001019060200180831161030857829003601f168201915b5050505050905090565b60008061033a610610565b9050610347818585610618565b600191505092915050565b6000600254905090565b600080610367610610565b90506103748582856107e1565b61037f85858561086d565b60019150509392505050565b60006012905090565b60008061039f610610565b90506103c08185856103b18589610589565b6103bb9190610fb7565b610618565b600191505092915050565b6103df6781fccb4e66ceca9d60c01b610ae3565b6103f36714ea717ba6912e8260c01b610ae3565b610407670ac7dbbf438bbb4a60c01b610ae3565b6104118282610ae6565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461046c90610f57565b80601f016020809104026020016040519081016040528092919081815260200182805461049890610f57565b80156104e55780601f106104ba576101008083540402835291602001916104e5565b820191906000526020600020905b8154815290600101906020018083116104c857829003601f168201915b5050505050905090565b6000806104fa610610565b905060006105088286610589565b90508381101561054d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105449061105d565b60405180910390fd5b61055a8286868403610618565b60019250505092915050565b600080610571610610565b905061057e81858561086d565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610687576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067e906110ef565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ed90611181565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107d49190610e16565b60405180910390a3505050565b60006107ed8484610589565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146108675781811015610859576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610850906111ed565b60405180910390fd5b6108668484848403610618565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d39061127f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361094b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094290611311565b60405180910390fd5b610956838383610c3c565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156109dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d3906113a3565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610aca9190610e16565b60405180910390a3610add848484610c41565b50505050565b50565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b55576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4c9061140f565b60405180910390fd5b610b6160008383610c3c565b8060026000828254610b739190610fb7565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610c249190610e16565b60405180910390a3610c3860008383610c41565b5050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c80578082015181840152602081019050610c65565b60008484015250505050565b6000601f19601f8301169050919050565b6000610ca882610c46565b610cb28185610c51565b9350610cc2818560208601610c62565b610ccb81610c8c565b840191505092915050565b60006020820190508181036000830152610cf08184610c9d565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610d2882610cfd565b9050919050565b610d3881610d1d565b8114610d4357600080fd5b50565b600081359050610d5581610d2f565b92915050565b6000819050919050565b610d6e81610d5b565b8114610d7957600080fd5b50565b600081359050610d8b81610d65565b92915050565b60008060408385031215610da857610da7610cf8565b5b6000610db685828601610d46565b9250506020610dc785828601610d7c565b9150509250929050565b60008115159050919050565b610de681610dd1565b82525050565b6000602082019050610e016000830184610ddd565b92915050565b610e1081610d5b565b82525050565b6000602082019050610e2b6000830184610e07565b92915050565b600080600060608486031215610e4a57610e49610cf8565b5b6000610e5886828701610d46565b9350506020610e6986828701610d46565b9250506040610e7a86828701610d7c565b9150509250925092565b600060ff82169050919050565b610e9a81610e84565b82525050565b6000602082019050610eb56000830184610e91565b92915050565b600060208284031215610ed157610ed0610cf8565b5b6000610edf84828501610d46565b91505092915050565b60008060408385031215610eff57610efe610cf8565b5b6000610f0d85828601610d46565b9250506020610f1e85828601610d46565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610f6f57607f821691505b602082108103610f8257610f81610f28565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610fc282610d5b565b9150610fcd83610d5b565b9250828201905080821115610fe557610fe4610f88565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611047602583610c51565b915061105282610feb565b604082019050919050565b600060208201905081810360008301526110768161103a565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006110d9602483610c51565b91506110e48261107d565b604082019050919050565b60006020820190508181036000830152611108816110cc565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b600061116b602283610c51565b91506111768261110f565b604082019050919050565b6000602082019050818103600083015261119a8161115e565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006111d7601d83610c51565b91506111e2826111a1565b602082019050919050565b60006020820190508181036000830152611206816111ca565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611269602583610c51565b91506112748261120d565b604082019050919050565b600060208201905081810360008301526112988161125c565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006112fb602383610c51565b91506113068261129f565b604082019050919050565b6000602082019050818103600083015261132a816112ee565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b600061138d602683610c51565b915061139882611331565b604082019050919050565b600060208201905081810360008301526113bc81611380565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006113f9601f83610c51565b9150611404826113c3565b602082019050919050565b60006020820190508181036000830152611428816113ec565b905091905056fea26469706673582212202ce82f137bc56059ba7a3400669a1553047caa79c50691f44e9519362901e41064736f6c63430008190033";

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
