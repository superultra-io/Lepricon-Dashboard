import { FC } from "react";

import { Modal, Card, Button } from "antd";
import { SelectOutlined } from "@ant-design/icons";
import { useAccount, useDisconnect, useNetwork } from "wagmi";

import { getExplorer } from "../../../utils/getExplorerByChain";
import Address from "./Address";
import background from "public/images/background.png";
import styles from "../../../styles/ConnectButton.module.css";

type DisconnectModalProps = {
    isOpen: boolean;
    onClose: React.Dispatch<React.SetStateAction<boolean>>;
};

const DisconnectModal: FC<DisconnectModalProps> = ({ isOpen, onClose }) => {
    const { chain } = useNetwork();
    const { address } = useAccount();
    const { disconnect } = useDisconnect();

    const disconnectWallet = async () => {
        disconnect();
        onClose(false);
        localStorage.removeItem("connectorId");
        window.location.reload();
    };

    console.log(background);

    return (
        <Modal
            open={isOpen}
            footer={null}
            onCancel={() => onClose(false)}
            wrapClassName="modalStyle"
            bodyStyle={{
                width: "350px",
                fontSize: "17px",
                fontWeight: "500",
                padding: "0",
            }}
            style={{ display: "flex", justifyContent: "center" }}
        >
            <div className="modal_title">Account</div>
            <Card
                style={{
                    marginTop: "10px",
                    borderRadius: "1rem",
                }}
                bodyStyle={{ padding: "15px" }}
            >
                <Address account={address as string} avatar="left" size={6} copyable style={{ fontSize: "20px" }} />
                <div style={{ marginTop: "10px", padding: "0 10px", fontSize: "17px" }}>
                    {chain?.id !== undefined && (
                        <a href={`${getExplorer()}/address/${address}`} target="_blank" rel="noreferrer">
                            <SelectOutlined style={{ marginRight: "5px" }} />
                            View on Explorer
                        </a>
                    )}
                </div>
            </Card>
            <Button
                size="large"
                type="primary"
                className={styles.disconnectButton}
                // style={{
                //     width: "100%",
                //     margin: "15px auto",
                //     borderRadius: "0.5rem",
                //     fontSize: "16px",
                //     fontWeight: "500",
                //     backgroundColor: ""
                // }}
                onClick={() => disconnectWallet()}
            >
                Disconnect Wallet
            </Button>
        </Modal>
    );
};

export default DisconnectModal;