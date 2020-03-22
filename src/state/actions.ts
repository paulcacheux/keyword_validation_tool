import { LOAD_LOCAL_FILE, CHANGE_RECORD_KEPT_STATE, FETCH_SOURCE_DOCUMENT, CLEAN_STATE_WORDS } from './types';
import { FileContent, readAsText } from '../fileUpload';
import { State } from './types';
import { ThunkAction } from 'redux-thunk';
import { SourceDocumentData, fetchSourceDocument } from '../api';

export enum AsyncStatus {
    SUCCESS,
    ERROR,
}

interface AsyncSuccessAction<T, P> {
    type: T;
    status: AsyncStatus.SUCCESS;
    payload: P;
}

interface AsyncErrorAction<T> {
    type: T;
    status: AsyncStatus.ERROR;
    error: string;
}

export type AsyncAction<T, P> = AsyncSuccessAction<T, P> | AsyncErrorAction<T>;

export type UploadFileAction = AsyncAction<typeof LOAD_LOCAL_FILE, FileContent>;
export type FetchSourceDocumentAction = AsyncAction<typeof FETCH_SOURCE_DOCUMENT, SourceDocumentData>;

interface CleanStateWords {
    type: typeof CLEAN_STATE_WORDS;
}

interface ChangeRecordKeptStateAction {
    type: typeof CHANGE_RECORD_KEPT_STATE;
    word: string;
    kept?: boolean;
}

export type RootAction = UploadFileAction | FetchSourceDocumentAction | ChangeRecordKeptStateAction | CleanStateWords;

type ThunkResult<R> = ThunkAction<R, State, undefined, RootAction>;

const asyncSuccess = <T, P>(type: T, payload: P): AsyncAction<T, P> => {
    return {
        type,
        status: AsyncStatus.SUCCESS,
        payload,
    };
};

const asyncError = <T, P>(type: T, error: string): AsyncAction<T, P> => {
    return {
        type,
        status: AsyncStatus.ERROR,
        error,
    };
};

export const loadLocalFileRequest = (blob: Blob): ThunkResult<Promise<void>> => {
    return async (dispatch): Promise<void> => {
        try {
            dispatch({ type: CLEAN_STATE_WORDS });
            const content = await readAsText(blob);
            dispatch(asyncSuccess(LOAD_LOCAL_FILE, content) as UploadFileAction);
        } catch (error) {
            dispatch(asyncError(LOAD_LOCAL_FILE, error) as UploadFileAction);
        }
    };
};

export const fetchRemoteFile = (id: number): ThunkResult<Promise<void>> => {
    return async (dispatch): Promise<void> => {
        try {
            dispatch({ type: CLEAN_STATE_WORDS });
            const content = await fetchSourceDocument(id);
            dispatch(asyncSuccess(FETCH_SOURCE_DOCUMENT, content) as FetchSourceDocumentAction);
        } catch (error) {
            dispatch(asyncError(FETCH_SOURCE_DOCUMENT, error) as FetchSourceDocumentAction);
        }
    };
};

export const changeRecordKeptState = (word: string, kept?: boolean): ChangeRecordKeptStateAction => {
    return {
        type: CHANGE_RECORD_KEPT_STATE,
        word,
        kept,
    };
};
