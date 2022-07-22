/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface GrantAbiInterface extends utils.Interface {
  functions: {
    "active()": FunctionFragment;
    "applicationReg()": FunctionFragment;
    "disburseReward(uint96,uint96,address,uint256)": FunctionFragment;
    "disburseRewardP2P(uint96,address,uint96,address,uint256)": FunctionFragment;
    "incrementApplicant()": FunctionFragment;
    "initialize(uint96,string,address,address,address)": FunctionFragment;
    "metadataHash()": FunctionFragment;
    "numApplicants()": FunctionFragment;
    "owner()": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "recordTransaction(uint96,uint96,address,bytes,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateGrant(string)": FunctionFragment;
    "updateGrantAccessibility(bool)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
    "withdrawFunds(address,uint256,address)": FunctionFragment;
    "workspaceId()": FunctionFragment;
    "workspaceReg()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "active"
      | "applicationReg"
      | "disburseReward"
      | "disburseRewardP2P"
      | "incrementApplicant"
      | "initialize"
      | "metadataHash"
      | "numApplicants"
      | "owner"
      | "proxiableUUID"
      | "recordTransaction"
      | "renounceOwnership"
      | "transferOwnership"
      | "updateGrant"
      | "updateGrantAccessibility"
      | "upgradeTo"
      | "upgradeToAndCall"
      | "withdrawFunds"
      | "workspaceId"
      | "workspaceReg"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "active", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "applicationReg",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "disburseReward",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "disburseRewardP2P",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "incrementApplicant",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "metadataHash",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numApplicants",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "recordTransaction",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateGrant",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateGrantAccessibility",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFunds",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "workspaceId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "workspaceReg",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "active", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "applicationReg",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disburseReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disburseRewardP2P",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "incrementApplicant",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "metadataHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numApplicants",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recordTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateGrant",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateGrantAccessibility",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "workspaceId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "workspaceReg",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "DisburseReward(uint96,uint96,address,address,uint256,bool,uint256)": EventFragment;
    "DisburseRewardFailed(uint96,uint96,address,address,uint256,uint256)": EventFragment;
    "FundsDepositFailed(address,uint256,uint256)": EventFragment;
    "FundsWithdrawn(address,uint256,address,uint256)": EventFragment;
    "GrantUpdated(uint96,string,bool,uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TransactionRecord(uint96,uint96,address,address,bytes,uint256,uint256)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DisburseReward"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DisburseRewardFailed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FundsDepositFailed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FundsWithdrawn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GrantUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionRecord"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface AdminChangedEventObject {
  previousAdmin: string;
  newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<
  [string, string],
  AdminChangedEventObject
>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<
  [string],
  BeaconUpgradedEventObject
>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export interface DisburseRewardEventObject {
  applicationId: BigNumber;
  milestoneId: BigNumber;
  asset: string;
  sender: string;
  amount: BigNumber;
  isP2P: boolean;
  time: BigNumber;
}
export type DisburseRewardEvent = TypedEvent<
  [BigNumber, BigNumber, string, string, BigNumber, boolean, BigNumber],
  DisburseRewardEventObject
>;

export type DisburseRewardEventFilter = TypedEventFilter<DisburseRewardEvent>;

export interface DisburseRewardFailedEventObject {
  applicationId: BigNumber;
  milestoneId: BigNumber;
  asset: string;
  sender: string;
  amount: BigNumber;
  time: BigNumber;
}
export type DisburseRewardFailedEvent = TypedEvent<
  [BigNumber, BigNumber, string, string, BigNumber, BigNumber],
  DisburseRewardFailedEventObject
>;

export type DisburseRewardFailedEventFilter =
  TypedEventFilter<DisburseRewardFailedEvent>;

export interface FundsDepositFailedEventObject {
  asset: string;
  amount: BigNumber;
  time: BigNumber;
}
export type FundsDepositFailedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  FundsDepositFailedEventObject
>;

export type FundsDepositFailedEventFilter =
  TypedEventFilter<FundsDepositFailedEvent>;

export interface FundsWithdrawnEventObject {
  asset: string;
  amount: BigNumber;
  recipient: string;
  time: BigNumber;
}
export type FundsWithdrawnEvent = TypedEvent<
  [string, BigNumber, string, BigNumber],
  FundsWithdrawnEventObject
>;

export type FundsWithdrawnEventFilter = TypedEventFilter<FundsWithdrawnEvent>;

export interface GrantUpdatedEventObject {
  workspaceId: BigNumber;
  metadataHash: string;
  active: boolean;
  time: BigNumber;
}
export type GrantUpdatedEvent = TypedEvent<
  [BigNumber, string, boolean, BigNumber],
  GrantUpdatedEventObject
>;

export type GrantUpdatedEventFilter = TypedEventFilter<GrantUpdatedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TransactionRecordEventObject {
  applicationId: BigNumber;
  milestoneId: BigNumber;
  asset: string;
  sender: string;
  transactionHash: string;
  amount: BigNumber;
  time: BigNumber;
}
export type TransactionRecordEvent = TypedEvent<
  [BigNumber, BigNumber, string, string, string, BigNumber, BigNumber],
  TransactionRecordEventObject
>;

export type TransactionRecordEventFilter =
  TypedEventFilter<TransactionRecordEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface GrantAbi extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GrantAbiInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    active(overrides?: CallOverrides): Promise<[boolean]>;

    applicationReg(overrides?: CallOverrides): Promise<[string]>;

    disburseReward(
      _applicationId: PromiseOrValue<BigNumberish>,
      _milestoneId: PromiseOrValue<BigNumberish>,
      _erc20Interface: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    disburseRewardP2P(
      _applicationId: PromiseOrValue<BigNumberish>,
      _applicantWalletAddress: PromiseOrValue<string>,
      _milestoneId: PromiseOrValue<BigNumberish>,
      _erc20Interface: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    incrementApplicant(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _workspaceId: PromiseOrValue<BigNumberish>,
      _metadataHash: PromiseOrValue<string>,
      _workspaceReg: PromiseOrValue<string>,
      _applicationReg: PromiseOrValue<string>,
      _grantFactoryOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    metadataHash(overrides?: CallOverrides): Promise<[string]>;

    numApplicants(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    recordTransaction(
      _applicationId: PromiseOrValue<BigNumberish>,
      _milestoneId: PromiseOrValue<BigNumberish>,
      _asset: PromiseOrValue<string>,
      _transactionHash: PromiseOrValue<BytesLike>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateGrant(
      _metadataHash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateGrantAccessibility(
      _canAcceptApplication: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawFunds(
      _erc20Interface: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    workspaceId(overrides?: CallOverrides): Promise<[BigNumber]>;

    workspaceReg(overrides?: CallOverrides): Promise<[string]>;
  };

  active(overrides?: CallOverrides): Promise<boolean>;

  applicationReg(overrides?: CallOverrides): Promise<string>;

  disburseReward(
    _applicationId: PromiseOrValue<BigNumberish>,
    _milestoneId: PromiseOrValue<BigNumberish>,
    _erc20Interface: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  disburseRewardP2P(
    _applicationId: PromiseOrValue<BigNumberish>,
    _applicantWalletAddress: PromiseOrValue<string>,
    _milestoneId: PromiseOrValue<BigNumberish>,
    _erc20Interface: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  incrementApplicant(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _workspaceId: PromiseOrValue<BigNumberish>,
    _metadataHash: PromiseOrValue<string>,
    _workspaceReg: PromiseOrValue<string>,
    _applicationReg: PromiseOrValue<string>,
    _grantFactoryOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  metadataHash(overrides?: CallOverrides): Promise<string>;

  numApplicants(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  recordTransaction(
    _applicationId: PromiseOrValue<BigNumberish>,
    _milestoneId: PromiseOrValue<BigNumberish>,
    _asset: PromiseOrValue<string>,
    _transactionHash: PromiseOrValue<BytesLike>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateGrant(
    _metadataHash: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateGrantAccessibility(
    _canAcceptApplication: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawFunds(
    _erc20Interface: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  workspaceId(overrides?: CallOverrides): Promise<BigNumber>;

  workspaceReg(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    active(overrides?: CallOverrides): Promise<boolean>;

    applicationReg(overrides?: CallOverrides): Promise<string>;

    disburseReward(
      _applicationId: PromiseOrValue<BigNumberish>,
      _milestoneId: PromiseOrValue<BigNumberish>,
      _erc20Interface: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    disburseRewardP2P(
      _applicationId: PromiseOrValue<BigNumberish>,
      _applicantWalletAddress: PromiseOrValue<string>,
      _milestoneId: PromiseOrValue<BigNumberish>,
      _erc20Interface: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    incrementApplicant(overrides?: CallOverrides): Promise<void>;

    initialize(
      _workspaceId: PromiseOrValue<BigNumberish>,
      _metadataHash: PromiseOrValue<string>,
      _workspaceReg: PromiseOrValue<string>,
      _applicationReg: PromiseOrValue<string>,
      _grantFactoryOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    metadataHash(overrides?: CallOverrides): Promise<string>;

    numApplicants(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    recordTransaction(
      _applicationId: PromiseOrValue<BigNumberish>,
      _milestoneId: PromiseOrValue<BigNumberish>,
      _asset: PromiseOrValue<string>,
      _transactionHash: PromiseOrValue<BytesLike>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateGrant(
      _metadataHash: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateGrantAccessibility(
      _canAcceptApplication: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawFunds(
      _erc20Interface: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    workspaceId(overrides?: CallOverrides): Promise<BigNumber>;

    workspaceReg(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;
    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;

    "BeaconUpgraded(address)"(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;
    BeaconUpgraded(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;

    "DisburseReward(uint96,uint96,address,address,uint256,bool,uint256)"(
      applicationId?: PromiseOrValue<BigNumberish> | null,
      milestoneId?: null,
      asset?: null,
      sender?: null,
      amount?: null,
      isP2P?: null,
      time?: null
    ): DisburseRewardEventFilter;
    DisburseReward(
      applicationId?: PromiseOrValue<BigNumberish> | null,
      milestoneId?: null,
      asset?: null,
      sender?: null,
      amount?: null,
      isP2P?: null,
      time?: null
    ): DisburseRewardEventFilter;

    "DisburseRewardFailed(uint96,uint96,address,address,uint256,uint256)"(
      applicationId?: PromiseOrValue<BigNumberish> | null,
      milestoneId?: null,
      asset?: null,
      sender?: null,
      amount?: null,
      time?: null
    ): DisburseRewardFailedEventFilter;
    DisburseRewardFailed(
      applicationId?: PromiseOrValue<BigNumberish> | null,
      milestoneId?: null,
      asset?: null,
      sender?: null,
      amount?: null,
      time?: null
    ): DisburseRewardFailedEventFilter;

    "FundsDepositFailed(address,uint256,uint256)"(
      asset?: null,
      amount?: null,
      time?: null
    ): FundsDepositFailedEventFilter;
    FundsDepositFailed(
      asset?: null,
      amount?: null,
      time?: null
    ): FundsDepositFailedEventFilter;

    "FundsWithdrawn(address,uint256,address,uint256)"(
      asset?: null,
      amount?: null,
      recipient?: null,
      time?: null
    ): FundsWithdrawnEventFilter;
    FundsWithdrawn(
      asset?: null,
      amount?: null,
      recipient?: null,
      time?: null
    ): FundsWithdrawnEventFilter;

    "GrantUpdated(uint96,string,bool,uint256)"(
      workspaceId?: PromiseOrValue<BigNumberish> | null,
      metadataHash?: null,
      active?: null,
      time?: null
    ): GrantUpdatedEventFilter;
    GrantUpdated(
      workspaceId?: PromiseOrValue<BigNumberish> | null,
      metadataHash?: null,
      active?: null,
      time?: null
    ): GrantUpdatedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "TransactionRecord(uint96,uint96,address,address,bytes,uint256,uint256)"(
      applicationId?: PromiseOrValue<BigNumberish> | null,
      milestoneId?: null,
      asset?: null,
      sender?: null,
      transactionHash?: null,
      amount?: null,
      time?: null
    ): TransactionRecordEventFilter;
    TransactionRecord(
      applicationId?: PromiseOrValue<BigNumberish> | null,
      milestoneId?: null,
      asset?: null,
      sender?: null,
      transactionHash?: null,
      amount?: null,
      time?: null
    ): TransactionRecordEventFilter;

    "Upgraded(address)"(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
    Upgraded(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
  };

  estimateGas: {
    active(overrides?: CallOverrides): Promise<BigNumber>;

    applicationReg(overrides?: CallOverrides): Promise<BigNumber>;

    disburseReward(
      _applicationId: PromiseOrValue<BigNumberish>,
      _milestoneId: PromiseOrValue<BigNumberish>,
      _erc20Interface: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    disburseRewardP2P(
      _applicationId: PromiseOrValue<BigNumberish>,
      _applicantWalletAddress: PromiseOrValue<string>,
      _milestoneId: PromiseOrValue<BigNumberish>,
      _erc20Interface: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    incrementApplicant(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialize(
      _workspaceId: PromiseOrValue<BigNumberish>,
      _metadataHash: PromiseOrValue<string>,
      _workspaceReg: PromiseOrValue<string>,
      _applicationReg: PromiseOrValue<string>,
      _grantFactoryOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    metadataHash(overrides?: CallOverrides): Promise<BigNumber>;

    numApplicants(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    recordTransaction(
      _applicationId: PromiseOrValue<BigNumberish>,
      _milestoneId: PromiseOrValue<BigNumberish>,
      _asset: PromiseOrValue<string>,
      _transactionHash: PromiseOrValue<BytesLike>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateGrant(
      _metadataHash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateGrantAccessibility(
      _canAcceptApplication: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawFunds(
      _erc20Interface: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    workspaceId(overrides?: CallOverrides): Promise<BigNumber>;

    workspaceReg(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    active(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    applicationReg(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    disburseReward(
      _applicationId: PromiseOrValue<BigNumberish>,
      _milestoneId: PromiseOrValue<BigNumberish>,
      _erc20Interface: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    disburseRewardP2P(
      _applicationId: PromiseOrValue<BigNumberish>,
      _applicantWalletAddress: PromiseOrValue<string>,
      _milestoneId: PromiseOrValue<BigNumberish>,
      _erc20Interface: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    incrementApplicant(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _workspaceId: PromiseOrValue<BigNumberish>,
      _metadataHash: PromiseOrValue<string>,
      _workspaceReg: PromiseOrValue<string>,
      _applicationReg: PromiseOrValue<string>,
      _grantFactoryOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    metadataHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numApplicants(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recordTransaction(
      _applicationId: PromiseOrValue<BigNumberish>,
      _milestoneId: PromiseOrValue<BigNumberish>,
      _asset: PromiseOrValue<string>,
      _transactionHash: PromiseOrValue<BytesLike>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateGrant(
      _metadataHash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateGrantAccessibility(
      _canAcceptApplication: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawFunds(
      _erc20Interface: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    workspaceId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    workspaceReg(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}