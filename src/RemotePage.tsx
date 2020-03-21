import React from 'react';
import { ScoringTable } from './components/ScoringTable';
import { OutputBox } from './components/OutputBox';
import { useDispatch } from 'react-redux';
import { Paper, Typography, makeStyles } from '@material-ui/core';
import { fetchRemoteFile } from './state/actions';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}));

export const RemotePage: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { id } = useParams();

    if (id) {
        dispatch(fetchRemoteFile(parseInt(id)));
    }

    return (
        <>
            <Paper elevation={3} className={classes.root}>
                <Typography variant="h3">{id}</Typography>
            </Paper>

            <ScoringTable />
            <OutputBox />
        </>
    );
};
