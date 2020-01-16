export default class NgApimockService {
    baseUrl: string;
    globalName: string;
    constructor(options: any);
    before(capabilities: any): Promise<any>;
}
