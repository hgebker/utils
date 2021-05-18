import { chunkString } from '@utils/base';

const FILE_BASE = 'base64,';

/**
 * Reads a File-Object and returns its content asynchronous. Rejects, if an error occures
 * @param {File} file The file to be read
 * @param {number} [contentChunkSize] Optional chunk size, if content should be split in parts
 * @returns The files dataUrl content, but only the data part
 */
export function readFile(file, contentChunkSize) {
	const fr = new FileReader();

	return new Promise((resolve, reject) => {
		fr.addEventListener('error', reject);
		fr.addEventListener('load', ({ target: { result } }) => {
			const content = result.split(FILE_BASE).pop();

			if (contentChunkSize) {
				resolve(chunkString(content, contentChunkSize));
			} else {
				resolve([content]);
			}
		});

		fr.readAsDataURL(file);
	});
}

export function readMultipleFiles(files, contentChunkSize) {
	return Promise.all(files.map(file => readFile(file, contentChunkSize)));
}

/**
 * Converts a File-Object (e.g. from HTML input) into a normal JS object
 * @param {File} file The file to convert
 * @param {number} [contentChunkSize] Optional chunk size, if content should be split in parts
 * @returns A standard JS object containing all information of the given File object
 */
export async function convertFile(file, contentChunkSize) {
	return {
		name: file.name,
		size: file.size,
		type: file.type,
		lastModified: file.lastModified,
		lastModifiedDate: file.lastModifiedDate,
		content: await readFile(file, contentChunkSize)
	};
}

export function convertMultipleFiles(files, contentChunkSize) {
	return Promise.all(files.map(file => convertFile(file, contentChunkSize)));
}
