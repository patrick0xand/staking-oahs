/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ILPool,
  ILPoolInterface,
} from "../../../contracts/interfaces/ILPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "sellToken",
        type: "address",
      },
    ],
    name: "borrowBehalf",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ILPool__factory {
  static readonly abi = _abi;
  static createInterface(): ILPoolInterface {
    return new Interface(_abi) as ILPoolInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ILPool {
    return new Contract(address, _abi, runner) as unknown as ILPool;
  }
}
