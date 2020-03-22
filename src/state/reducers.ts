import { LOAD_LOCAL_FILE, State, CHANGE_RECORD_KEPT_STATE, FETCH_SOURCE_DOCUMENT, CLEAN_STATE_WORDS } from './types';
import { RootAction, AsyncStatus } from './actions';
import { FileContent } from '../fileUpload';
import { SourceDocumentData } from '../api';

const defaultState: State = {
    words: {},
    error: undefined,
};

export const localParsedContentToWords = (content: FileContent): State['words'] => {
    const wordInfos: State['words'] = {};
    for (const word in content) {
        wordInfos[word] = { score: content[word], kept: undefined };
    }
    return wordInfos;
};

export const remoteParsedContentToWords = (
    content: SourceDocumentData,
): { words: State['words']; currentFileName: string } => {
    const words = localParsedContentToWords(content.data);
    return { words, currentFileName: content.name };
};

export const reducer = (state = defaultState, action: RootAction): State => {
    switch (action.type) {
        case CLEAN_STATE_WORDS:
            return { currentFileName: undefined, error: undefined, words: {} };
        case LOAD_LOCAL_FILE:
            switch (action.status) {
                case AsyncStatus.SUCCESS:
                    return { words: localParsedContentToWords(action.payload), error: undefined };
                case AsyncStatus.ERROR:
                    return { words: {}, error: action.error };
                default:
                    return state;
            }

        case FETCH_SOURCE_DOCUMENT:
            switch (action.status) {
                case AsyncStatus.SUCCESS:
                    return { ...remoteParsedContentToWords(action.payload), error: undefined };
                case AsyncStatus.ERROR:
                    return { words: {}, error: action.error };
                default:
                    return state;
            }
        case CHANGE_RECORD_KEPT_STATE:
            const newWords = { ...state.words };
            newWords[action.word].kept = action.kept;
            return {
                ...state,
                error: undefined,
                words: newWords,
            };
        default:
            return state;
    }
};
