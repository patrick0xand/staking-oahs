/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IWBNB,
  IWBNBInterface,
} from "../../../contracts/interfaces/IWBNB";

const _abi = [
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
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
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IWBNB__factory {
  static readonly abi = _abi;
  static createInterface(): IWBNBInterface {
    return new Interface(_abi) as IWBNBInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IWBNB {
    return new Contract(address, _abi, runner) as unknown as IWBNB;
  }
}