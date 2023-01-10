import { URL } from "../data/constant";

export const useBoostAPI = () => {
    const setBoost = async (account: string, nftContractAddress: string, tokenId: number, boost: number) => {
        const body = JSON.stringify({
            account: account,
            nftContractAddress: nftContractAddress,
            tokenId: tokenId,
            boost: boost,
        });
        await fetch(`${URL}api/setNftStatus/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: body,
        });
    };

    const resetBoostInDb = async (account: string, nftContractAddress: string, tokenId: number, status: boolean) => {
        const body = JSON.stringify({
            account: account,
            nftContractAddress: nftContractAddress,
            tokenId: tokenId,
            status: status,
        });

        await fetch(`${URL}api/resetNftStatus/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: body,
        });
    };

    return { setBoost, resetBoostInDb };
};