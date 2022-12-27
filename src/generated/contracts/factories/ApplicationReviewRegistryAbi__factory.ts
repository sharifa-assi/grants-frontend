/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ApplicationReviewRegistryAbi,
  ApplicationReviewRegistryAbiInterface,
} from "../ApplicationReviewRegistryAbi";

const _abi = [
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
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint96",
        name: "_reviewId",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "_applicationId",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_previousReviewerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_newReviewerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "ReviewMigrate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint96[]",
        name: "_reviewIds",
        type: "uint96[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_reviewer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "ReviewPaymentFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint96[]",
        name: "_reviewIds",
        type: "uint96[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_reviewer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_transactionHash",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "ReviewPaymentMarkedDone",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint96",
        name: "_reviewId",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_reviewerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "_workspaceId",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "_applicationId",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_grantAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_metadataHash",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "ReviewSubmitted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint96[]",
        name: "_reviewIds",
        type: "uint96[]",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "_workspaceId",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "_applicationId",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_grantAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "_reviewers",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "bool[]",
        name: "_active",
        type: "bool[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "ReviewersAssigned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint96",
        name: "_workspaceId",
        type: "uint96",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_grantAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_metadataHash",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "RubricsSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint96",
        name: "_workspaceId",
        type: "uint96",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_grantAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "_numberOfReviewersPerApplication",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_metadataHash",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "RubricsSetV2",
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
    inputs: [
      {
        internalType: "uint96",
        name: "_applicationId",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "_grantAddress",
        type: "address",
      },
    ],
    name: "appendToApplicationList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "applicationReg",
    outputs: [
      {
        internalType: "contract IApplicationRegistry",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "applicationsToGrant",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "_workspaceId",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "_applicationId",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "_grantAddress",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_reviewers",
        type: "address[]",
      },
      {
        internalType: "bool[]",
        name: "_active",
        type: "bool[]",
      },
    ],
    name: "assignReviewers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "_workspaceId",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "_applicationId",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "_grantAddress",
        type: "address",
      },
    ],
    name: "assignReviewersRoundRobin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "_workspaceId",
        type: "uint96",
      },
      {
        internalType: "uint96[]",
        name: "_applicationIds",
        type: "uint96[]",
      },
      {
        internalType: "address",
        name: "_reviewer",
        type: "address",
      },
      {
        internalType: "uint96[]",
        name: "_reviewIds",
        type: "uint96[]",
      },
      {
        internalType: "contract IERC20",
        name: "_erc20Interface",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "fulfillPayment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "grantFactory",
    outputs: [
      {
        internalType: "contract IGrantFactory",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "grantReviewStates",
    outputs: [
      {
        internalType: "address",
        name: "grant",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "workspaceId",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "numOfReviews",
        type: "uint96",
      },
      {
        internalType: "string",
        name: "rubricsMetadataHash",
        type: "string",
      },
      {
        internalType: "uint96",
        name: "numOfReviewersPerApplication",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_grantAddress",
        type: "address",
      },
    ],
    name: "hasAutoAssigningEnabled",
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
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "isAutoAssigningEnabled",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lastAssignedReviewerIndices",
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
        internalType: "uint96",
        name: "_workspaceId",
        type: "uint96",
      },
      {
        internalType: "uint96[]",
        name: "_applicationIds",
        type: "uint96[]",
      },
      {
        internalType: "address",
        name: "_reviewer",
        type: "address",
      },
      {
        internalType: "uint96[]",
        name: "_reviewIds",
        type: "uint96[]",
      },
      {
        internalType: "contract IERC20",
        name: "_erc20Interface",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_transactionHash",
        type: "string",
      },
    ],
    name: "markPaymentDone",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "fromWallet",
        type: "address",
      },
      {
        internalType: "address",
        name: "toWallet",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "appId",
        type: "uint96",
      },
    ],
    name: "migrateWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "proxiableUUID",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reviewCount",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    name: "reviewPaymentsStatus",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "reviewerAssignmentCounts",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "reviewers",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    name: "reviews",
    outputs: [
      {
        internalType: "uint96",
        name: "id",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "workspaceId",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "applicationId",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "grant",
        type: "address",
      },
      {
        internalType: "address",
        name: "reviewer",
        type: "address",
      },
      {
        internalType: "string",
        name: "metadataHash",
        type: "string",
      },
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IApplicationRegistry",
        name: "_applicationReg",
        type: "address",
      },
    ],
    name: "setApplicationReg",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IGrantFactory",
        name: "_grantFactory",
        type: "address",
      },
    ],
    name: "setGrantFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "_workspaceId",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "_grantAddress",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "_numberOfReviewersPerApplication",
        type: "uint96",
      },
      {
        internalType: "string",
        name: "_metadataHash",
        type: "string",
      },
    ],
    name: "setRubrics",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "_workspaceId",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "_grantAddress",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_reviewers",
        type: "address[]",
      },
      {
        internalType: "bool[]",
        name: "_active",
        type: "bool[]",
      },
      {
        internalType: "uint96",
        name: "_numOfReviewersPerApplication",
        type: "uint96",
      },
      {
        internalType: "string",
        name: "_rubricMetadataHash",
        type: "string",
      },
    ],
    name: "setRubricsAndEnableAutoAssign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IWorkspaceRegistry",
        name: "_workspaceReg",
        type: "address",
      },
    ],
    name: "setWorkspaceReg",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_reviewerAddress",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "_workspaceId",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "_applicationId",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "_grantAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_metadataHash",
        type: "string",
      },
    ],
    name: "submitReview",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "workspaceReg",
    outputs: [
      {
        internalType: "contract IWorkspaceRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class ApplicationReviewRegistryAbi__factory {
  static readonly abi = _abi;
  static createInterface(): ApplicationReviewRegistryAbiInterface {
    return new utils.Interface(_abi) as ApplicationReviewRegistryAbiInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ApplicationReviewRegistryAbi {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ApplicationReviewRegistryAbi;
  }
}
