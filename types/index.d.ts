/**********************************************************
                           CONTEXT
***********************************************************/

interface UserContext {
    address?: `0x${string}` | undefined;
    chainId?: number | undefined;
    isConnected: boolean;
    tokenName: string;
    price: number;
    balances: UserBalances;
    userNFTs: Nfts;
    stakeSummary: LepriconStaking.StakingSummaryStructOutput;
    boostStatus: BoostStatusExtended | undefined;
    syncWeb3: () => void;
}

interface Web3Data {
    tokenName: string;
    balances: UserBalances;
    userNFTs: Nfts;
    stakeSummary: LepriconStaking.StakingSummaryStructOutput;
    boostStatus: BoostStatusExtended | undefined;
    syncWeb3: () => void;
}

interface UserBalances {
    native: string;
    token: string;
}

/**********************************************************
                           NFT
***********************************************************/

interface EvmNft {
    amount: number | undefined;
    blockNumber: BigNumber | undefined;
    blockNumberMinted: BigNumber | undefined;
    chain: EvmChain;
    contractType: string | undefined;
    lastMetadataSync: Date | undefined;
    lastTokenUriSync: Date | undefined;
    metadata?: any;
    name: string | undefined;
    ownerOf: EvmAddress | undefined;
    symbol: string | undefined;
    tokenAddress: EvmAddress | undefined;
    tokenHash: string | undefined;
    tokenId: string | number;
    tokenUri: string | undefined;
}

interface NftsOwners {
    _id: ObjectId;
    amount: number;
    blockNumber: string | undefined;
    blockNumberMinted: string | undefined;
    chain: string | number;
    contractType: string | undefined;
    lastMetadataSync: string | undefined;
    lastTokenUriSync: string | undefined;
    name: string | undefined;
    ownerOf: string | undefined;
    symbol: string | undefined;
    tokenAddress: string;
    tokenHash: string | undefined;
    tokenId: number;
    tokenUri: string | undefined;
    isStaked: boolean;
}

interface Nfts {
    result:
        | {
              amount?: string | undefined;
              block_number: string;
              block_number_minted: string;
              contract_type: string;
              last_metadata_sync: string;
              last_token_uri_sync: string;
              metadata?: any;
              minter_address?: string | undefined;
              name: string | null;
              owner_of: string;
              symbol?: string | null;
              token_address: string;
              token_hash: string;
              token_id: string;
              token_uri?: string | undefined;
              image?: string;
          }[]
        | undefined;
    total: number | undefined;
}

interface Nft {
    amount: string;
    block_number: string;
    block_number_minted: string;
    contract_type: string;
    image: string;
    last_metadata_sync: string;
    last_token_uri_sync: string;
    metadata: NftMetadata;
    name: string;
    owner_of: string;
    symbol: string;
    token_address: string;
    token_hash: string;
    token_id: string;
    token_uri: string;
}

interface NftMetadata {
    attributes: NftAttributes;
    description: string;
    image: string;
    name: string;
}

interface NftAttributes {
    display_type?: string;
    trait_type?: string;
    value?: string;
    boost: string;
    rarity: string;
}

type NFTinDB = {
    amount: string;
    block_number: string;
    block_number_minted: string;
    chainId?: string;
    collectionName?: string;
    contract_type: string;
    createdAt?: string;
    image: string;
    itemId?: number | undefined;
    last_metadata_sync: string;
    last_token_uri_sync: string;
    metadata: NftMetadata;
    objectId?: string;
    owner: string;
    name: string;
    owner_of: string;
    price?: number;
    seller?: string;
    sold?: boolean;
    symbol?: string;
    synced_at: string;
    tokenId?: string;
    token_address: string;
    token_hash: string;
    token_id: string;
    token_uri: string;
    updatedAt: string;
};

/**********************************************************
                            LAYOUT
***********************************************************/

type MenuItem = Required<MenuProps>["items"][number];

interface AddressProps {
    style: CSSProperties | undefined;
    avatar: string;
    size: number | undefined;
    copyable: boolean;
    account: string;
}

type ConnectModalProps = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

/**********************************************************
                            WALLET
***********************************************************/

type WalletDataProps = {
    title: string;
    value: number;
    price: number;
    tokenName: string;
    link: string | null;
};

type LinkButtonProps = {
    title: string;
    link: string | null;
};

/**********************************************************
                            STAKING 
***********************************************************/

type StakingSummaryStruct = {
    total_amount: PromiseOrValue<BigNumberish>;
    stakes: LepriconStaking.StakeStruct[];
};

type StakingSummaryStructOutput = [BigNumber, LepriconStaking.StakeStructOutput[]] & {
    total_amount: BigNumber;
    stakes: StakeStructOutput[];
};

type VaultStructOutput = [number, number, BigNumber, BigNumber] & {
    apr: number;
    timelock: BigNumber;
    totalAmountLock: BigNumber;
};

type VaultsSummaryOutput = [
    VaultStructOutput,
    VaultStructOutput,
    VaultStructOutput,
    VaultStructOutput,
    VaultStructOutput
];

type BoostStatus = [boolean, number, string, BigNumber, BigNumber] & {
    isBoost: boolean;
    boostValue: number;
    NftContractAddress: string;
    tokenId: BigNumber;
    since: BigNumber;
};

type BoostStatusExtended = {
    isBoost: boolean;
    boostValue: number;
    NftContractAddress: string;
    tokenId: number;
    sinceTimeStamp: sinceDate;
    sinceDate: Date;
};

