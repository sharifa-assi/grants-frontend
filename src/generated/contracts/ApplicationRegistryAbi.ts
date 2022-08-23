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

export interface ApplicationRegistryAbiInterface extends utils.Interface {
  functions: {
    "applicationCount()": FunctionFragment;
    "applicationMilestones(uint96,uint48)": FunctionFragment;
    "applications(uint96)": FunctionFragment;
    "approveMilestone(uint96,uint48,uint96,string)": FunctionFragment;
    "batchUpdateApplicationState(uint96[],uint8[],uint96)": FunctionFragment;
    "completeApplication(uint96,uint96,string)": FunctionFragment;
    "getApplicationOwner(uint96)": FunctionFragment;
    "getApplicationWorkspace(uint96)": FunctionFragment;
    "initialize()": FunctionFragment;
    "owner()": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "requestMilestoneApproval(uint96,uint48,string)": FunctionFragment;
    "setWorkspaceReg(address)": FunctionFragment;
    "submitApplication(address,uint96,string,uint48)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateApplicationMetadata(uint96,string,uint48)": FunctionFragment;
    "updateApplicationState(uint96,uint96,uint8,string)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
    "workspaceReg()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "applicationCount"
      | "applicationMilestones"
      | "applications"
      | "approveMilestone"
      | "batchUpdateApplicationState"
      | "completeApplication"
      | "getApplicationOwner"
      | "getApplicationWorkspace"
      | "initialize"
      | "owner"
      | "proxiableUUID"
      | "renounceOwnership"
      | "requestMilestoneApproval"
      | "setWorkspaceReg"
      | "submitApplication"
      | "transferOwnership"
      | "updateApplicationMetadata"
      | "updateApplicationState"
      | "upgradeTo"
      | "upgradeToAndCall"
      | "workspaceReg"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "applicationCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "applicationMilestones",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "applications",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "approveMilestone",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "batchUpdateApplicationState",
    values: [
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "completeApplication",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getApplicationOwner",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getApplicationWorkspace",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestMilestoneApproval",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setWorkspaceReg",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "submitApplication",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateApplicationMetadata",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateApplicationState",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
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
    functionFragment: "workspaceReg",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "applicationCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "applicationMilestones",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "applications",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveMilestone",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchUpdateApplicationState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "completeApplication",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getApplicationOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getApplicationWorkspace",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestMilestoneApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWorkspaceReg",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitApplication",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateApplicationMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateApplicationState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "workspaceReg",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "ApplicationSubmitted(uint96,address,address,string,uint48,uint256)": EventFragment;
    "ApplicationUpdated(uint96,address,string,uint8,uint48,uint256)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "MilestoneUpdated(uint96,uint96,uint8,string,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApplicationSubmitted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApplicationUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MilestoneUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
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

export interface ApplicationSubmittedEventObject {
  applicationId: BigNumber;
  grant: string;
  owner: string;
  metadataHash: string;
  milestoneCount: number;
  time: BigNumber;
}
export type ApplicationSubmittedEvent = TypedEvent<
  [BigNumber, string, string, string, number, BigNumber],
  ApplicationSubmittedEventObject
>;

export type ApplicationSubmittedEventFilter =
  TypedEventFilter<ApplicationSubmittedEvent>;

export interface ApplicationUpdatedEventObject {
  applicationId: BigNumber;
  owner: string;
  metadataHash: string;
  state: number;
  milestoneCount: number;
  time: BigNumber;
}
export type ApplicationUpdatedEvent = TypedEvent<
  [BigNumber, string, string, number, number, BigNumber],
  ApplicationUpdatedEventObject
>;

export type ApplicationUpdatedEventFilter =
  TypedEventFilter<ApplicationUpdatedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<
  [string],
  BeaconUpgradedEventObject
>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface MilestoneUpdatedEventObject {
  _id: BigNumber;
  _milestoneId: BigNumber;
  _state: number;
  _metadataHash: string;
  time: BigNumber;
}
export type MilestoneUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber, number, string, BigNumber],
  MilestoneUpdatedEventObject
>;

export type MilestoneUpdatedEventFilter =
  TypedEventFilter<MilestoneUpdatedEvent>;

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

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface ApplicationRegistryAbi extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ApplicationRegistryAbiInterface;

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
    applicationCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    applicationMilestones(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    applications(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string, number, number, string, number] & {
        id: BigNumber;
        workspaceId: BigNumber;
        grant: string;
        owner: string;
        milestoneCount: number;
        milestonesDone: number;
        metadataHash: string;
        state: number;
      }
    >;

    approveMilestone(
      _applicationId: PromiseOrValue<BigNumberish>,
      _milestoneId: PromiseOrValue<BigNumberish>,
      _workspaceId: PromiseOrValue<BigNumberish>,
      _reasonMetadataHash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    batchUpdateApplicationState(
      _applicationIds: PromiseOrValue<BigNumberish>[],
      _applicationStates: PromiseOrValue<BigNumberish>[],
      _workspaceId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    completeApplication(
      _applicationId: PromiseOrValue<BigNumberish>,
      _workspaceId: PromiseOrValue<BigNumberish>,
      _reasonMetadataHash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getApplicationOwner(
      _applicationId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getApplicationWorkspace(
      _applicationId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initialize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    requestMilestoneApproval(
      _applicationId: PromiseOrValue<BigNumberish>,
      _milestoneId: PromiseOrValue<BigNumberish>,
      _reasonMetadataHash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setWorkspaceReg(
      _workspaceReg: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitApplication(
      _grant: PromiseOrValue<string>,
      _workspaceId: PromiseOrValue<BigNumberish>,
      _metadataHash: PromiseOrValue<string>,
      _milestoneCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateApplicationMetadata(
      _applicationId: PromiseOrValue<BigNumberish>,
      _metadataHash: PromiseOrValue<string>,
      _milestoneCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateApplicationState(
      _applicationId: PromiseOrValue<BigNumberish>,
      _workspaceId: PromiseOrValue<BigNumberish>,
      _state: PromiseOrValue<BigNumberish>,
      _reasonMetadataHash: PromiseOrValue<string>,
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

    workspaceReg(overrides?: CallOverrides): Promise<[string]>;
  };

  applicationCount(overrides?: CallOverrides): Promise<BigNumber>;

  applicationMilestones(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  applications(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string, string, number, number, string, number] & {
      id: BigNumber;
      workspaceId: BigNumber;
      grant: string;
      owner: string;
      milestoneCount: number;
      milestonesDone: number;
      metadataHash: string;
      state: number;
    }
  >;

  approveMilestone(
    _applicationId: PromiseOrValue<BigNumberish>,
    _milestoneId: PromiseOrValue<BigNumberish>,
    _workspaceId: PromiseOrValue<BigNumberish>,
    _reasonMetadataHash: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  batchUpdateApplicationState(
    _applicationIds: PromiseOrValue<BigNumberish>[],
    _applicationStates: PromiseOrValue<BigNumberish>[],
    _workspaceId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  completeApplication(
    _applicationId: PromiseOrValue<BigNumberish>,
    _workspaceId: PromiseOrValue<BigNumberish>,
    _reasonMetadataHash: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getApplicationOwner(
    _applicationId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getApplicationWorkspace(
    _applicationId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initialize(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  requestMilestoneApproval(
    _applicationId: PromiseOrValue<BigNumberish>,
    _milestoneId: PromiseOrValue<BigNumberish>,
    _reasonMetadataHash: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setWorkspaceReg(
    _workspaceReg: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitApplication(
    _grant: PromiseOrValue<string>,
    _workspaceId: PromiseOrValue<BigNumberish>,
    _metadataHash: PromiseOrValue<string>,
    _milestoneCount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateApplicationMetadata(
    _applicationId: PromiseOrValue<BigNumberish>,
    _metadataHash: PromiseOrValue<string>,
    _milestoneCount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateApplicationState(
    _applicationId: PromiseOrValue<BigNumberish>,
    _workspaceId: PromiseOrValue<BigNumberish>,
    _state: PromiseOrValue<BigNumberish>,
    _reasonMetadataHash: PromiseOrValue<string>,
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

  workspaceReg(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    applicationCount(overrides?: CallOverrides): Promise<BigNumber>;

    applicationMilestones(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    applications(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string, number, number, string, number] & {
        id: BigNumber;
        workspaceId: BigNumber;
        grant: string;
        owner: string;
        milestoneCount: number;
        milestonesDone: number;
        metadataHash: string;
        state: number;
      }
    >;

    approveMilestone(
      _applicationId: PromiseOrValue<BigNumberish>,
      _milestoneId: PromiseOrValue<BigNumberish>,
      _workspaceId: PromiseOrValue<BigNumberish>,
      _reasonMetadataHash: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    batchUpdateApplicationState(
      _applicationIds: PromiseOrValue<BigNumberish>[],
      _applicationStates: PromiseOrValue<BigNumberish>[],
      _workspaceId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    completeApplication(
      _applicationId: PromiseOrValue<BigNumberish>,
      _workspaceId: PromiseOrValue<BigNumberish>,
      _reasonMetadataHash: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getApplicationOwner(
      _applicationId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getApplicationWorkspace(
      _applicationId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    requestMilestoneApproval(
      _applicationId: PromiseOrValue<BigNumberish>,
      _milestoneId: PromiseOrValue<BigNumberish>,
      _reasonMetadataHash: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setWorkspaceReg(
      _workspaceReg: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    submitApplication(
      _grant: PromiseOrValue<string>,
      _workspaceId: PromiseOrValue<BigNumberish>,
      _metadataHash: PromiseOrValue<string>,
      _milestoneCount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateApplicationMetadata(
      _applicationId: PromiseOrValue<BigNumberish>,
      _metadataHash: PromiseOrValue<string>,
      _milestoneCount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateApplicationState(
      _applicationId: PromiseOrValue<BigNumberish>,
      _workspaceId: PromiseOrValue<BigNumberish>,
      _state: PromiseOrValue<BigNumberish>,
      _reasonMetadataHash: PromiseOrValue<string>,
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

    "ApplicationSubmitted(uint96,address,address,string,uint48,uint256)"(
      applicationId?: PromiseOrValue<BigNumberish> | null,
      grant?: null,
      owner?: null,
      metadataHash?: null,
      milestoneCount?: null,
      time?: null
    ): ApplicationSubmittedEventFilter;
    ApplicationSubmitted(
      applicationId?: PromiseOrValue<BigNumberish> | null,
      grant?: null,
      owner?: null,
      metadataHash?: null,
      milestoneCount?: null,
      time?: null
    ): ApplicationSubmittedEventFilter;

    "ApplicationUpdated(uint96,address,string,uint8,uint48,uint256)"(
      applicationId?: PromiseOrValue<BigNumberish> | null,
      owner?: null,
      metadataHash?: null,
      state?: null,
      milestoneCount?: null,
      time?: null
    ): ApplicationUpdatedEventFilter;
    ApplicationUpdated(
      applicationId?: PromiseOrValue<BigNumberish> | null,
      owner?: null,
      metadataHash?: null,
      state?: null,
      milestoneCount?: null,
      time?: null
    ): ApplicationUpdatedEventFilter;

    "BeaconUpgraded(address)"(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;
    BeaconUpgraded(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "MilestoneUpdated(uint96,uint96,uint8,string,uint256)"(
      _id?: null,
      _milestoneId?: null,
      _state?: null,
      _metadataHash?: null,
      time?: null
    ): MilestoneUpdatedEventFilter;
    MilestoneUpdated(
      _id?: null,
      _milestoneId?: null,
      _state?: null,
      _metadataHash?: null,
      time?: null
    ): MilestoneUpdatedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Upgraded(address)"(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
    Upgraded(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
  };

  estimateGas: {
    applicationCount(overrides?: CallOverrides): Promise<BigNumber>;

    applicationMilestones(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    applications(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approveMilestone(
      _applicationId: PromiseOrValue<BigNumberish>,
      _milestoneId: PromiseOrValue<BigNumberish>,
      _workspaceId: PromiseOrValue<BigNumberish>,
      _reasonMetadataHash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    batchUpdateApplicationState(
      _applicationIds: PromiseOrValue<BigNumberish>[],
      _applicationStates: PromiseOrValue<BigNumberish>[],
      _workspaceId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    completeApplication(
      _applicationId: PromiseOrValue<BigNumberish>,
      _workspaceId: PromiseOrValue<BigNumberish>,
      _reasonMetadataHash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getApplicationOwner(
      _applicationId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getApplicationWorkspace(
      _applicationId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    requestMilestoneApproval(
      _applicationId: PromiseOrValue<BigNumberish>,
      _milestoneId: PromiseOrValue<BigNumberish>,
      _reasonMetadataHash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setWorkspaceReg(
      _workspaceReg: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    submitApplication(
      _grant: PromiseOrValue<string>,
      _workspaceId: PromiseOrValue<BigNumberish>,
      _metadataHash: PromiseOrValue<string>,
      _milestoneCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateApplicationMetadata(
      _applicationId: PromiseOrValue<BigNumberish>,
      _metadataHash: PromiseOrValue<string>,
      _milestoneCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateApplicationState(
      _applicationId: PromiseOrValue<BigNumberish>,
      _workspaceId: PromiseOrValue<BigNumberish>,
      _state: PromiseOrValue<BigNumberish>,
      _reasonMetadataHash: PromiseOrValue<string>,
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

    workspaceReg(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    applicationCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    applicationMilestones(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    applications(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approveMilestone(
      _applicationId: PromiseOrValue<BigNumberish>,
      _milestoneId: PromiseOrValue<BigNumberish>,
      _workspaceId: PromiseOrValue<BigNumberish>,
      _reasonMetadataHash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    batchUpdateApplicationState(
      _applicationIds: PromiseOrValue<BigNumberish>[],
      _applicationStates: PromiseOrValue<BigNumberish>[],
      _workspaceId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    completeApplication(
      _applicationId: PromiseOrValue<BigNumberish>,
      _workspaceId: PromiseOrValue<BigNumberish>,
      _reasonMetadataHash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getApplicationOwner(
      _applicationId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getApplicationWorkspace(
      _applicationId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    requestMilestoneApproval(
      _applicationId: PromiseOrValue<BigNumberish>,
      _milestoneId: PromiseOrValue<BigNumberish>,
      _reasonMetadataHash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setWorkspaceReg(
      _workspaceReg: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitApplication(
      _grant: PromiseOrValue<string>,
      _workspaceId: PromiseOrValue<BigNumberish>,
      _metadataHash: PromiseOrValue<string>,
      _milestoneCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateApplicationMetadata(
      _applicationId: PromiseOrValue<BigNumberish>,
      _metadataHash: PromiseOrValue<string>,
      _milestoneCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateApplicationState(
      _applicationId: PromiseOrValue<BigNumberish>,
      _workspaceId: PromiseOrValue<BigNumberish>,
      _state: PromiseOrValue<BigNumberish>,
      _reasonMetadataHash: PromiseOrValue<string>,
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

    workspaceReg(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
