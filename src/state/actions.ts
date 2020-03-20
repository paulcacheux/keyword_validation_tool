import { UPLOAD_FILE_REQUEST, UPLOAD_FILE_SUCCESS, UPLOAD_FILE_ERROR, CHANGE_RECORD_KEPT_STATE } from './types';
import { FileContent } from '../fileUpload';

export interface UploadFileRequestAction {
    type: typeof UPLOAD_FILE_REQUEST;
    blob: Blob;
}

interface UploadFileSuccessAction {
    type: typeof UPLOAD_FILE_SUCCESS;
    content: FileContent;
}

interface UploadFileErrorAction {
    type: typeof UPLOAD_FILE_ERROR;
    error: string;
}

interface ChangeRecordKeptStateAction {
    type: typeof CHANGE_RECORD_KEPT_STATE;
    word: string;
    kept?: boolean;
}

export type RootAction =
    | UploadFileRequestAction
    | UploadFileSuccessAction
    | UploadFileErrorAction
    | ChangeRecordKeptStateAction;

export const uploadFileRequest = (blob: Blob): UploadFileRequestAction => {
    return {
        type: UPLOAD_FILE_REQUEST,
        blob,
    };
};

export const uploadFileSuccess = (content: FileContent): UploadFileSuccessAction => {
    return {
        type: UPLOAD_FILE_SUCCESS,
        content,
    };
};

export const uploadFileError = (error: string): UploadFileErrorAction => {
    return {
        type: UPLOAD_FILE_ERROR,
        error,
    };
};

export const changeRecordKeptState = (word: string, kept?: boolean): ChangeRecordKeptStateAction => {
    return {
        type: CHANGE_RECORD_KEPT_STATE,
        word,
        kept,
    };
};
