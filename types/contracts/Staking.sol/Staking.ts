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

export declare namespace Storage {
  export type StakeStruct = {
    stakeToken: AddressLike;
    convertRate: BigNumberish;
    interestRate: BigNumberish;
    isActive: boolean;
  };

  export type StakeStructOutput = [
    stakeToken: string,
    convertRate: bigint,
    interestRate: bigint,
    isActive: boolean
  ] & {
    stakeToken: string;
    convertRate: bigint;
    interestRate: bigint;
    isActive: boolean;
  };

  export type UserStakeStruct = {
    user: AddressLike;
    stakeToken: AddressLike;
    stakeAmount: BigNumberish;
    interestRate: BigNumberish;
    receiveAmount: BigNumberish;
    interestAmount: BigNumberish;
    startDate: BigNumberish;
    interestWithdrew: BigNumberish;
    withdrawTime: BigNumberish;
    period: BigNumberish;
    completed: boolean;
  };

  export type UserStakeStructOutput = [
    user: string,
    stakeToken: string,
    stakeAmount: bigint,
    interestRate: bigint,
    receiveAmount: bigint,
    interestAmount: bigint,
    startDate: bigint,
    interestWithdrew: bigint,
    withdrawTime: bigint,
    period: bigint,
    completed: boolean
  ] & {
    user: string;
    stakeToken: string;
    stakeAmount: bigint;
    interestRate: bigint;
    receiveAmount: bigint;
    interestAmount: bigint;
    startDate: bigint;
    interestWithdrew: bigint;
    withdrawTime: bigint;
    period: bigint;
    completed: boolean;
  };
}

