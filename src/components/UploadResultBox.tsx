import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../state/types';
import { Paper, makeStyles, Button } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import { uploadResultDocument } from '../api';
import { Alert } from '@material-ui/lab';

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

    const [successMsg, setSuccesMsg] = useState<string | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const words = useSelector((state: State) => state.words);

    const resultDocument: { [word: string]: number } = {};
    let areAllTagged = true;
    for (const word in words) {
        const info = words[word];
        if (info.kept === undefined) {
            areAllTagged = false;
        }

        if (info.kept === true) {
            resultDocument[word] = info.score;
        }
    }

    if (!areAllTagged || Object.keys(words).length === 0) {
        return null;
    }

    const handleClick = async (): Promise<void> => {
        try {
            console.log(id, resultDocument);
            await uploadResultDocument(id, resultDocument);
            setSuccesMsg('Successfully published document');
            setErrorMsg(null);
        } catch (error) {
            setErrorMsg('Error: publishing document');
            setSuccesMsg(null);
        }
    };

    return (
        <Paper elevation={3} className={classes.root}>
            {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
            {successMsg && <Alert severity="success">{successMsg}</Alert>}

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
