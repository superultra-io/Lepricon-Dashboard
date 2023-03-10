import React, { FC, useState } from "react";

import { Skeleton, Alert } from "antd";

import NftCard from "./NftCard";
import { useUserData } from "../../../context/UserContextProvider";
import { isProdEnv } from "../../../data/constant";
import { useIPFS, useVerifyMetadata } from "../../../hooks";
import styles from "../../../styles/Wallet.module.css";
import { getNftImage } from "../../../utils/getNftAttributes";
import NftsDetailsModal from "../../templates/wallet/component/NftDetailsModal";
import TransferNftModal from "../../templates/wallet/component/TransferNftModal";

const DisplayNft: FC<DisplayNftProps> = ({ selectable, handleSelectNft }) => {
    const { isConnected, userNFTs } = useUserData();

    const { verifyMetadata } = useVerifyMetadata();
    const { resolveLink } = useIPFS();

    const [nftToShow, setNftToShow] = useState<Nft>();
    const [isNftDetailsModalOpen, setIsNftDetailsModalOpen] = useState<boolean>(false);

    const [nftToTransfer, setNftToTransfer] = useState<Nft>();
    const [isTransferModalOpen, setIsTransferModalOpen] = useState<boolean>(false);

    const handleTransfer = (nft: Nft) => {
        setNftToTransfer(nft);
        setIsTransferModalOpen(true);
    };

    const handleShowDetail = (nft: Nft) => {
        setNftToShow(nft);
        setIsNftDetailsModalOpen(true);
    };

    const alertMessage = <Alert type="info" showIcon message={"No NFTs found on this account"} />;

    return (
        <div className={styles.nftContainer}>
            <Skeleton loading={isConnected && !userNFTs}>
                {userNFTs?.total === 0 && alertMessage}

                {userNFTs.result &&
                    userNFTs.result.length > 0 &&
                    userNFTs.result.map((nft: any, index: number) => {
                        nft = verifyMetadata(nft);

                        if (!nft.image) {
                            const data = JSON.parse(nft.metadata);
                            nft.metadata = data;
                            if (nft.metadata) {
                                nft.image = resolveLink(nft.metadata.image);
                                nft.name = nft.metadata.name;
                            }
                            if (isProdEnv) {
                                nft.image = getNftImage(nft);
                            }
                        }

                        return (
                            <NftCard
                                key={index}
                                nft={nft}
                                index={index}
                                handleTransfer={handleTransfer}
                                handleDetail={handleShowDetail}
                                handleSelectNft={handleSelectNft}
                                selectable={selectable}
                            />
                        );
                    })}
            </Skeleton>
            {nftToShow && !selectable && (
                <NftsDetailsModal
                    nft={nftToShow}
                    isModalOpen={isNftDetailsModalOpen}
                    setIsModalOpen={setIsNftDetailsModalOpen}
                />
            )}
            {nftToTransfer && (
                <TransferNftModal
                    isModalOpen={isTransferModalOpen}
                    setIsModalOpen={setIsTransferModalOpen}
                    nft={nftToTransfer}
                />
            )}
        </div>
    );
};

export default DisplayNft;
