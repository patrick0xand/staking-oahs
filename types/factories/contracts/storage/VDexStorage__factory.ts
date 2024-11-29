/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  VDexStorage,
  VDexStorageInterface,
} from "../../../contracts/storage/VDexStorage";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "baseAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "quoteAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "baseAssetAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quoteAssetAmount",
        type: "uint256",
      },
    ],
    name: "CancelSwapOrder",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previousValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "ChainPropagationPeriodChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "depositToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "indexToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collateralDelta",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sizeDelta",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isLong",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "acceptablePrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minOut",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "executionFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "queueIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockTime",
        type: "uint256",
      },
    ],
    name: "CreateDecreasePosition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "depositToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "indexToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minOut",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sizeDelta",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isLong",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "acceptablePrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "executionFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "queueIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gasPrice",
        type: "uint256",
      },
    ],
    name: "CreateIncreasePosition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "assetAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "quantityInPips",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "newExchangeBalanceInPips",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newExchangeBalanceInAssetUnits",
        type: "uint256",
      },
    ],
    name: "Deposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "indexToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collateralDelta",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sizeDelta",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isLong",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "acceptablePrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minOut",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "executionFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockGap",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timeGap",
        type: "uint256",
      },
    ],
    name: "ExecuteDecreasePosition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "indexToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minOut",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sizeDelta",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isLong",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "acceptablePrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "executionFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockGap",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timeGap",
        type: "uint256",
      },
    ],
    name: "ExecuteIncreasePosition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "factory",
        type: "address",
      },
    ],
    name: "NewFactoryAddress",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyWallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sellWallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "buyerInputUpdate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sellerInputUpdate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "buyerOutputUpdate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sellerOutputUpdate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum OrderSide",
        name: "takerSide",
        type: "uint8",
      },
    ],
    name: "OrderBookTradeExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "makerAccountOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "baseAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "quoteAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "orderType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "baseAssetAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quoteAssetAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "orderSide",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expiration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isLong",
        type: "bool",
      },
    ],
    name: "OrderCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "nonce",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "timestampInMs",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "effectiveBlockNumber",
        type: "uint256",
      },
    ],
    name: "OrderNonceInvalidated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "WalletExitCleared",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "effectiveBlockNumber",
        type: "uint256",
      },
    ],
    name: "WalletExited",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_walletExits",
    outputs: [
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "effectiveBlockNumber",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "addressConfig",
    outputs: [
      {
        internalType: "address",
        name: "factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "wETH",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "callCoinPermit",
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
    name: "decreasePositionRequestKeys",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decreasePositionRequestKeysStart",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "decreasePositionRequests",
    outputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "depositToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "indexToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "collateralDelta",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sizeDelta",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isLong",
        type: "bool",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "acceptablePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "executionFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withdrawETH",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "decreasePositionsIndex",
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
        name: "",
        type: "address",
      },
    ],
    name: "dispatcherWallets",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "g_status",
    outputs: [
      {
        internalType: "enum Types.OrderStatus",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "increasePositionRequestKeys",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "increasePositionRequestKeysStart",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "increasePositionRequests",
    outputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "depositToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "indexToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sizeDelta",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isLong",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "acceptablePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "executionFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "hasCollateralInETH",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "increasePositionsIndex",
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
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    name: "markets",
    outputs: [
      {
        internalType: "contract LPoolStorage",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "marginLimit",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "priceUpdater",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "pool0Insurance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pool1Insurance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nonce",
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
    name: "numPairs",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "totalHelds",
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
] as const;

export class VDexStorage__factory {
  static readonly abi = _abi;
  static createInterface(): VDexStorageInterface {
    return new Interface(_abi) as VDexStorageInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): VDexStorage {
    return new Contract(address, _abi, runner) as unknown as VDexStorage;
  }
}
