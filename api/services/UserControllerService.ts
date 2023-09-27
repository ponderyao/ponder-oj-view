/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Response_boolean_ } from '../models/Response_boolean_';
import type { Response_LoginUserVO_ } from '../models/Response_LoginUserVO_';
import type { Response_long_ } from '../models/Response_long_';
import type { Response_Page_UserVO_ } from '../models/Response_Page_UserVO_';
import type { Response_UserVO_ } from '../models/Response_UserVO_';
import type { UserEditDTO } from '../models/UserEditDTO';
import type { UserLoginDTO } from '../models/UserLoginDTO';
import type { UserPageQryDTO } from '../models/UserPageQryDTO';
import type { UserRegisterDTO } from '../models/UserRegisterDTO';
import type { UserRoleSetDTO } from '../models/UserRoleSetDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserControllerService {

    /**
     * editUser
     * @param dto dto
     * @returns Response_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static editUserUsingPut(
dto: UserEditDTO,
): CancelablePromise<Response_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/user/edit',
            body: dto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getLoginUser
     * @returns Response_LoginUserVO_ OK
     * @throws ApiError
     */
    public static getLoginUserUsingGet(): CancelablePromise<Response_LoginUserVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/login',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * userLogin
     * @param dto dto
     * @returns Response_LoginUserVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userLoginUsingPost(
dto: UserLoginDTO,
): CancelablePromise<Response_LoginUserVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/login',
            body: dto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * userLogout
     * @returns Response_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userLogoutUsingPost(): CancelablePromise<Response_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/logout',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * queryUserPage
     * @param dto dto
     * @returns Response_Page_UserVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static queryUserPageUsingPost(
dto: UserPageQryDTO,
): CancelablePromise<Response_Page_UserVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/page',
            body: dto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * userRegister
     * @param dto dto
     * @returns Response_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userRegisterUsingPost(
dto: UserRegisterDTO,
): CancelablePromise<Response_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/register',
            body: dto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * setUserRole
     * @param dto dto
     * @returns Response_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static setUserRoleUsingPut(
dto: UserRoleSetDTO,
): CancelablePromise<Response_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/user/role',
            body: dto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * queryUser
     * @param userId userId
     * @returns Response_UserVO_ OK
     * @throws ApiError
     */
    public static queryUserUsingGet(
userId: number,
): CancelablePromise<Response_UserVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/{userId}',
            path: {
                'userId': userId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
