/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
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

export interface ConstantsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "basisPointsInTotal"
      | "maxFeeBasisPoints"
      | "pipPriceMultiplier"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "basisPointsInTotal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxFeeBasisPoints",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pipPriceMultiplier",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "basisPointsInTotal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxFeeBasisPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pipPriceMultiplier",
    data: BytesLike
  ): Result;
}

export interface Constants extends BaseContract {
  connect(runner?: ContractRunner | null): Constants;
  waitForDeployment(): Promise<this>;

  interface: ConstantsInterface;

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

  basisPointsInTotal: TypedContractMethod<[], [bigint], "view">;

  maxFeeBasisPoints: TypedContractMethod<[], [bigint], "view">;

  pipPriceMultiplier: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "basisPointsInTotal"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxFeeBasisPoints"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "pipPriceMultiplier"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
