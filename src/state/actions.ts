import { UPLOAD_FILE, CHANGE_RECORD_KEPT_STATE } from './types';
import { FileContent, readAsText } from '../fileUpload';
import { State } from './types';
import { ThunkAction } from 'redux-thunk';

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

export type UploadFileAction = AsyncAction<typeof UPLOAD_FILE, FileContent>;

interface ChangeRecordKeptStateAction {
    type: typeof CHANGE_RECORD_KEPT_STATE;
    word: string;
    kept?: boolean;
}

export type RootAction = UploadFileAction | ChangeRecordKeptStateAction;

type ThunkResult<R> = ThunkAction<R, State, undefined, RootAction>;

export const uploadFileSuccess = (content: FileContent): UploadFileAction => {
    return {
        type: UPLOAD_FILE,
        status: AsyncStatus.SUCCESS,
        payload: content,
    };
};

export const uploadFileError = (error: string): UploadFileAction => {
    return {
        type: UPLOAD_FILE,
        status: AsyncStatus.ERROR,
        error,
    };
};

export const uploadFileRequest = (blob: Blob): ThunkResult<Promise<void>> => {
    return async (dispatch): Promise<void> => {
        try {
            const content = await readAsText(blob);
            dispatch(uploadFileSuccess(content));
        } catch (error) {
            dispatch(uploadFileError(error));
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
