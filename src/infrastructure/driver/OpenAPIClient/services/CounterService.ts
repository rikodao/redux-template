/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CounterService {

    /**
     * Returns a current count
     * @returns any Returns a current count
     * @throws ApiError
     */
    public static fetchCount(): CancelablePromise<{
        count: number;
    }> {
        return __request({
            method: 'GET',
            path: `/counter`,
        });
    }

}