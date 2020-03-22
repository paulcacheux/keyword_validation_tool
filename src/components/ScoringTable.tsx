import React from 'react';
import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    makeStyles,
    Button,
    withStyles,
    CircularProgress,
} from '@material-ui/core';
import { green, red, yellow } from '@material-ui/core/colors';
import { useSelector, useDispatch } from 'react-redux';
import { State, WordInfo } from '../state/types';
import { changeRecordKeptState } from '../state/actions';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
    },
    table: {
        minWidth: 650,
    },
    head: {
        backgroundColor: theme.palette.primary.main,
    },
    headCell: {
        color: theme.palette.common.white,
    },
    keptRow: {
        backgroundColor: theme.palette.success.light,
    },
    removeRow: {
        backgroundColor: theme.palette.error.light,
    },
    buttonBox: {
        width: '30vh',
    },
}));

const GreenButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
        marginRight: '8px',
    },
}))(Button);

const RedButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
        '&:hover': {
            backgroundColor: red[700],
        },
    },
}))(Button);

const YellowButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(yellow[500]),
        backgroundColor: yellow[500],
        '&:hover': {
            backgroundColor: yellow[700],
        },
    },
}))(Button);

interface ScoringRowProps {
    word: string;
    info: WordInfo;
}

export const ScoringRow: React.FC<ScoringRowProps> = ({ word, info }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleOk = (): void => {
        dispatch(changeRecordKeptState(word, true));
    };

    const handleReject = (): void => {
        dispatch(changeRecordKeptState(word, false));
    };

    const handleRestore = (): void => {
        dispatch(changeRecordKeptState(word, undefined));
    };

    let buttons = null;
    if (info.kept === undefined) {
        buttons = (
            <>
                <GreenButton variant="contained" onClick={handleOk}>
                    OK
                </GreenButton>
                <RedButton variant="contained" onClick={handleReject}>
                    Reject
                </RedButton>
            </>
        );
    } else {
        buttons = (
            <>
                <YellowButton variant="contained" onClick={handleRestore}>
                    Restore
                </YellowButton>
            </>
        );
    }

    let classRow = '';
    if (info.kept === true) {
        classRow = classes.keptRow;
    } else if (info.kept === false) {
        classRow = classes.removeRow;
    }

    return (
        <TableRow className={classRow}>
            <TableCell align="left">{word}</TableCell>
            <TableCell align="right">{info.score}</TableCell>
            <TableCell align="right" className={classes.buttonBox}>
                {buttons}
            </TableCell>
        </TableRow>
    );
};

export const ScoringTable: React.FC<{ canBeEmpty?: boolean }> = ({ canBeEmpty }) => {
    const classes = useStyles();
    const content = useSelector((state: State) => state.words);

    return (
        <TableContainer component={Paper} className={classes.root} elevation={3}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow className={classes.head}>
                        <TableCell align="left" className={classes.headCell}>
                            Word
                        </TableCell>
                        <TableCell align="right" className={classes.headCell}>
                            Score
                        </TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(content).map(word => {
                        return <ScoringRow key={word} word={word} info={content[word]} />;
                    })}
                </TableBody>
            </Table>
            {!canBeEmpty && Object.keys(content).length === 0 && <CircularProgress />}
        </TableContainer>
    );
};
