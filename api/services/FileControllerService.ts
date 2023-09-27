/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Response_string_ } from '../models/Response_string_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FileControllerService {

    /**
     * downloadFile
     * @param filePath filePath
     * @returns any OK
     * @throws ApiError
     */
    public static downloadFileUsingGet(
filePath: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/file/download',
            query: {
                'filePath': filePath,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * uploadFile
     * @param file 
     * @returns Response_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static uploadFileUsingPost(
file?: Blob,
): CancelablePromise<Response_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/file/upload',
            formData: {
                'file': file,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
