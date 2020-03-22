import React from 'react';
import { Typography, Breadcrumbs, Link as MUILink } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface NavigationInfoProps {
    path?: string;
}

export const NavigationInfo: React.FC<NavigationInfoProps> = ({ path }) => {
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb">
                <MUILink color="inherit" component={Link} to="/">
                    Source Documents
                </MUILink>

                {path && <Typography color="textPrimary">{path}</Typography>}
            </Breadcrumbs>
        </>
    );
};
