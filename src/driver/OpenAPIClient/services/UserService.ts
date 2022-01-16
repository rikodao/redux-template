/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * Returns a list of users.
     * Optional extended description in CommonMark or HTML.
     * @returns any A JSON array of user names
     * @throws ApiError
     */
    public static fetchUsers(): CancelablePromise<{
        users: Array<string>;
    }> {
        return __request({
            method: 'GET',
            path: `/user`,
        });
    }

}