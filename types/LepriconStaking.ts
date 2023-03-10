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
    PopulatedTransaction,
    Signer,
    utils,
} from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";

export declare namespace LepriconStaking {
    export type StakeStruct = {
        user: PromiseOrValue<string>;
        timeLock: PromiseOrValue<BigNumberish>;
        amount: PromiseOrValue<BigNumberish>;
        since: PromiseOrValue<BigNumberish>;
        unlockTime: PromiseOrValue<BigNumberish>;
        claimable: PromiseOrValue<BigNumberish>;
    };

    export type StakeStructOutput = [string, number, BigNumber, BigNumber, BigNumber, BigNumber] & {
        user: string;
        timeLock: number;
        amount: BigNumber;
        since: BigNumber;
        unlockTime: BigNumber;
        claimable: BigNumber;
    };

    export type StakingSummaryStruct = {
        total_amount: PromiseOrValue<BigNumberish>;
        stakes: LepriconStaking.StakeStruct[];
    };

    export type StakingSummaryStructOutput = [BigNumber, LepriconStaking.StakeStructOutput[]] & {
        total_amount: BigNumber;
        stakes: LepriconStaking.StakeStructOutput[];
    };
}

export interface LepriconStakingInterface extends utils.Interface {
    functions: {
        "boost(address)": FunctionFragment;
        "getTotalStaked()": FunctionFragment;
        "hasStake(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "resetNftStatus(address)": FunctionFragment;
        "setAPR(uint8,uint8)": FunctionFragment;
        "setAdmin(address)": FunctionFragment;
        "setNftStatus(address,address,uint256,uint8)": FunctionFragment;
        "setToken(address)": FunctionFragment;
        "stake(uint256,uint8)": FunctionFragment;
        "token()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unpause()": FunctionFragment;
        "vaults(uint256)": FunctionFragment;
        "withdrawStake(uint256,uint256)": FunctionFragment;
    };

    getFunction(
        nameOrSignatureOrTopic:
            | "boost"
            | "getTotalStaked"
            | "hasStake"
            | "owner"
            | "pause"
            | "paused"
            | "renounceOwnership"
            | "resetNftStatus"
            | "setAPR"
            | "setAdmin"
            | "setNftStatus"
            | "setToken"
            | "stake"
            | "token"
            | "transferOwnership"
            | "unpause"
            | "vaults"
            | "withdrawStake"
    ): FunctionFragment;

