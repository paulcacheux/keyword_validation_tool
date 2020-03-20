import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    fileInput: {
        display: 'none',
    },
}));

interface DownloadButtonProps {
    fileName: string;
    data: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ fileName, data }) => {
    const classes = useStyles();

    const hrefData = 'data:text/plain;charset=utf-8,' + data;

    return (
        <>
            <Button
                variant="contained"
                component="a"
                color="default"
                download={fileName}
                href={hrefData}
                className={classes.button}
                startIcon={<GetAppIcon />}
            >
                Download
            </Button>
        </>
    );
};
