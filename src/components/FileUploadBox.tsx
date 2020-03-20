import React from 'react';
import { Paper, Typography, makeStyles } from '@material-ui/core';
import { UploadButton } from './UploadButton';
import { State } from '../state/types';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}));

export const FileUploadBox: React.FC = () => {
    const classes = useStyles();
    const content = useSelector((state: State) => state.words);

    return (
        <Paper elevation={3} className={classes.root}>
            <Typography variant="h3">File upload</Typography>
            <UploadButton />
            <pre>{JSON.stringify(content)}</pre>
        </Paper>
    );
};
