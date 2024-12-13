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
  Storage,
  StorageInterface,
} from "../../../contracts/Staking.sol/Storage";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldRewardToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "returnedAmount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newRewardToken",
        type: "address",
      },
    ],
    name: "RewardTokenChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "rewardToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "claimedAmount",
        type: "uint256",
      },
    ],
    name: "UserClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "UserStaked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "UserWithdrew",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_TIME",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardToken",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stakes",
    outputs: [
      {
        internalType: "address",
        name: "stakeToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "convertRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lockTimePeriod",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userStakes",
    outputs: [
      {
        internalType: "uint256",
        name: "stakeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accumulatedRewards",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "withdrawTime",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b506102168061001f6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632694998414610051578063d5a44f861461007a578063e8990524146100b9578063f7c618c114610119575b600080fd5b61005e65ffffffffffff81565b60405165ffffffffffff90911681526020015b60405180910390f35b61008d61008836600461018b565b610144565b604080516001600160a01b03909516855260208501939093529183015215156060820152608001610071565b6100f96100c73660046101a4565b600460209081526000928352604080842090915290825290208054600182015460028301546003909301549192909184565b604080519485526020850193909352918301526060820152608001610071565b60055461012c906001600160a01b031681565b6040516001600160a01b039091168152602001610071565b6003818154811061015457600080fd5b600091825260209091206004909102018054600182015460028301546003909301546001600160a01b039092169350919060ff1684565b60006020828403121561019d57600080fd5b5035919050565b600080604083850312156101b757600080fd5b8235915060208301356001600160a01b03811681146101d557600080fd5b80915050925092905056fea26469706673582212200166139750ba99bf1da809f8485d1a32b2daac56e2520796ec4c9170dcced5a364736f6c63430008190033";

type StorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Storage__factory extends ContractFactory {
  constructor(...args: StorageConstructorParams) {
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
      Storage & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Storage__factory {
    return super.connect(runner) as Storage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StorageInterface {
    return new Interface(_abi) as StorageInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Storage {
    return new Contract(address, _abi, runner) as unknown as Storage;
  }
}
