// const BASE_PATH = 'http://localhost:5000';
const BASE_PATH = 'https://keyword-validation-tool.herokuapp.com';

export type SourceDocumentList = Array<{ id: number; name: string }>;

export const fetchSourceDocumentList = async (controller?: AbortController): Promise<SourceDocumentList> => {
    const response = await fetch(BASE_PATH + '/', { signal: controller?.signal });
    return await response.json();
};

export interface SourceDocumentData {
    id: number;
    name: string;
    data: { [data: string]: number };
}

export const fetchSourceDocument = async (id: number, controller?: AbortController): Promise<SourceDocumentData> => {
    const response = await fetch(BASE_PATH + '/' + id, { signal: controller?.signal });
    return await response.json();
};

export const postFetch = async <T>(url: string, body: T): Promise<Response> => {
    return await fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
};

export interface ResultDocument {
    [word: string]: number;
}

const checkStatus = async (response: Response): Promise<void> => {
    const responseData = await response.json();
    if (responseData.status && responseData.status === 'ok') {
        return;
    }
    throw new Error('error uploading document');
};

export const uploadResultDocument = async (id: number, doc: ResultDocument): Promise<void> => {
    const response = await postFetch(BASE_PATH + '/' + id, doc);
    checkStatus(response);
};
