declare module '@utils/api' {
	import { AxiosError } from 'axios';

	export function logError(params: AxiosError): void;
}
