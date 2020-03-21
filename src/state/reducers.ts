import { UPLOAD_FILE, State, CHANGE_RECORD_KEPT_STATE } from './types';
import { RootAction, AsyncStatus } from './actions';
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
        case UPLOAD_FILE:
            switch (action.status) {
                case AsyncStatus.SUCCESS:
                    return { words: parsedContentToWords(action.payload), error: undefined };
                case AsyncStatus.ERROR:
                    return { words: {}, error: action.error };
                default:
                    return state;
            }
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
