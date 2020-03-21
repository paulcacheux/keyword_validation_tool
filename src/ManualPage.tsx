import React from 'react';
import { FileUploadBox } from './components/FileUploadBox';
import { ScoringTable } from './components/ScoringTable';
import { OutputBox } from './components/OutputBox';

export const ManualPage: React.FC = () => {
    return (
        <>
            <FileUploadBox />
            <ScoringTable />
            <OutputBox />
        </>
    );
};
