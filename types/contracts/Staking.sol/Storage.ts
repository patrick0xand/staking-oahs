/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface StorageInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "MAX_TIME"
      | "paidOahReward"
      | "rewardToken"
      | "stakes"
      | "totalBnbStaking"
      | "totalEthStaking"
      | "totalOahStaking"
      | "totalUsdtStaking"
      | "userStakes"
      | "withdrawables"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "DevWithdraw"
      | "RewardTokenChanged"
      | "UserClaimed"
      | "UserStaked"
      | "UserWithdrew"
  ): EventFragment;

  encodeFunctionData(functionFragment: "MAX_TIME", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "paidOahReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalBnbStaking",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalEthStaking",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalOahStaking",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalUsdtStaking",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "userStakes",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawables",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "MAX_TIME", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "paidOahReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stakes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalBnbStaking",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalEthStaking",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalOahStaking",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalUsdtStaking",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userStakes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawables",
    data: BytesLike
  ): Result;
}

export namespace DevWithdrawEvent {
  export type InputTuple = [token: AddressLike, amount: BigNumberish];
  export type OutputTuple = [token: string, amount: bigint];
  export interface OutputObject {
    token: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardTokenChangedEvent {
  export type InputTuple = [
    oldRewardToken: AddressLike,
    returnedAmount: BigNumberish,
    newRewardToken: AddressLike
  ];
  export type OutputTuple = [
    oldRewardToken: string,
    returnedAmount: bigint,
    newRewardToken: string
  ];
  export interface OutputObject {
    oldRewardToken: string;
    returnedAmount: bigint;
    newRewardToken: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UserClaimedEvent {
  export type InputTuple = [
    id: BigNumberish,
    wallet: AddressLike,
    rewardToken: AddressLike,
    claimedAmount: BigNumberish
  ];
  export type OutputTuple = [
    id: bigint,
    wallet: string,
    rewardToken: string,
    claimedAmount: bigint
  ];
  export interface OutputObject {
    id: bigint;
    wallet: string;
    rewardToken: string;
    claimedAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UserStakedEvent {
  export type InputTuple = [
    user: AddressLike,
    pid: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [user: string, pid: bigint, amount: bigint];
  export interface OutputObject {
    user: string;
    pid: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UserWithdrewEvent {
  export type InputTuple = [
    user: AddressLike,
    pid: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [user: string, pid: bigint, amount: bigint];
  export interface OutputObject {
    user: string;
    pid: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Storage extends BaseContract {
  connect(runner?: ContractRunner | null): Storage;
  waitForDeployment(): Promise<this>;

  interface: StorageInterface;

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

  MAX_TIME: TypedContractMethod<[], [bigint], "view">;

  paidOahReward: TypedContractMethod<[], [bigint], "view">;

  rewardToken: TypedContractMethod<[], [string], "view">;

  stakes: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint, boolean] & {
        stakeToken: string;
        convertRate: bigint;
        lockTimePeriod: bigint;
        isActive: boolean;
      }
    ],
    "view"
  >;

  totalBnbStaking: TypedContractMethod<[], [bigint], "view">;

  totalEthStaking: TypedContractMethod<[], [bigint], "view">;

  totalOahStaking: TypedContractMethod<[], [bigint], "view">;

  totalUsdtStaking: TypedContractMethod<[], [bigint], "view">;

  userStakes: TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [
      [bigint, bigint, bigint, bigint] & {
        stakeAmount: bigint;
        startDate: bigint;
        accumulatedRewards: bigint;
        withdrawTime: bigint;
      }
    ],
    "view"
  >;

  withdrawables: TypedContractMethod<
    [arg0: BytesLike],
    [[bigint, bigint] & { withdrawAmount: bigint; maxWithdrawAmount: bigint }],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "MAX_TIME"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "paidOahReward"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "stakes"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint, boolean] & {
        stakeToken: string;
        convertRate: bigint;
        lockTimePeriod: bigint;
        isActive: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "totalBnbStaking"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalEthStaking"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalOahStaking"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalUsdtStaking"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "userStakes"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [
      [bigint, bigint, bigint, bigint] & {
        stakeAmount: bigint;
        startDate: bigint;
        accumulatedRewards: bigint;
        withdrawTime: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "withdrawables"
  ): TypedContractMethod<
    [arg0: BytesLike],
    [[bigint, bigint] & { withdrawAmount: bigint; maxWithdrawAmount: bigint }],
    "view"
  >;

  getEvent(
    key: "DevWithdraw"
  ): TypedContractEvent<
    DevWithdrawEvent.InputTuple,
    DevWithdrawEvent.OutputTuple,
    DevWithdrawEvent.OutputObject
  >;
  getEvent(
    key: "RewardTokenChanged"
  ): TypedContractEvent<
    RewardTokenChangedEvent.InputTuple,
    RewardTokenChangedEvent.OutputTuple,
    RewardTokenChangedEvent.OutputObject
  >;
  getEvent(
    key: "UserClaimed"
  ): TypedContractEvent<
    UserClaimedEvent.InputTuple,
    UserClaimedEvent.OutputTuple,
    UserClaimedEvent.OutputObject
  >;
  getEvent(
    key: "UserStaked"
  ): TypedContractEvent<
    UserStakedEvent.InputTuple,
    UserStakedEvent.OutputTuple,
    UserStakedEvent.OutputObject
  >;
  getEvent(
    key: "UserWithdrew"
  ): TypedContractEvent<
    UserWithdrewEvent.InputTuple,
    UserWithdrewEvent.OutputTuple,
    UserWithdrewEvent.OutputObject
  >;

  filters: {
    "DevWithdraw(address,uint256)": TypedContractEvent<
      DevWithdrawEvent.InputTuple,
      DevWithdrawEvent.OutputTuple,
      DevWithdrawEvent.OutputObject
    >;
    DevWithdraw: TypedContractEvent<
      DevWithdrawEvent.InputTuple,
      DevWithdrawEvent.OutputTuple,
      DevWithdrawEvent.OutputObject
    >;

    "RewardTokenChanged(address,uint256,address)": TypedContractEvent<
      RewardTokenChangedEvent.InputTuple,
      RewardTokenChangedEvent.OutputTuple,
      RewardTokenChangedEvent.OutputObject
    >;
    RewardTokenChanged: TypedContractEvent<
      RewardTokenChangedEvent.InputTuple,
      RewardTokenChangedEvent.OutputTuple,
      RewardTokenChangedEvent.OutputObject
    >;

    "UserClaimed(uint256,address,address,uint256)": TypedContractEvent<
      UserClaimedEvent.InputTuple,
      UserClaimedEvent.OutputTuple,
      UserClaimedEvent.OutputObject
    >;
    UserClaimed: TypedContractEvent<
      UserClaimedEvent.InputTuple,
      UserClaimedEvent.OutputTuple,
      UserClaimedEvent.OutputObject
    >;

    "UserStaked(address,uint256,uint256)": TypedContractEvent<
      UserStakedEvent.InputTuple,
      UserStakedEvent.OutputTuple,
      UserStakedEvent.OutputObject
    >;
    UserStaked: TypedContractEvent<
      UserStakedEvent.InputTuple,
      UserStakedEvent.OutputTuple,
      UserStakedEvent.OutputObject
    >;

    "UserWithdrew(address,uint256,uint256)": TypedContractEvent<
      UserWithdrewEvent.InputTuple,
      UserWithdrewEvent.OutputTuple,
      UserWithdrewEvent.OutputObject
    >;
    UserWithdrew: TypedContractEvent<
      UserWithdrewEvent.InputTuple,
      UserWithdrewEvent.OutputTuple,
      UserWithdrewEvent.OutputObject
    >;
  };
}
