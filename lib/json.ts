import * as fs from 'fs';

export async function readJsonFile<T>(path: string): Promise<T> {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (error, data) => {
            if (error) {
                reject(error);
            } else {
                try {
                    resolve(JSON.parse(data));
                } catch (error) {
                    reject(error);
                }
            }
        });
    });
}
