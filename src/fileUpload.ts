export interface FileContent {
    [word: string]: number;
}

export const readAsText = (blob: Blob): Promise<FileContent> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (): void => {
            const content = reader.result;
            if (typeof content === 'string') {
                const parsedContent = JSON.parse(content);
                resolve(parsedContent);
            } else {
                reject('Expected string file content');
            }
        };
        reader.onerror = reject;
        reader.readAsText(blob);
    });
};
