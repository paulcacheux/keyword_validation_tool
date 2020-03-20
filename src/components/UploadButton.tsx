import React, { useState } from 'react';
import { makeStyles, Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { readAsText } from '../fileUpload';

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
    const [content, setContent] = useState('');

    const handleFileInput = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
        const files = event.target.files;
        if (files) {
            const fileContent = await readAsText(files[0]);
            setContent(fileContent);
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
            <pre>{content}</pre>
        </>
    );
};
