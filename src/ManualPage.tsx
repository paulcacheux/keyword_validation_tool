import React from 'react';
import { FileUploadBox } from './components/FileUploadBox';
import { ScoringTable } from './components/ScoringTable';
import { DownloadBox } from './components/DownloadBox';
import { NavigationInfo } from './components/NavigationInfo';

export const ManualPage: React.FC = () => {
    return (
        <>
            <NavigationInfo path="manual" />
            <FileUploadBox />
            <ScoringTable canBeEmpty />
            <DownloadBox />
        </>
    );
};
