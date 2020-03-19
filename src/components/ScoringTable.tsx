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
} from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';

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

export const ScoringTable: React.FC = () => {
    const classes = useStyles();

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
                    <TableRow>
                        <TableCell align="left">Test</TableCell>
                        <TableCell align="right">0.82</TableCell>
                        <TableCell align="right">
                            <GreenButton variant="contained">OK</GreenButton>
                            <RedButton variant="contained">Reject</RedButton>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};
