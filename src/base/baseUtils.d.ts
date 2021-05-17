declare module '@utils/base' {
	declare function generateUUID(): string;

	declare function isValidJson(jsonString: string): boolean | Record<string, any>;

	declare function chunkString(baseString: string, size: number): string[];
}
