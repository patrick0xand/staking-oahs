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
  TransferHelper,
  TransferHelperInterface,
} from "../../../contracts/utils/TransferHelper";

const _abi = [
  {
    inputs: [],
    name: "BNB_CHAIN",
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
    name: "BNB_CHAIN_TESTNET",
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
    name: "BNB_CHAIN_TESTNET_WRAPPED",
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
    name: "BNB_CHAIN_WRAPPED",
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
    name: "HARDHAT_RUNTIME",
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
    name: "HARDHAT_RUNTIME_WRAPPED",
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
    name: "POLYGON",
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
    name: "POLYGON_MUMBAI",
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
    name: "POLYGON_MUMBAI_WRAPPED",
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
    name: "POLYGON_WRAPPED",
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
    name: "V_CHAIN",
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
    name: "V_CHAIN_TESTNET",
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
    name: "V_CHAIN_TESTNET_WRAPPED",
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
    name: "V_CHAIN_WRAPPED",
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
] as const;

const _bytecode =
  "0x61025361003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100f45760003560e01c8063785e639f11610096578063c8744dd811610070578063c8744dd8146101ea578063dee42565146101f2578063f65ea71c1461020d578063fec030881461021557600080fd5b8063785e639f146101ac5780639a2bf534146101c7578063aa07512a146101e257600080fd5b8063573d2f34116100d2578063573d2f341461016357806364f9807c1461016d5780636895d0b4146101885780636edcf855146101a357600080fd5b80630df5c815146100f9578063344f0d3e146101155780634bff244414610148575b600080fd5b6101026136b081565b6040519081526020015b60405180910390f35b61013073e39ab88f8a4777030a534146a9ca3b52bd5d43a381565b6040516001600160a01b03909116815260200161010c565b61013073d9145cce52d386f254917e481eb44e9943f3913881565b6101026201388181565b61013073bb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c81565b6101307382af49447d8a07e3bd95bd0d56f35241523fbab181565b610102617a6981565b61013073ae13d989dac2f0debff460ac112a837c89baa7cd81565b6101307373d82a5e21aafe7dea29204079937f3c4116143281565b610102606181565b610102608981565b610130735fbdb2315678afecb367f032d93f642f64180aa381565b610102600181565b61010260388156fea264697066735822122036e68ff3a03a1b17ec238b6f227464bf9dbf5a28a8565121dc26d1e46addaef264736f6c63430008120033";

type TransferHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TransferHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TransferHelper__factory extends ContractFactory {
  constructor(...args: TransferHelperConstructorParams) {
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
      TransferHelper & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TransferHelper__factory {
    return super.connect(runner) as TransferHelper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransferHelperInterface {
    return new Interface(_abi) as TransferHelperInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TransferHelper {
    return new Contract(address, _abi, runner) as unknown as TransferHelper;
  }
}
