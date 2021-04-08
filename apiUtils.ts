/* eslint-disable no-console */
import { AxiosError } from 'axios';

/**
 * Logs an error from a backed call to the console
 * @param error The error thrown in the request process
 */
export const logError = (error: AxiosError): void => {
  const { response, request, message } = error;

  console.error(message);

  if (response) {
    console.error(response.status);
    console.error(response.data);
  } else if (request) {
    console.error(request);
  }
};
