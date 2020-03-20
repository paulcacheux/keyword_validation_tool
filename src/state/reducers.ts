import { UPLOAD_FILE_SUCCESS, UPLOAD_FILE_ERROR, State, CHANGE_RECORD_KEPT_STATE } from './types';
import { RootAction } from './actions';
import { FileContent } from '../fileUpload';

const defaultState: State = {
    words: {},
    error: undefined,
};

export const parsedContentToWords = (content: FileContent): State['words'] => {
    const wordInfos: State['words'] = {};
    for (const word in content) {
        wordInfos[word] = { score: content[word], kept: undefined };
    }
    return wordInfos;
};

export const reducer = (state = defaultState, action: RootAction): State => {
    switch (action.type) {
        case UPLOAD_FILE_SUCCESS:
            return { words: parsedContentToWords(action.content), error: undefined };
        case UPLOAD_FILE_ERROR:
            return { words: {}, error: action.error };
        case CHANGE_RECORD_KEPT_STATE:
            const newWords = { ...state.words };
            newWords[action.word].kept = action.kept;
            return {
                error: undefined,
                words: newWords,
            };
        default:
            return state;
    }
};