type DetailPerUser = {
    stakes_noLock: ParsedStakeStruct[];
    stakes_3months: ParsedStakeStruct[];
    stakes_6months: ParsedStakeStruct[];
    stakes_12months: ParsedStakeStruct[];
    reward: Reward;
};

type Reward = {
    noLock: LockedReward;
    threeMonths: LockedReward;
    sixMonths: LockedReward;
    twelveMonths: LockedReward;
    total: LockedReward;
};

type LockedReward = {
    claimable: number;
    locked: number;
};

type StakingSummaryStructOutput = [BigNumber, LepriconStaking.StakeStructOutput[]] & {
    total_amount: BigNumber;
    stakes: LepriconStaking.StakeStructOutput[];
};

type StakeStructOutput = [string, number, BigNumber, BigNumber, BigNumber, BigNumber] & {
    user: string;
    timeLock: number;
    amount: BigNumber;
    since: BigNumber;
    unlockTime: BigNumber;
    claimable: BigNumber;
};

type FormattedStakeStruct = {
    user: string;
    timeLock: number;
    amount: BigNumber;
    since: BigNumber;
    unlockTime: BigNumber;
    claimable: BigNumber;
};

type ParsedStakeStruct = {
    amount: number;
    cumulatedReward: number;
    dayLock: number;
    index: number;
    since: string;
    timeLock: number;
    unlockTime: number;
    user: string;
};

type StakesPerPool = {
    stakes: {
        stakes: ParsedStakeStruct[];
        total: number;
    };
    reward: LockedReward;
};

type SortedStakes = {
    no_lock: StakesPerPool;
    three: StakesPerPool;
    six: StakesPerPool;
    twelve: StakesPerPool;
};

type StakeToWithdrawFrom = {
    stakeId: number;
    amount: number | BigNumber | string;
};

type Stake = {
    since: any;
    amount: any;
    numberOfDays: any;
    cumulatedReward: number;
    dayLock?: any;
};

/**********************************************************
                        CMC API
***********************************************************/

interface TokenDataCMC {
    circulating_supply: number;
    cmc_rank: number;
    date_added: string;
    id: number;
    is_active: number;
    is_fiat: number;
    last_updated: string;
    max_supply: number;
    name: string;
    num_market_pairs: number;
    platform: { id: number; name: string; symbol: string; slug: string; token_address: string };
    quote: {
        USD: {
            fully_diluted_market_cap: number;
            last_updated: string;
            market_cap: number;
            market_cap_dominance: number;
            percent_change_1h: number;
            percent_change_7d: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_60d: number;
            percent_change_90d: number;
            price: number;
            tvl: null;
            volume_24h: number;
            volume_change_24h: number;
        };
    };
    self_reported_circulating_supply: null;
    self_reported_market_cap: null;
    slug: string;
    symbol: string;
    tags: [];
    total_supply: number;
    tvl_ratio: null;
}

/**********************************************************
                    COMPONENTS PROPS
***********************************************************/

type DetailsModalProps = {
    lock: number;
    deposited: StakesPerPool;
    open: boolean;
    setVisibility: Dispatch<SetStateAction<boolean>>;
};

type StakingActionProps = {
    lock: number;
    deposited: StakesPerPool;
};

type WithdrawSingleModalProps = {
    open: boolean;
    setVisibility: Dispatch<SetStateAction<boolean>>;
    deposited: StakesPerPool;
    lock: number;
};

type ButtonMaxProps = {
    amount: string;
    action: (value: SetStateAction<number>) => void;
};

type DisconnectModalProps = {
    isOpen: boolean;
    onClose: React.Dispatch<React.SetStateAction<boolean>>;
};

interface NftDetailsProps {
    nft: Nft;
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type TransferNftModalProps = {
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    nft: Nft;
};

type ButtonActionProps = {
    title: string;
    action: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>;
};

type DisplayNftProps = {
    selectable: boolean;
    handleSelectNft?: (nft: Nft) => void;
};

type NftCardProps = {
    nft: Nft;
    index: number;
    handleTransfer: (nft: Nft) => void;
    handleDetail: (nft: Nft) => void;
    handleSelectNft?: (nft: Nft) => void;
    selectable: boolean;
};

type AccordionDataProps = {
    title: string;
    data: string | number;
};

type NftBoostSelectionProps = {
    deposited: StakesPerPool;
};

type StakingRecapProps = {
    totalReward: number;
};

interface TraitProps {
    title: string;
    value: string | number;
    isCopyable: boolean;
}

type AdminPaneProps = {
    setAdminPane: Dispatch<SetStateAction<boolean>>;
};

type HeaderPageProps = {
    setAdminPane: Dispatch<SetStateAction<boolean>>;
};

type ActionPaneProps = {
    id: string;
    title: string;
    max: number | string;
    lock: number;
    deposited: StakesPerPool;
};

type State<Data, ErrorType> =
    | {
          data: Data;
          loading: false;
          success: true;
          error: Maybe<ErrorType>;
      }
    | {
          data: undefined;
          loading: true;
          success: false;
          error: Maybe<ErrorType>;
      }
    | {
          data: undefined;
          loading: false;
          success: false;
          error: Maybe<ErrorType>;
      };

type HttpMethod = "GET" | "get" | "POST" | "post" | "PUT" | "put";
