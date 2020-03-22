import React from 'react';
import { FileUploadBox } from './components/FileUploadBox';
import { ScoringTable } from './components/ScoringTable';
import { DownloadBox } from './components/DownloadBox';

export const ManualPage: React.FC = () => {
    return (
        <>
            <FileUploadBox />
            <ScoringTable canBeEmpty />
            <DownloadBox />
        </>
    );
};
