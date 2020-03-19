import React, { useState } from 'react';
import { makeStyles, Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

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

    const fileReader: FileReader = new FileReader();
    const handleFileRead = (): void => {
        const content = fileReader.result;
        if (typeof content === 'string') {
            setContent(content);
        }
    };
    fileReader.onloadend = handleFileRead;

    const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const files = event.target.files;
        if (files) {
            fileReader.readAsText(files[0]);
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
