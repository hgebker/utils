declare module '@utils/api' {
	import { AxiosError } from 'axios';

	declare function logError(params: AxiosError): void;
}
