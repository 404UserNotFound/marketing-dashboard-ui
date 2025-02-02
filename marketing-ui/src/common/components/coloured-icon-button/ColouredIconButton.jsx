import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

export default function ColouredIconButton(props) {
    const {style, color, onClick} = props;
    return (
            <IconButton
                color={color}
                onClick ={onClick}
            >
                {style === "delete" && <DeleteIcon />}
                {style === "edit" && <EditIcon />}
                {style === "create" && <AddIcon />}
            </IconButton>
    );
}
