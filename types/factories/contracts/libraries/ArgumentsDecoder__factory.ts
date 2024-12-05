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
  ArgumentsDecoder,
  ArgumentsDecoderInterface,
} from "../../../contracts/libraries/ArgumentsDecoder";

const _abi = [
  {
    inputs: [],
    name: "IncorrectDataLength",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122040cd82cbfdeddaa2d5764910459b6cce3672e7303e940c6cd8452cc20399010664736f6c63430008120033";

type ArgumentsDecoderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ArgumentsDecoderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ArgumentsDecoder__factory extends ContractFactory {
  constructor(...args: ArgumentsDecoderConstructorParams) {
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
      ArgumentsDecoder & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ArgumentsDecoder__factory {
    return super.connect(runner) as ArgumentsDecoder__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ArgumentsDecoderInterface {
    return new Interface(_abi) as ArgumentsDecoderInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ArgumentsDecoder {
    return new Contract(address, _abi, runner) as unknown as ArgumentsDecoder;
  }
}