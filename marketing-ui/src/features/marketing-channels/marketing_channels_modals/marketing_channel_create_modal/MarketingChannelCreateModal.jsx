import {Button, Modal, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {createChannel} from "../../../../redux/thunks/channelThunks.js";
import {useDispatch} from "react-redux";
import "./MarketingChannelCreateModal.scss";

export default function MarketingChannelCreateModal(props) {
    const {
        open,
        closeModal,
        refreshChannelList
    } = props;
    const [newChannelValue, setNewChannelValue] = useState({name: ""});
    const dispatch = useDispatch();

    async function createNewChannel(newChannelValue) {
        await dispatch(createChannel(newChannelValue))
        refreshChannelList()
    }

    return (
        <div >
            <Modal
                className="modal-background"
                open={open}
                onClose={closeModal}
            >
                <div className="modal-container">
                    <Typography className="modal-header">Create New Channel</Typography>
                    <TextField
                        className="text-field"
                        label={"Name"}
                        required
                        onChange={(e) => {
                            setNewChannelValue({name: e.target.value})
                        }}
                    ></TextField>
                    <div className="modal-buttons">
                    <Button
                        onClick={closeModal}
                    >Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            createNewChannel(newChannelValue)
                                .then(r => closeModal())
                        }}
                    >Confirm</Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}