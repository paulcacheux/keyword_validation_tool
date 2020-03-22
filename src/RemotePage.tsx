import React, { useEffect } from 'react';
import { ScoringTable } from './components/ScoringTable';
import { OutputBox } from './components/OutputBox';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRemoteFile } from './state/actions';
import { useParams } from 'react-router-dom';
import { State } from './state/types';
import { NavigationInfo } from './components/NavigationInfo';

export const RemotePage: React.FC = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchRemoteFile(parseInt(id)));
        }
    }, [dispatch, id]);

    const fileName = useSelector((state: State) => state.currentFileName);

    return (
        <>
            <NavigationInfo path={fileName} />
            <ScoringTable />
            <OutputBox />
        </>
    );
};
