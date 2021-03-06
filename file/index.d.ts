export declare interface CustomFile {
	name: string;
	size: number;
	type: string;
	lastModified: number;
	lastModifiedDate: number;
	content: string[];
}

export declare function readFile(file: File, contentChunkSize?: number): Promise<string[]>;

export declare function readMultipleFiles(files: File[], contentChunkSize?: number): Promise<string[][]>;

export declare async function convertFile(file: File, contentChunkSize?: number): Promise<CustomFile>;

export declare function convertMultipleFiles(files: File[], contentChunkSize?: number): Promise<CustomFile[]>;
