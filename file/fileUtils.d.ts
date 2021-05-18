export interface CustomFile {
	name: string;
	size: number;
	type: string;
	lastModified: number;
	lastModifiedDate: number;
	content: string[];
}

export function readFile(file: File, contentChunkSize?: number): Promise<string[]>;

export async function convertFile(file: File, contentChunkSize?: number): Promise<CustomFile>;