    encodeFunctionData(functionFragment: "boost", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getTotalStaked", values?: undefined): string;
    encodeFunctionData(functionFragment: "hasStake", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "resetNftStatus", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(
        functionFragment: "setAPR",
        values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
    ): string;
    encodeFunctionData(functionFragment: "setAdmin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(
        functionFragment: "setNftStatus",
        values: [
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ]
    ): string;
    encodeFunctionData(functionFragment: "setToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(
        functionFragment: "stake",
        values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
    ): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "vaults", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(
        functionFragment: "withdrawStake",
        values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
    ): string;

    decodeFunctionResult(functionFragment: "boost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalStaked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resetNftStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAPR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNftStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vaults", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawStake", data: BytesLike): Result;

    events: {
        "NewAdminSet(address,address)": EventFragment;
        "NewAprSet(uint8,uint8)": EventFragment;
        "NewTokenSet(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Paused(address)": EventFragment;
        "Staked(address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "Unpaused(address)": EventFragment;
    };

    getEvent(nameOrSignatureOrTopic: "NewAdminSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewAprSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewTokenSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Staked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export interface NewAdminSetEventObject {
    oldAdmin: string;
    newAdmin: string;
}
export type NewAdminSetEvent = TypedEvent<[string, string], NewAdminSetEventObject>;

export type NewAdminSetEventFilter = TypedEventFilter<NewAdminSetEvent>;

export interface NewAprSetEventObject {
    _newApr: number;
    _timelock: number;
}
export type NewAprSetEvent = TypedEvent<[number, number], NewAprSetEventObject>;

export type NewAprSetEventFilter = TypedEventFilter<NewAprSetEvent>;

export interface NewTokenSetEventObject {
    oldToken: string;
    newToken: string;
}
export type NewTokenSetEvent = TypedEvent<[string, string], NewTokenSetEventObject>;

export type NewTokenSetEventFilter = TypedEventFilter<NewTokenSetEvent>;

export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface PausedEventObject {
    account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface StakedEventObject {
    user: string;
    amount: BigNumber;
    index: BigNumber;
    timestamp: BigNumber;
    lockTime: BigNumber;
    unlockTime: BigNumber;
}
export type StakedEvent = TypedEvent<
    [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
    StakedEventObject
>;

export type StakedEventFilter = TypedEventFilter<StakedEvent>;

export interface UnpausedEventObject {
    account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface LepriconStaking extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;

    interface: LepriconStakingInterface;

    queryFilter<TEvent extends TypedEvent>(
        event: TypedEventFilter<TEvent>,
        fromBlockOrBlockhash?: string | number | undefined,
        toBlock?: string | number | undefined
    ): Promise<Array<TEvent>>;

    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;

    functions: {
        boost(
            arg0: PromiseOrValue<string>,
            overrides?: CallOverrides
        ): Promise<
            [boolean, number, string, BigNumber, BigNumber] & {
                isBoost: boolean;
                boostValue: number;
                NftContractAddress: string;
                tokenId: BigNumber;
                since: BigNumber;
            }
        >;

        getTotalStaked(overrides?: CallOverrides): Promise<[BigNumber]>;

        hasStake(
            _staker: PromiseOrValue<string>,
            overrides?: CallOverrides
        ): Promise<[LepriconStaking.StakingSummaryStructOutput]>;

        owner(overrides?: CallOverrides): Promise<[string]>;

        pause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

        paused(overrides?: CallOverrides): Promise<[boolean]>;

        renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

        resetNftStatus(
            _account: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>;

        setAPR(
            _newApr: PromiseOrValue<BigNumberish>,
            _timelock: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>;

        setAdmin(
            _newAdmin: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>;

        setNftStatus(
            _account: PromiseOrValue<string>,
            _NftContractAddress: PromiseOrValue<string>,
            _tokenId: PromiseOrValue<BigNumberish>,
            _NftBoost: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>;

        setToken(
            _newToken: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>;

        stake(
            _amount: PromiseOrValue<BigNumberish>,
            _timeLock: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>;

        token(overrides?: CallOverrides): Promise<[string]>;

        transferOwnership(
            newOwner: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>;

        unpause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

        vaults(
            arg0: PromiseOrValue<BigNumberish>,
            overrides?: CallOverrides
        ): Promise<
            [number, BigNumber, BigNumber] & {
                apr: number;
                timelock: BigNumber;
                totalAmountLock: BigNumber;
            }
        >;

        withdrawStake(
            amount: PromiseOrValue<BigNumberish>,
            stake_index: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>;
    };

    boost(
        arg0: PromiseOrValue<string>,
        overrides?: CallOverrides
    ): Promise<
        [boolean, number, string, BigNumber, BigNumber] & {
            isBoost: boolean;
            boostValue: number;
            NftContractAddress: string;
            tokenId: BigNumber;
            since: BigNumber;
        }
    >;

    getTotalStaked(overrides?: CallOverrides): Promise<BigNumber>;

    hasStake(
        _staker: PromiseOrValue<string>,
        overrides?: CallOverrides
    ): Promise<LepriconStaking.StakingSummaryStructOutput>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    resetNftStatus(
        _account: PromiseOrValue<string>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAPR(
        _newApr: PromiseOrValue<BigNumberish>,
        _timelock: PromiseOrValue<BigNumberish>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAdmin(
        _newAdmin: PromiseOrValue<string>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setNftStatus(
        _account: PromiseOrValue<string>,
        _NftContractAddress: PromiseOrValue<string>,
        _tokenId: PromiseOrValue<BigNumberish>,
        _NftBoost: PromiseOrValue<BigNumberish>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setToken(
        _newToken: PromiseOrValue<string>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stake(
        _amount: PromiseOrValue<BigNumberish>,
        _timeLock: PromiseOrValue<BigNumberish>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
        newOwner: PromiseOrValue<string>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unpause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    vaults(
        arg0: PromiseOrValue<BigNumberish>,
        overrides?: CallOverrides
    ): Promise<
        [number, BigNumber, BigNumber] & {
            apr: number;
            timelock: BigNumber;
            totalAmountLock: BigNumber;
        }
    >;

    withdrawStake(
        amount: PromiseOrValue<BigNumberish>,
        stake_index: PromiseOrValue<BigNumberish>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    callStatic: {
        boost(
            arg0: PromiseOrValue<string>,
            overrides?: CallOverrides
        ): Promise<
            [boolean, number, string, BigNumber, BigNumber] & {
                isBoost: boolean;
                boostValue: number;
                NftContractAddress: string;
                tokenId: BigNumber;
                since: BigNumber;
            }
        >;

        getTotalStaked(overrides?: CallOverrides): Promise<BigNumber>;

        hasStake(
            _staker: PromiseOrValue<string>,
            overrides?: CallOverrides
        ): Promise<LepriconStaking.StakingSummaryStructOutput>;

        owner(overrides?: CallOverrides): Promise<string>;

        pause(overrides?: CallOverrides): Promise<void>;

        paused(overrides?: CallOverrides): Promise<boolean>;

        renounceOwnership(overrides?: CallOverrides): Promise<void>;

        resetNftStatus(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

        setAPR(
            _newApr: PromiseOrValue<BigNumberish>,
            _timelock: PromiseOrValue<BigNumberish>,
            overrides?: CallOverrides
        ): Promise<void>;

        setAdmin(_newAdmin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

        setNftStatus(
            _account: PromiseOrValue<string>,
            _NftContractAddress: PromiseOrValue<string>,
            _tokenId: PromiseOrValue<BigNumberish>,
            _NftBoost: PromiseOrValue<BigNumberish>,
            overrides?: CallOverrides
        ): Promise<void>;

        setToken(_newToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

        stake(
            _amount: PromiseOrValue<BigNumberish>,
            _timeLock: PromiseOrValue<BigNumberish>,
            overrides?: CallOverrides
        ): Promise<void>;

        token(overrides?: CallOverrides): Promise<string>;

        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

        unpause(overrides?: CallOverrides): Promise<void>;

        vaults(
            arg0: PromiseOrValue<BigNumberish>,
            overrides?: CallOverrides
        ): Promise<
            [number, BigNumber, BigNumber] & {
                apr: number;
                timelock: BigNumber;
                totalAmountLock: BigNumber;
            }
        >;

        withdrawStake(
            amount: PromiseOrValue<BigNumberish>,
            stake_index: PromiseOrValue<BigNumberish>,
            overrides?: CallOverrides
        ): Promise<void>;
    };

    filters: {
        "NewAdminSet(address,address)"(
            oldAdmin?: PromiseOrValue<string> | null,
            newAdmin?: PromiseOrValue<string> | null
        ): NewAdminSetEventFilter;
        NewAdminSet(
            oldAdmin?: PromiseOrValue<string> | null,
            newAdmin?: PromiseOrValue<string> | null
        ): NewAdminSetEventFilter;

        "NewAprSet(uint8,uint8)"(_newApr?: null, _timelock?: null): NewAprSetEventFilter;
        NewAprSet(_newApr?: null, _timelock?: null): NewAprSetEventFilter;

        "NewTokenSet(address,address)"(
            oldToken?: PromiseOrValue<string> | null,
            newToken?: PromiseOrValue<string> | null
        ): NewTokenSetEventFilter;
        NewTokenSet(
            oldToken?: PromiseOrValue<string> | null,
            newToken?: PromiseOrValue<string> | null
        ): NewTokenSetEventFilter;

        "OwnershipTransferred(address,address)"(
            previousOwner?: PromiseOrValue<string> | null,
            newOwner?: PromiseOrValue<string> | null
        ): OwnershipTransferredEventFilter;
        OwnershipTransferred(
            previousOwner?: PromiseOrValue<string> | null,
            newOwner?: PromiseOrValue<string> | null
        ): OwnershipTransferredEventFilter;

        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;

        "Staked(address,uint256,uint256,uint256,uint256,uint256)"(
            user?: PromiseOrValue<string> | null,
            amount?: null,
            index?: null,
            timestamp?: null,
            lockTime?: null,
            unlockTime?: null
        ): StakedEventFilter;
        Staked(
            user?: PromiseOrValue<string> | null,
            amount?: null,
            index?: null,
            timestamp?: null,
            lockTime?: null,
            unlockTime?: null
        ): StakedEventFilter;

        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };

    estimateGas: {
        boost(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

        getTotalStaked(overrides?: CallOverrides): Promise<BigNumber>;

        hasStake(_staker: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

        owner(overrides?: CallOverrides): Promise<BigNumber>;

        pause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

        paused(overrides?: CallOverrides): Promise<BigNumber>;

        renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

        resetNftStatus(
            _account: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>;

        setAPR(
            _newApr: PromiseOrValue<BigNumberish>,
            _timelock: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>;

        setAdmin(
            _newAdmin: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>;

        setNftStatus(
            _account: PromiseOrValue<string>,
            _NftContractAddress: PromiseOrValue<string>,
            _tokenId: PromiseOrValue<BigNumberish>,
            _NftBoost: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>;

        setToken(
            _newToken: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>;

        stake(
            _amount: PromiseOrValue<BigNumberish>,
            _timeLock: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>;

        token(overrides?: CallOverrides): Promise<BigNumber>;

        transferOwnership(
            newOwner: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>;

        unpause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

        vaults(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

        withdrawStake(
            amount: PromiseOrValue<BigNumberish>,
            stake_index: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>;
    };

    populateTransaction: {
        boost(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

        getTotalStaked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        hasStake(_staker: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        pause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

        resetNftStatus(
            _account: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>;

        setAPR(
            _newApr: PromiseOrValue<BigNumberish>,
            _timelock: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>;

        setAdmin(
            _newAdmin: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>;

        setNftStatus(
            _account: PromiseOrValue<string>,
            _NftContractAddress: PromiseOrValue<string>,
            _tokenId: PromiseOrValue<BigNumberish>,
            _NftBoost: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>;

        setToken(
            _newToken: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>;

        stake(
            _amount: PromiseOrValue<BigNumberish>,
            _timeLock: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>;

        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        transferOwnership(
            newOwner: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>;

        unpause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

        vaults(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

        withdrawStake(
            amount: PromiseOrValue<BigNumberish>,
            stake_index: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>;
    };
}
