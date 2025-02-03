import {Button, Modal, Typography} from "@mui/material";

export default function DeleteModal(props) {
    const {
        open,
        closeModal,
        name,
        onConfirmClick
    } = props;

    return (<div>
        <Modal
            open={open}
            onClose={closeModal}
        >
            <div>
                <Typography>Are you sure you wish to delete the "{name}" entry?</Typography>
                <Button
                    onClick={closeModal}
                >Cancel
                </Button>
                <Button onClick={() => {
                    onConfirmClick()
                }}
                >Confirm</Button>
            </div>

        </Modal>
    </div>)

}