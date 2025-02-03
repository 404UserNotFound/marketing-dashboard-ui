import {Button, Modal, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {createChannel} from "../../../../redux/thunks/channelThunks.js";
import {useDispatch} from "react-redux";

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

    return (<div>
        <Modal
            open={open}
            onClose={closeModal}
        >
            <div>
                <Typography>Create New Channel:</Typography>
                <TextField
                    label={"Name"}
                    required
                    onChange={(e) => {
                        setNewChannelValue({name: e.target.value})}}
                ></TextField>
                <Button
                    onClick={closeModal}
                >Cancel
                </Button>
                <Button onClick={() => {
                    createNewChannel(newChannelValue)
                        .then(r => closeModal())
                }}
                >Confirm</Button>
            </div>
        </Modal>
    </div>)
}