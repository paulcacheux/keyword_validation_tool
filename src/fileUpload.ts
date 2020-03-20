export const readAsText = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (): void => {
            const content = reader.result;
            if (typeof content === 'string') {
                resolve(content);
            } else {
                reject('Expected string file content');
            }
        };
        reader.onerror = reject;
        reader.readAsText(blob);
    });
};
