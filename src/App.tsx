import React from 'react';
import { AppBar, Toolbar, Typography, Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ManualPage } from './ManualPage';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import { DocumentList } from './DocumentList';
import { RemotePage } from './RemotePage';

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    },
    container: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}));

export const App: React.FC = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Keyword Validation Tool
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container fixed className={classes.container}>
                <Router basename="/">
                    <Switch>
                        <Route exact path="/">
                            <ManualPage />
                        </Route>
                        <Route path="/manage">
                            <DocumentList />
                        </Route>
                        <Route path="/:id">
                            <RemotePage />
                        </Route>
                    </Switch>
                </Router>
            </Container>
        </React.Fragment>
    );
};
