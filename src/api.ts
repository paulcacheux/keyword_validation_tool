const BASE_PATH = 'http://localhost:5000';

export type SourceDocumentList = Array<{ id: number; name: string }>;

export const fetchSourceDocumentList = async (controller?: AbortController): Promise<SourceDocumentList> => {
    const response = await fetch(BASE_PATH + '/', { signal: controller?.signal });
    return response.json();
};

export interface SourceDocumentData {
    id: number;
    name: string;
    data: { [data: string]: number };
}

export const fetchSourceDocument = async (id: number, controller?: AbortController): Promise<SourceDocumentData> => {
    const response = await fetch(BASE_PATH + '/' + id, { signal: controller?.signal });
    return response.json();
};
