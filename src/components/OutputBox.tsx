import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../state/types';
import { Paper, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
}));

export const OutputBox: React.FC = () => {
    const classes = useStyles();
    const content = useSelector((state: State) => state.words);

    const result: { [word: string]: number } = {};
    for (const word in content) {
        const info = content[word];
        if (info.kept) {
            result[word] = content[word].score;
        }
    }

    const data = 'data:text/plain;charset=utf-8,' + JSON.stringify(result);

    return (
        <Paper elevation={3} className={classes.root}>
            <Typography variant="h3">Output</Typography>
            <a download="output.json" href={data}>
                Download
            </a>
        </Paper>
    );
};
