export const UPLOAD_FILE_REQUEST = 'UPLOAD_FILE_REQUEST';
export const UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS';
export const UPLOAD_FILE_ERROR = 'UPLOAD_FILE_ERROR';

export interface State {
    words: {
        [word: string]: number;
    };
    error?: string;
}
