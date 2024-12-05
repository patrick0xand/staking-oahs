/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface ReaderInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getFees"
      | "getTokenBalances"
      | "getTokenBalancesWithSupplies"
      | "getTokenSupply"
      | "getTotalBalance"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getFees",
    values: [AddressLike, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenBalances",
    values: [AddressLike, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenBalancesWithSupplies",
    values: [AddressLike, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenSupply",
    values: [AddressLike, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalBalance",
    values: [AddressLike, AddressLike[]]
  ): string;

  decodeFunctionResult(functionFragment: "getFees", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTokenBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenBalancesWithSupplies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalBalance",
    data: BytesLike
  ): Result;
}

export interface Reader extends BaseContract {
  connect(runner?: ContractRunner | null): Reader;
  waitForDeployment(): Promise<this>;

  interface: ReaderInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getFees: TypedContractMethod<
    [_vault: AddressLike, _tokens: AddressLike[]],
    [bigint[]],
    "view"
  >;

  getTokenBalances: TypedContractMethod<
    [_account: AddressLike, _tokens: AddressLike[]],
    [bigint[]],
    "view"
  >;

  getTokenBalancesWithSupplies: TypedContractMethod<
    [_account: AddressLike, _tokens: AddressLike[]],
    [bigint[]],
    "view"
  >;

  getTokenSupply: TypedContractMethod<
    [_token: AddressLike, _excludedAccounts: AddressLike[]],
    [bigint],
    "view"
  >;

  getTotalBalance: TypedContractMethod<
    [_token: AddressLike, _accounts: AddressLike[]],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getFees"
  ): TypedContractMethod<
    [_vault: AddressLike, _tokens: AddressLike[]],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTokenBalances"
  ): TypedContractMethod<
    [_account: AddressLike, _tokens: AddressLike[]],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTokenBalancesWithSupplies"
  ): TypedContractMethod<
    [_account: AddressLike, _tokens: AddressLike[]],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTokenSupply"
  ): TypedContractMethod<
    [_token: AddressLike, _excludedAccounts: AddressLike[]],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTotalBalance"
  ): TypedContractMethod<
    [_token: AddressLike, _accounts: AddressLike[]],
    [bigint],
    "view"
  >;

  filters: {};
}