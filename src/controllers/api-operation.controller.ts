import { Request, Response } from "express";
import { Service } from "typedi";
import { ApiOperationsQueryParams } from "../models/api-op-query-params.model";
import ApiOperationsService from '../services/api-operations.service';


@Service()
export default class ApiOperationController {

    constructor(
        private apiOperationsService: ApiOperationsService
    ) { }

    public updateApiOperations(req: Request, res: Response): Response {

        const { start: startQuery, end: endQuery } = req.query;

        if (
            (!startQuery && !endQuery) ||
            (startQuery && typeof startQuery !== 'string') ||
            (endQuery && typeof endQuery !== 'string')
        ) return res.sendStatus(400)

        const queryParams: ApiOperationsQueryParams = {
            start: startQuery ? startQuery : undefined,
            end: endQuery ? endQuery : undefined
        };

        const apiOperations: string[] = this.apiOperationsService.updateApiOperations(queryParams);

        return res.status(200).json({ data: apiOperations });
    }
}