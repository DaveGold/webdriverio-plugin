import { BaseClient } from '@ng-apimock/base-client';
export declare class WebdriverIOClient extends BaseClient {
    constructor(baseUrl: string);
    openUrl(url: string): Promise<any>;
    setCookie(name: string, value: string): Promise<any>;
}
