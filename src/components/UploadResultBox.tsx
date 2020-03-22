import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../state/types';
import { Paper, makeStyles, Button } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export const UploadResultBox: React.FC<{ id: number }> = ({ id }) => {
    const classes = useStyles();
    const words = useSelector((state: State) => state.words);

    const resultDocument: { [word: string]: number } = {};
    let areAllTagged = false;
    for (const word in words) {
        const info = words[word];
        if (info.kept !== undefined) {
            areAllTagged = true;
        }

        if (info.kept === true) {
            resultDocument[word] = info.score;
        }
    }

    if (!areAllTagged) {
        return null;
    }

    const handleClick = (): void => {
        console.log(id, resultDocument);
    };

    return (
        <Paper elevation={3} className={classes.root}>
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<PublishIcon />}
                onClick={handleClick}
            >
                Publish
            </Button>
        </Paper>
    );
};
