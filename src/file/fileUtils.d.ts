declare module '@utils/file' {
	declare interface CustomFile {
		name: string;
		size: number;
		type: string;
		lastModified: number;
		lastModifiedDate: number;
		content: string[];
	}

	declare function readFile(file: File, contentChunkSize?: number): Promise<string[]>;

	declare async function convertFile(file: File, contentChunkSize?: number): Promise<CustomFile>;
}
