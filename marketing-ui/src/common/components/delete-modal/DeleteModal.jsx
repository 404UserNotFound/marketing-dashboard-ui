import {Button, Modal, Typography} from "@mui/material";
import "./DeleteModal.scss"

export default function DeleteModal(props) {
    const {
        open,
        closeModal,
        name,
        onConfirmClick
    } = props;

    return (
        <Modal
            className="delete-modal-background"
            open={open}
            onClose={closeModal}
        >
            <div className="delete-modal-container">
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
    )

}