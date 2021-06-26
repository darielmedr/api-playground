import { Service } from "typedi";
import config from 'config';
import { ApiOperationsQueryParams } from "../models/api-op-query-params.model";

@Service()
export default class ApiOperationsService {

    private apiOperations: string[] = [];

    constructor() {
        const operationsDefault = process.env.SIMPLE_ARRAY?.split(',') || config.get('simpleArray') as string[];
        this.apiOperations.push(...operationsDefault);
    }

    public updateApiOperations(queryParams: ApiOperationsQueryParams): string[] {

        const { start, end } = queryParams;

        if (start) {
            this.apiOperations.unshift(start);
        }

        if (end) {
            this.apiOperations.push(end);
        }

        return this.apiOperations;
    }
}