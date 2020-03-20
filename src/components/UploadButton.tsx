import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useDispatch } from 'react-redux';
import { uploadFileRequest } from '../state/actions';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    fileInput: {
        display: 'none',
    },
}));

export const UploadButton: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleFileInput = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
        const files = event.target.files;
        if (files) {
            dispatch(uploadFileRequest(files[0]));
        }
    };

    return (
        <>
            <Button
                variant="contained"
                color="default"
                component="label"
                className={classes.button}
                startIcon={<CloudUploadIcon />}
            >
                Upload
                <input type="file" className={classes.fileInput} onChange={handleFileInput} />
            </Button>
        </>
    );
};
