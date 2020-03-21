export const UPLOAD_FILE = 'UPLOAD_FILE';
export const CHANGE_RECORD_KEPT_STATE = 'CHANGE_RECORD_KEPT_STATE';
export const FETCH_SOURCE_DOCUMENT = 'FETCH_SOURCE_DOCUMENT';

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
