import React, { useState, useEffect } from 'react';
import { SourceDocumentList, fetchSourceDocumentList } from './api';
import { Alert } from '@material-ui/lab';
import { Card, Typography, CardContent, Grid, makeStyles, Button, CardActions } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    gridContainer: {
        marginTop: theme.spacing(1),
    },
}));

export const DocumentList: React.FC = () => {
    const classes = useStyles();

    const [documents, setDocuments] = useState<SourceDocumentList>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        async function fetcher(): Promise<void> {
            try {
                const list = await fetchSourceDocumentList(controller);
                setDocuments(list);
                setError(null);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error.message);
                    setDocuments([]);
                }
            }
        }

        fetcher();

        return (): void => {
            controller.abort();
        };
    }, []);

    return (
        <>
            {error && <Alert severity="error">{error}</Alert>}
            <Button color="secondary" variant="contained" component={Link} to="/manual">
                Manual
            </Button>
            <Grid container spacing={2} className={classes.gridContainer}>
                {documents.map((doc, index) => (
                    <Grid item xs={12} sm={4} lg={3} key={index}>
                        <Card elevation={3}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {doc.name}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    color="primary"
                                    variant="contained"
                                    component={Link}
                                    to={`/${doc.id}`}
                                >
                                    Go
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};
