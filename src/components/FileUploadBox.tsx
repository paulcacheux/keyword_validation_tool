import React from 'react';
import { Paper, Typography, makeStyles } from '@material-ui/core';
import { UploadButton } from './FileUploadButton';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(2),
    },
}));

export const FileUploadBox: React.FC = () => {
    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.root}>
            <Typography variant="h3">File upload</Typography>
            <UploadButton />
        </Paper>
    );
};
