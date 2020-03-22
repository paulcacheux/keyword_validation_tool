import React, { useEffect } from 'react';
import { FileUploadBox } from './components/FileUploadBox';
import { ScoringTable } from './components/ScoringTable';
import { DownloadBox } from './components/DownloadBox';
import { useDispatch } from 'react-redux';
import { CLEAN_STATE_WORDS } from './state/types';

export const ManualPage: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: CLEAN_STATE_WORDS });
    }, [dispatch]);

    return (
        <>
            <FileUploadBox />
            <ScoringTable canBeEmpty />
            <DownloadBox />
        </>
    );
};
