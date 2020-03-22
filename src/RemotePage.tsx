import React, { useEffect } from 'react';
import { ScoringTable } from './components/ScoringTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRemoteFile } from './state/actions';
import { useParams } from 'react-router-dom';
import { State } from './state/types';
import { NavigationInfo } from './components/NavigationInfo';
import { UploadResultBox } from './components/UploadResultBox';

export const RemotePage: React.FC = () => {
    const dispatch = useDispatch();
    const { id: stringId } = useParams();
    const id = stringId ? parseInt(stringId) : null;

    useEffect(() => {
        if (id) {
            dispatch(fetchRemoteFile(id));
        }
    }, [dispatch, id]);

    const fileName = useSelector((state: State) => state.currentFileName);

    if (!id) {
        return null;
    }

    return (
        <>
            <NavigationInfo path={fileName} />
            <ScoringTable />
            <UploadResultBox id={id} />
        </>
    );
};
