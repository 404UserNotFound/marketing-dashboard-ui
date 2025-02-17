import {Button, Modal, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {updateChannel} from "../../../../redux/thunks/channelThunks.js";
import "./MarketingChannelUpdateModal.scss";

export default function MarketingChannelUpdateModal(props) {
    const {
        open,
        closeModal,
        channels,
        refreshChannelList
    } = props;
    const {
        channelId,
        name
    } = channels;

    const [newChannelValue, setNewChannelValue] = useState(channels);
    const dispatch = useDispatch();

    async function channelUpdate() {
        await dispatch(updateChannel(newChannelValue))
        refreshChannelList()
    }

    return (<div>
        <Modal
            className="modal-background"
            open={open}
            onClose={closeModal}
        >
            <div className="modal-container">
                <Typography className="modal-header">Update Channel</Typography>
                <TextField
                    className="text-field"
                    label={"Name"}
                    placeholder={name}
                    onChange={(e) => setNewChannelValue(prev => ({
                        ...prev, name: e.target.value
                    }))}
                ></TextField>

                <div className="modal-buttons">
                    <Button
                        onClick={closeModal}
                    >Cancel
                    </Button>
                    <Button onClick={() => {
                        channelUpdate(newChannelValue).then(
                            closeModal
                        )
                    }}
                    >Confirm</Button>
                </div>
            </div>

        </Modal>
    </div>)

}