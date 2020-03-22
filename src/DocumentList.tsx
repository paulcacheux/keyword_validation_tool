import React, { useState, useEffect } from 'react';
import { SourceDocumentList, fetchSourceDocumentList } from './api';
import { Alert } from '@material-ui/lab';
import {
    Card,
    Typography,
    CardContent,
    Grid,
    makeStyles,
    Button,
    CardActions,
    CircularProgress,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { NavigationInfo } from './components/NavigationInfo';

const useStyles = makeStyles(theme => ({
    gridContainer: {
        marginTop: theme.spacing(1),
    },
}));

const useDocumentList = (): { documents: SourceDocumentList; isLoading: boolean; error?: string } => {
    const [documents, setDocuments] = useState<SourceDocumentList>([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        async function fetcher(): Promise<void> {
            try {
                setLoading(true);
                const list = await fetchSourceDocumentList(controller);
                setDocuments(list);
                setError(null);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error.message);
                    setDocuments([]);
                }
            }
            setLoading(false);
        }

        fetcher();

        return (): void => {
            controller.abort();
        };
    }, []);

    return { documents, isLoading, error: error || undefined };
};

export const DocumentList: React.FC = () => {
    const classes = useStyles();
    const { documents, isLoading, error } = useDocumentList();

    return (
        <>
            <NavigationInfo path="manage" />
            {error && <Alert severity="error">{error}</Alert>}
            <Button color="secondary" variant="contained" component={Link} to="/">
                Manual
            </Button>
            <Grid container spacing={2} className={classes.gridContainer}>
                {isLoading && <CircularProgress />}
                {documents.map((doc, index) => (
                    <Grid item xs={12} sm={4} lg={3} key={index}>
                        <Card elevation={3}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {doc.name}
                                </Typography>
                                <Typography color="textSecondary">
                                    {doc.result_count} result document{doc.result_count === 1 ? '' : 's'}
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
