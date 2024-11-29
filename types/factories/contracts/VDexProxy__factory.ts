/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BytesLike,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { VDexProxy, VDexProxyInterface } from "../../contracts/VDexProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "initData",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161073838038061073883398101604081905261002f9161032a565b818161003d82826000610046565b50505050610447565b61004f8361007c565b60008251118061005c5750805b156100775761007583836100bc60201b6100291760201c565b505b505050565b610085816100e8565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606100e18383604051806060016040528060278152602001610711602791396101ba565b9392505050565b6100fb8161023360201b6100551760201c565b6101625760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101997f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61024260201b6100641760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060600080856001600160a01b0316856040516101d791906103f8565b600060405180830381855af49150503d8060008114610212576040519150601f19603f3d011682016040523d82523d6000602084013e610217565b606091505b50909250905061022986838387610245565b9695505050505050565b6001600160a01b03163b151590565b90565b606083156102b45782516000036102ad576001600160a01b0385163b6102ad5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610159565b50816102be565b6102be83836102c6565b949350505050565b8151156102d65781518083602001fd5b8060405162461bcd60e51b81526004016101599190610414565b634e487b7160e01b600052604160045260246000fd5b60005b83811015610321578181015183820152602001610309565b50506000910152565b6000806040838503121561033d57600080fd5b82516001600160a01b038116811461035457600080fd5b60208401519092506001600160401b038082111561037157600080fd5b818501915085601f83011261038557600080fd5b815181811115610397576103976102f0565b604051601f8201601f19908116603f011681019083821181831017156103bf576103bf6102f0565b816040528281528860208487010111156103d857600080fd5b6103e9836020830160208801610306565b80955050505050509250929050565b6000825161040a818460208701610306565b9190910192915050565b6020815260008251806020840152610433816040850160208701610306565b601f01601f19169190910160400192915050565b6102bb806104566000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610067565b61009f565b565b606061004e838360405180606001604052806027815260200161025f602791396100c3565b9392505050565b6001600160a01b03163b151590565b90565b600061009a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100be573d6000f35b3d6000fd5b6060600080856001600160a01b0316856040516100e0919061020f565b600060405180830381855af49150503d806000811461011b576040519150601f19603f3d011682016040523d82523d6000602084013e610120565b606091505b50915091506101318683838761013b565b9695505050505050565b606083156101af5782516000036101a8576001600160a01b0385163b6101a85760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b50816101b9565b6101b983836101c1565b949350505050565b8151156101d15781518083602001fd5b8060405162461bcd60e51b815260040161019f919061022b565b60005b838110156102065781810151838201526020016101ee565b50506000910152565b600082516102218184602087016101eb565b9190910192915050565b602081526000825180602084015261024a8160408501602087016101eb565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220cb2762ef19487b537784d9aad34223e4cbccc5b068542b8384bb546f33f0dd4e64736f6c63430008120033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";

type VDexProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VDexProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VDexProxy__factory extends ContractFactory {
  constructor(...args: VDexProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    implementation: AddressLike,
    initData: BytesLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      implementation,
      initData,
      overrides || {}
    );
  }
  override deploy(
    implementation: AddressLike,
    initData: BytesLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(implementation, initData, overrides || {}) as Promise<
      VDexProxy & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): VDexProxy__factory {
    return super.connect(runner) as VDexProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VDexProxyInterface {
    return new Interface(_abi) as VDexProxyInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): VDexProxy {
    return new Contract(address, _abi, runner) as unknown as VDexProxy;
  }
}
