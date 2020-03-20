import { UPLOAD_FILE_SUCCESS, UPLOAD_FILE_ERROR, State } from './types';
import { RootAction } from './actions';

const defaultState: State = {
    words: {},
    error: undefined,
};

export const reducer = (state = defaultState, action: RootAction): State => {
    switch (action.type) {
        case UPLOAD_FILE_SUCCESS:
            return { words: action.content, error: undefined };
        case UPLOAD_FILE_ERROR:
            return { words: {}, error: action.error };
        default:
            return state;
    }
};
