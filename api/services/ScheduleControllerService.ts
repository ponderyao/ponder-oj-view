/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Response_boolean_ } from '../models/Response_boolean_';
import type { Response_List_ScheduleJob_ } from '../models/Response_List_ScheduleJob_';
import type { Response_string_ } from '../models/Response_string_';
import type { ScheduleJob } from '../models/ScheduleJob';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ScheduleControllerService {

    /**
     * queryJobs
     * @returns Response_List_ScheduleJob_ OK
     * @throws ApiError
     */
    public static queryJobsUsingGet(): CancelablePromise<Response_List_ScheduleJob_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/job',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * createJob
     * @param scheduleJob scheduleJob
     * @returns Response_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static createJobUsingPost(
scheduleJob: ScheduleJob,
): CancelablePromise<Response_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/job/create',
            body: scheduleJob,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * modifyJob
     * @param scheduleJob scheduleJob
     * @returns Response_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static modifyJobUsingPost(
scheduleJob: ScheduleJob,
): CancelablePromise<Response_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/job/modify',
            body: scheduleJob,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * pauseJob
     * @param scheduleJob scheduleJob
     * @returns Response_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static pauseJobUsingPost(
scheduleJob: ScheduleJob,
): CancelablePromise<Response_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/job/pause',
            body: scheduleJob,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * removeJob
     * @param scheduleJob scheduleJob
     * @returns Response_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static removeJobUsingPost(
scheduleJob: ScheduleJob,
): CancelablePromise<Response_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/job/remove',
            body: scheduleJob,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * resumeJob
     * @param scheduleJob scheduleJob
     * @returns Response_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static resumeJobUsingPost(
scheduleJob: ScheduleJob,
): CancelablePromise<Response_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/job/resume',
            body: scheduleJob,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * queryJobState
     * @param scheduleJob scheduleJob
     * @returns Response_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static queryJobStateUsingPost(
scheduleJob: ScheduleJob,
): CancelablePromise<Response_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/job/state',
            body: scheduleJob,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
