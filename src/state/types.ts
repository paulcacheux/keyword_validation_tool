export const CLEAN_STATE_WORDS = 'CLEAN_STATE_WORDS';
export const LOAD_LOCAL_FILE = 'LOAD_LOCAL_FILE';
export const CHANGE_RECORD_KEPT_STATE = 'CHANGE_RECORD_KEPT_STATE';
export const FETCH_SOURCE_DOCUMENT = 'FETCH_SOURCE_DOCUMENT';
export const UPLOAD_RESULT_DOCUMENT = 'UPLOAD_RESULT_DOCUMENT';

export interface WordInfo {
    score: number;
    kept?: boolean;
}

export interface State {
    currentFileName?: string;
    words: {
        [word: string]: WordInfo;
    };
    error?: string;
}
