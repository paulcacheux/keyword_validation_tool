export const UPLOAD_FILE_REQUEST = 'UPLOAD_FILE_REQUEST';
export const UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS';
export const UPLOAD_FILE_ERROR = 'UPLOAD_FILE_ERROR';
export const CHANGE_RECORD_KEPT_STATE = 'CHANGE_RECORD_KEPT_STATE';

export interface WordInfo {
    score: number;
    kept?: boolean;
}

export interface State {
    words: {
        [word: string]: WordInfo;
    };
    error?: string;
}
