import { Request, Response } from "express";
import { Result, ValidationError, validationResult } from "express-validator";
import { Service } from "typedi";
import { ApiOperationsQueryParams } from "../models/api-op-query-params.model";
import ApiOperationsService from '../services/api-operations.service';


@Service()
export default class ApiOperationController {

    constructor(
        private apiOperationsService: ApiOperationsService
    ) { }

    public updateApiOperations(req: Request, res: Response): Response {

        const errors: Result<ValidationError> = validationResult(req);

        if (!errors.isEmpty()) return res.sendStatus(400)

        const { start, end }: ApiOperationsQueryParams = req.query as ApiOperationsQueryParams;

        const queryParams: ApiOperationsQueryParams = {
            start: start,
            end: end
        };

        const apiOperations: string[] = this.apiOperationsService.updateApiOperations(queryParams);

        return res.status(200).json({ data: apiOperations });
    }
}