export interface StakingInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "OahToken"
      | "calculateTotalInterest"
      | "claim"
      | "claimMinute"
      | "initialize"
      | "newStake"
      | "owner"
      | "pause"
      | "paused"
      | "proxiableUUID"
      | "renounceOwnership"
      | "setStakes"
      | "stakes"
      | "transferOwnership"
      | "unpause"
      | "upgradeTo"
      | "upgradeToAndCall"
      | "userStakes"
      | "withdraw"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AdminChanged"
      | "BeaconUpgraded"
      | "Initialized"
      | "OwnershipTransferred"
      | "Paused"
      | "StakesChanged"
      | "Unpaused"
      | "Upgraded"
      | "UserClaimed"
      | "UserStaked"
      | "UserWithdrew"
  ): EventFragment;

  encodeFunctionData(functionFragment: "OahToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "calculateTotalInterest",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "claim", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "claimMinute",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "newStake",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setStakes",
    values: [Storage.StakeStruct[]]
  ): string;
  encodeFunctionData(functionFragment: "stakes", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "userStakes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "OahToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateTotalInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimMinute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "newStake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setStakes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userStakes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace AdminChangedEvent {
  export type InputTuple = [previousAdmin: AddressLike, newAdmin: AddressLike];
  export type OutputTuple = [previousAdmin: string, newAdmin: string];
  export interface OutputObject {
    previousAdmin: string;
    newAdmin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BeaconUpgradedEvent {
  export type InputTuple = [beacon: AddressLike];
  export type OutputTuple = [beacon: string];
  export interface OutputObject {
    beacon: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StakesChangedEvent {
  export type InputTuple = [_stakes: Storage.StakeStruct[]];
  export type OutputTuple = [_stakes: Storage.StakeStructOutput[]];
  export interface OutputObject {
    _stakes: Storage.StakeStructOutput[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnpausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpgradedEvent {
  export type InputTuple = [implementation: AddressLike];
  export type OutputTuple = [implementation: string];
  export interface OutputObject {
    implementation: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UserClaimedEvent {
  export type InputTuple = [id: BigNumberish, claimedAmount: BigNumberish];
  export type OutputTuple = [id: bigint, claimedAmount: bigint];
  export interface OutputObject {
    id: bigint;
    claimedAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UserStakedEvent {
  export type InputTuple = [
    id: BigNumberish,
    _userStake: Storage.UserStakeStruct
  ];
  export type OutputTuple = [
    id: bigint,
    _userStake: Storage.UserStakeStructOutput
  ];
  export interface OutputObject {
    id: bigint;
    _userStake: Storage.UserStakeStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UserWithdrewEvent {
  export type InputTuple = [
    id: BigNumberish,
    _userStake: Storage.UserStakeStruct
  ];
  export type OutputTuple = [
    id: bigint,
    _userStake: Storage.UserStakeStructOutput
  ];
  export interface OutputObject {
    id: bigint;
    _userStake: Storage.UserStakeStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Staking extends BaseContract {
  connect(runner?: ContractRunner | null): Staking;
  waitForDeployment(): Promise<this>;

  interface: StakingInterface;

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

  OahToken: TypedContractMethod<[], [string], "view">;

  calculateTotalInterest: TypedContractMethod<
    [period: BigNumberish, interestRate: BigNumberish, amount: BigNumberish],
    [bigint],
    "view"
  >;

  claim: TypedContractMethod<[id: BigNumberish], [void], "payable">;

  claimMinute: TypedContractMethod<[id: BigNumberish], [void], "payable">;

  initialize: TypedContractMethod<
    [_owner: AddressLike, _oahToken: AddressLike],
    [void],
    "nonpayable"
  >;

  newStake: TypedContractMethod<
    [_stakeToken: AddressLike, _amount: BigNumberish, _period: BigNumberish],
    [void],
    "payable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  paused: TypedContractMethod<[], [boolean], "view">;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setStakes: TypedContractMethod<
    [_stake: Storage.StakeStruct[]],
    [void],
    "nonpayable"
  >;

  stakes: TypedContractMethod<
    [arg0: AddressLike],
    [
      [string, bigint, bigint, boolean] & {
        stakeToken: string;
        convertRate: bigint;
        interestRate: bigint;
        isActive: boolean;
      }
    ],
    "view"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  upgradeTo: TypedContractMethod<
    [newImplementation: AddressLike],
    [void],
    "nonpayable"
  >;

  upgradeToAndCall: TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  userStakes: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [
        string,
        string,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        boolean
      ] & {
        user: string;
        stakeToken: string;
        stakeAmount: bigint;
        interestRate: bigint;
        receiveAmount: bigint;
        interestAmount: bigint;
        startDate: bigint;
        interestWithdrew: bigint;
        withdrawTime: bigint;
        period: bigint;
        completed: boolean;
      }
    ],
    "view"
  >;

  withdraw: TypedContractMethod<[id: BigNumberish], [void], "payable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "OahToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "calculateTotalInterest"
  ): TypedContractMethod<
    [period: BigNumberish, interestRate: BigNumberish, amount: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "claim"
  ): TypedContractMethod<[id: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "claimMinute"
  ): TypedContractMethod<[id: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [_owner: AddressLike, _oahToken: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "newStake"
  ): TypedContractMethod<
    [_stakeToken: AddressLike, _amount: BigNumberish, _period: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "paused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "proxiableUUID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setStakes"
  ): TypedContractMethod<[_stake: Storage.StakeStruct[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "stakes"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [string, bigint, bigint, boolean] & {
        stakeToken: string;
        convertRate: bigint;
        interestRate: bigint;
        isActive: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unpause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgradeTo"
  ): TypedContractMethod<
    [newImplementation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "userStakes"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [
        string,
        string,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        boolean
      ] & {
        user: string;
        stakeToken: string;
        stakeAmount: bigint;
        interestRate: bigint;
        receiveAmount: bigint;
        interestAmount: bigint;
        startDate: bigint;
        interestWithdrew: bigint;
        withdrawTime: bigint;
        period: bigint;
        completed: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[id: BigNumberish], [void], "payable">;

  getEvent(
    key: "AdminChanged"
  ): TypedContractEvent<
    AdminChangedEvent.InputTuple,
    AdminChangedEvent.OutputTuple,
    AdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "BeaconUpgraded"
  ): TypedContractEvent<
    BeaconUpgradedEvent.InputTuple,
    BeaconUpgradedEvent.OutputTuple,
    BeaconUpgradedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "StakesChanged"
  ): TypedContractEvent<
    StakesChangedEvent.InputTuple,
    StakesChangedEvent.OutputTuple,
    StakesChangedEvent.OutputObject
  >;
  getEvent(
    key: "Unpaused"
  ): TypedContractEvent<
    UnpausedEvent.InputTuple,
    UnpausedEvent.OutputTuple,
    UnpausedEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded"
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
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
    "AdminChanged(address,address)": TypedContractEvent<
      AdminChangedEvent.InputTuple,
      AdminChangedEvent.OutputTuple,
      AdminChangedEvent.OutputObject
    >;
    AdminChanged: TypedContractEvent<
      AdminChangedEvent.InputTuple,
      AdminChangedEvent.OutputTuple,
      AdminChangedEvent.OutputObject
    >;

    "BeaconUpgraded(address)": TypedContractEvent<
      BeaconUpgradedEvent.InputTuple,
      BeaconUpgradedEvent.OutputTuple,
      BeaconUpgradedEvent.OutputObject
    >;
    BeaconUpgraded: TypedContractEvent<
      BeaconUpgradedEvent.InputTuple,
      BeaconUpgradedEvent.OutputTuple,
      BeaconUpgradedEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Paused(address)": TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;
    Paused: TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;

    "StakesChanged(tuple[])": TypedContractEvent<
      StakesChangedEvent.InputTuple,
      StakesChangedEvent.OutputTuple,
      StakesChangedEvent.OutputObject
    >;
    StakesChanged: TypedContractEvent<
      StakesChangedEvent.InputTuple,
      StakesChangedEvent.OutputTuple,
      StakesChangedEvent.OutputObject
    >;

    "Unpaused(address)": TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
    Unpaused: TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;

    "Upgraded(address)": TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
    Upgraded: TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;

    "UserClaimed(uint256,uint256)": TypedContractEvent<
      UserClaimedEvent.InputTuple,
      UserClaimedEvent.OutputTuple,
      UserClaimedEvent.OutputObject
    >;
    UserClaimed: TypedContractEvent<
      UserClaimedEvent.InputTuple,
      UserClaimedEvent.OutputTuple,
      UserClaimedEvent.OutputObject
    >;

    "UserStaked(uint256,tuple)": TypedContractEvent<
      UserStakedEvent.InputTuple,
      UserStakedEvent.OutputTuple,
      UserStakedEvent.OutputObject
    >;
    UserStaked: TypedContractEvent<
      UserStakedEvent.InputTuple,
      UserStakedEvent.OutputTuple,
      UserStakedEvent.OutputObject
    >;

    "UserWithdrew(uint256,tuple)": TypedContractEvent<
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
