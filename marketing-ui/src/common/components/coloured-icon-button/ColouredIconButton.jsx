import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {AddBox} from "@mui/icons-material";

export default function ColouredIconButton(props) {
    const {style, onClick} = props;
    return (
            <IconButton
                onClick ={onClick}
            >
                {style === "delete" && <DeleteIcon />}
                {style === "edit" && <EditIcon />}
                {style === "create" && <AddBox style={{ color: "white" }}/>}
            </IconButton>
    );
}
